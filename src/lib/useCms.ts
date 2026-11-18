import { useCallback, useEffect, useState } from 'react';

type Entry<T> = { promise: Promise<T>; value?: T; error?: unknown };

// One request per query, shared by every section that reads it.
const cache = new Map<string, Entry<unknown>>();

function load<T>(key: string, fetcher: () => Promise<T>): Entry<T> {
  let entry = cache.get(key) as Entry<T> | undefined;
  if (!entry) {
    const created: Entry<T> = {
      promise: fetcher().then(
        (value) => {
          created.value = value;
          return value;
        },
        (error) => {
          created.error = error;
          throw error;
        },
      ),
    };
    created.promise.catch(() => undefined);
    cache.set(key, created as Entry<unknown>);
    entry = created;
  }
  return entry;
}

export type CmsState<T> =
  | { status: 'loading' }
  | { status: 'error'; retry: () => void }
  | { status: 'ready'; data: T };

export function useCms<T>(key: string, fetcher: () => Promise<T>): CmsState<T> {
  const [, setTick] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const entry = load(key, fetcher);

  useEffect(() => {
    let live = true;
    entry.promise.then(
      () => live && setTick((t) => t + 1),
      () => live && setTick((t) => t + 1),
    );
    return () => {
      live = false;
    };
  }, [entry, attempt]);

  const retry = useCallback(() => {
    cache.delete(key);
    setAttempt((a) => a + 1);
  }, [key]);

  if (entry.value !== undefined) return { status: 'ready', data: entry.value };
  if (entry.error !== undefined) return { status: 'error', retry };
  return { status: 'loading' };
}
