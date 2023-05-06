import { SettingsStrapi } from '../typing/settings';

export type SettingsDataProps = {
  title: string;
  description: string;
  image: string;
  footer: string;
};

export const mapSettings = (settings: SettingsStrapi): SettingsDataProps => {
  return {
    title: settings?.data.attributes.title,
    description: settings?.data.attributes.description,
    image: settings?.data.attributes.avatar.data.attributes.url,
    footer: settings?.data.attributes.footer,
  };
};
