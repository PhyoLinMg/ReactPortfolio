// queries/getTimeline.ts
import { TimelineItem } from '../model/Timeline';
import datoCMSClient from './datoCMSClient';


const GET_TIMELINE = `
{
  allTimelines(orderBy: startdate_DESC) {
        daterange
        id
        name
        summarypoints
        techstack
        timelinetype
        title
    }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(GET_TIMELINE);
  // CMS fields are optional; never let an unfinished record reach the page as null.
  return data.allTimelines.map((item) => ({
    ...item,
    timelinetype: item.timelinetype ?? 'work',
    name: item.name ?? '',
    title: item.title ?? '',
    techstack: item.techstack ?? '',
    summarypoints: item.summarypoints ?? '',
    daterange: item.daterange ?? '',
  }));
}
