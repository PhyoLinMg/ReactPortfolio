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
  return data.allTimelines;
}
