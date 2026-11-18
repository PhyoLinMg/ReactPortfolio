import { GraphQLClient } from 'graphql-request';
import { getDatoCmsToken } from './getDatoCmsToken';


const DATO_CMS_ENDPOINT = 'https://graphql.datocms.com/';
const DATO_CMS_API_TOKEN = getDatoCmsToken();

const datoCMSClient = new GraphQLClient(DATO_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${DATO_CMS_API_TOKEN}`,
  },
  // A hung request should surface as an error the reader can retry, not an endless loading state.
  fetch: (input, init) => fetch(input, { ...init, signal: AbortSignal.timeout(15000) }),
});

export default datoCMSClient;
