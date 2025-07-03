// queries/getProjects.ts
import { Project } from '../model/Project';
import datoCMSClient from './datoCMSClient';


const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      id
      title
      description
      techused
      liveurl
      githuburl
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.allProjects;
}
