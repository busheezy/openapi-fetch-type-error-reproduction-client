import { paths } from '../client';
import createClient from 'openapi-fetch';

const client = createClient<paths>({});

async function test() {
  const { data, error } = await client.get('/cats', {});
}
