// queries/getTimeline.ts

import { AllSkillcategory } from '../model/SkillCategory';
import datoCMSClient from './datoCMSClient';


const GET_TIMELINE = `
{
  allSkillcategories {
        id
        icon
        title
        skills {
            id
            icon
            name
        }
    }
}
`;

export async function getSkills(): Promise<AllSkillcategory[]> {
  const data = await datoCMSClient.request<{ allSkillcategories: AllSkillcategory[] }>(GET_TIMELINE);
  return data.allSkillcategories;
}
