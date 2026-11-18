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
  // CMS fields are optional; never let an unfinished record reach the page as null.
  return data.allProjects.map((project) => ({
    ...project,
    title: project.title ?? '',
    description: project.description ?? '',
    techused: project.techused ?? '',
    liveurl: project.liveurl ?? '',
    githuburl: project.githuburl ?? '',
    image: project.image?.url ? project.image : null,
  }));
}
