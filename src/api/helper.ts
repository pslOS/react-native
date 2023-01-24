import { AxiosInstance } from 'axios';
import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';
import memoryDriver from 'localforage-memoryStorageDriver';
import { baseUrl, IRequestParams } from '@api/interface';

export interface IUrlParams {
  [key: string]: string;
}

export interface IQueryParams {
  [key: string]: string | string[];
}

export const getUrlWithParams = (
  originUrl: string,
  params: IUrlParams | undefined = {},
  queryParams: IQueryParams | undefined = {}
): string => {
  const restParams = { ...params };

  if (!originUrl) {
    throw new Error('Url not defined!');
  }
  let url = originUrl;
  Object.keys(restParams).forEach((param) => {
    url = (typeof restParams[param] === 'string' && restParams[param] !== '')
      ? url.replace(`{${param}}`, restParams[param])
      : url;
  });

  const queryParamsString: string[] = [];
  Object.keys(queryParams).forEach((param) => {
    if (queryParams[param] !== undefined) {
      if (Array.isArray(queryParams[param])) {
        queryParamsString.push(`${param}=${(<Array<string>>queryParams[param]).join(',')}`);
      } else {
        queryParamsString.push(`${param}=${queryParams[param]}`);
      }
    }
  });

  if (queryParamsString.length) {
    url += (url.indexOf('?') === -1 ? '?' : '') + queryParamsString.join('&');
  }

  return url;
};

export const getUrl = ({ name, params, queryParams }: IRequestParams): string => getUrlWithParams(name, params, queryParams);

export const configureClient = (): AxiosInstance => {
  localforage.defineDriver(memoryDriver);

  const forageStore = localforage.createInstance({
    driver: [
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
      memoryDriver._driver,
    ],
    name: 'demo_weather_app',
  });

  return setup({
    baseURL: baseUrl,
    clearCacheEntry: false,
    cache: {
      readOnError: true,
      clearOnError: false,
      exclude: {
        query: false,
      },
      clearOnStale: false,
      store: forageStore,
    },
  });
};
