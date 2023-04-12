import { environment } from 'src/environments/environment.development';

export function getCoverURL(name: string) {
  return environment.server + 'cover/' + name;
}
