import * as urlTemplate from 'url-template';
import { environment as ENV } from '@environment';

export const urlBuilder = (url: string, options?: object): string => {
  return urlTemplate.parse(ENV.api.base + url).expand(options);
};
