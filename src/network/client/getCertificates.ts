// queries/getProjects.ts

import { Certificate } from '../model/Certificate';
import datoCMSClient from './datoCMSClient';


const GET_CERTIFICATES = `
  query {
    allCertificates(orderBy: title_ASC) {
      id
      title
      description
      url
    }
  }
`;

export async function getCertificates(): Promise<Certificate[]> {
  const data = await datoCMSClient.request<{ allCertificates: Certificate[] }>(GET_CERTIFICATES);
  return data.allCertificates;
}
