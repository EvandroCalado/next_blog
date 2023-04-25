import { endpoints } from '../config/endpoints';
import { SettingsStrapi } from '../typing/settings';
import { fetchJson } from '../utils/fetchJson';

export const getSettings = async (): Promise<SettingsStrapi> => {
  const settings = await fetchJson<SettingsStrapi>(
    `${process.env.API_URL}${endpoints.getSettings}?populate=*`,
  );

  return settings;
};
