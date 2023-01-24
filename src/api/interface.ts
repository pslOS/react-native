import { ICoordinates } from '@const/actions';
import { IWeatherResponse } from '@api/models/IWeather';
import { IQueryParams, IUrlParams } from '@api/helper';

export const baseUrl = 'https://api.openweathermap.org/data/2.5';
export const appid = 'fd6f1629d368322aa9fa3f015b13980a';

export enum ApiUrls {
  getWeatherWithForecast = '/onecall',
}

export interface IApi {
  getWeatherWithForecast: {
    (coordinates: ICoordinates): Promise<IWeatherResponse>;
  };
}

export interface IRequestParams {
  name: ApiUrls;
  params?: IUrlParams;
  queryParams?: IQueryParams;
}

export type ApiError = {
  cod: number;
  message: string;
};

export type UrlSpecificErrors = {[url: string]: {[errorCode: string]: string}};

export type GeneralErrors = {[errorCode: string]: string};
