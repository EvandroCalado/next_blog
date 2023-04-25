export type FormatsAvatarStrapi = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

export type AvatarStrapi = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      formats: {
        thumbnail: FormatsAvatarStrapi;
      };
    };
  };
};

export type SettingsStrapi = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      footer: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      avatar: AvatarStrapi;
    };
  };
};
