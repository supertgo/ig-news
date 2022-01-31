/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY!
});
