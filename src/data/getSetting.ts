import request from 'graphql-request';
import { GET_SETTING } from '../graphql/queries';
import { SettingsStrapi } from '../typing/settings';

export const getSetting = async () => {
  const data = await request(process.env.GRAPHQL_URL as string, GET_SETTING);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setting }: SettingsStrapi | any = data;

  return setting;
};
