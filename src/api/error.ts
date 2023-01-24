import { ApiError, ApiUrls, GeneralErrors, UrlSpecificErrors } from '@api/interface';

export const SOMETHING_WENT_WRONG_MESSAGE = 'error.common.SOMETHING_WENT_WRONG';

export const getErrorMessage = (url: string, error: ApiError) => {
  const errorKey = error.cod;
  const apiUrl = url.split('?')[0];

  if (urlSpecificErrorMapper[apiUrl] && urlSpecificErrorMapper[apiUrl][errorKey]) {
    return urlSpecificErrorMapper[apiUrl][errorKey];
  }

  if (generalErrorMapper[errorKey]) {
    return generalErrorMapper[errorKey];
  }

  return SOMETHING_WENT_WRONG_MESSAGE;
};

const urlSpecificErrorMapper: UrlSpecificErrors = {
  [ApiUrls.getWeatherWithForecast]: {
    401: 'error.getWeather.GET_WEATHER_ACCESS_DENIED',
  },
};

const generalErrorMapper: GeneralErrors = {
  401: 'error.common.ACCESS_DENIED',
  403: 'error.common.VALIDATION_ERROR',
  404: 'error.common.NOT_FOUND',
  500: SOMETHING_WENT_WRONG_MESSAGE,
};
