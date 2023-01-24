import { ICoordinates } from '@const/actions';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiUrls, appid, IApi, IRequestParams } from '@api/interface';

import { configureClient, getUrl } from './helper';
import { IWeatherResponse } from './models/IWeather';

class Api implements IApi {

  private apiClient: AxiosInstance;

  public constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public getWeatherWithForecast = async (coordinates: ICoordinates): Promise<IWeatherResponse> => {
    const response = await this.doRest({
      name: ApiUrls.getWeatherWithForecast,
      queryParams: {
        appid,
        units: 'metric',
        lon: coordinates.lon.toString(),
        lat: coordinates.lat.toString(),
        exclude: ['hourly', 'alerts', 'minutely'],
      },
    }, {
      method: 'GET',
    }) as AxiosResponse<IWeatherResponse>;

    response.data.fromCache = response.request.fromCache;

    return response.data;
  }

  private async doRest(requestParams: IRequestParams, options: AxiosRequestConfig = {}) {

    return this.apiClient({
      data: options.data,
      url: getUrl(requestParams),
      method: options.method,
      timeout: 10 * 1000,
      headers: {
        ...options.headers,
      },
    });
  }
}

export default new Api(configureClient());
