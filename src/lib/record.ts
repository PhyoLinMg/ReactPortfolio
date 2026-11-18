import { TimelineItem } from '../network/model/Timeline';
import { Project } from '../network/model/Project';

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

export interface Span {
  start: { year: number; month: number } | null;
  end: { year: number; month: number } | null;
  present: boolean;
}

function point(text: string) {
  const match = text.match(/([A-Za-z]{3,})?\s*(\d{4})/);
  if (!match) return null;
  const month = match[1] ? MONTHS[match[1].slice(0, 3).toLowerCase()] ?? 0 : 0;
  return { year: Number(match[2]), month };
}

export function parseRange(range: string): Span {
  const [from = '', to = ''] = range.split(/\s*[-–—]\s*/);
  const present = /present/i.test(to);
  return { start: point(from), end: present ? null : point(to), present };
}

export function startYear(item: TimelineItem): string {
  return String(parseRange(item.daterange).start?.year ?? '');
}

export function formatRange(range: string): string {
  return range.replace(/\s*[-–—]\s*/, ' – ').replace(/\s+/g, ' ').trim();
}

export function summaryLines(points: string): string[] {
  return points
    .split('\n')
    .map((line) => line.replace(/^\s*[-*•]\s*/, '').trim())
    .filter(Boolean);
}

export function splitList(list: string): string[] {
  return list
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
}

const norm = (value: string) => value.trim().toLowerCase();

// The role a project shipped under, when the CMS names them the same.
export function roleFor(project: Project, timeline: TimelineItem[]): TimelineItem | undefined {
  return timeline.find((item) => norm(item.name) === norm(project.title));
}

export function current(timeline: TimelineItem[]): TimelineItem | undefined {
  return timeline.find((item) => item.timelinetype === 'work' && parseRange(item.daterange).present)
    ?? timeline.find((item) => item.timelinetype === 'work');
}

export function androidSince(timeline: TimelineItem[]): number | undefined {
  const years = timeline
    .filter((item) => item.timelinetype === 'work' && /android/i.test(`${item.title} ${item.techstack}`))
    .map((item) => parseRange(item.daterange).start?.year)
    .filter((year): year is number => typeof year === 'number');
  return years.length ? Math.min(...years) : undefined;
}

export function imageUrl(url: string, width: number): string {
  return `${url}?auto=format&fit=max&w=${width}`;
}

export function liveLabel(url: string): string {
  return /play\.google\.com/.test(url) ? 'On Google Play' : 'Visit live site';
}
