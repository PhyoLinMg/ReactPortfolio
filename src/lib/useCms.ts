import { useCallback, useSyncExternalStore } from 'react';

type Entry<T> =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; data: T };

// One request per query, shared by every section that reads it.
const entries = new Map<string, Entry<unknown>>();
const listeners = new Map<string, Set<() => void>>();

function notify(key: string) {
  listeners.get(key)?.forEach((listener) => listener());
}

function start<T>(key: string, fetcher: () => Promise<T>) {
  const loading: Entry<T> = { status: 'loading' };
  entries.set(key, loading);
  fetcher().then(
    (data) => {
      // Ignore a request that a retry has already replaced.
      if (entries.get(key) !== loading) return;
      entries.set(key, { status: 'ready', data });
      notify(key);
    },
    () => {
      if (entries.get(key) !== loading) return;
      entries.set(key, { status: 'error' });
      notify(key);
    },
  );
}

export type CmsState<T> =
  | { status: 'loading' }
  | { status: 'error'; retry: () => void }
  | { status: 'ready'; data: T };

export function useCms<T>(key: string, fetcher: () => Promise<T>): CmsState<T> {
  if (!entries.has(key)) start(key, fetcher);

  const subscribe = useCallback(
    (listener: () => void) => {
      let set = listeners.get(key);
      if (!set) listeners.set(key, (set = new Set()));
      set.add(listener);
      return () => {
        set.delete(listener);
      };
    },
    [key],
  );

  const entry = useSyncExternalStore(subscribe, () => entries.get(key) as Entry<T>);

  const retry = useCallback(() => {
    // A retry already in flight is not restarted by a second click.
    if (entries.get(key)?.status !== 'error') return;
    start(key, fetcher);
    notify(key);
  }, [key, fetcher]);

  return entry.status === 'error' ? { status: 'error', retry } : entry;
}
