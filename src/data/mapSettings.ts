import { SettingsStrapi } from '../typing/settings';

export const mapSettings = (settings: SettingsStrapi) => {
  return {
    title: settings.data.attributes.title,
    description: settings.data.attributes.description,
    image: settings.data.attributes.avatar.data.attributes.url,
    footer: settings.data.attributes.footer,
  };
};
