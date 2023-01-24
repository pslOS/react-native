import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { getErrorMessage } from '@api/error';
import I18n from '@i18n/index';
import { ApiError } from '@api/interface';

export const useApi = (onError?: (error: ApiError, message: string) => void) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [error, setError] = useState<ApiError | null>();

  const handleError = (url: string, apiError: ApiError) => {
    const message = I18n.t(getErrorMessage(url, apiError));
    setErrorMessage(message);
    setError(apiError);

    if (onError) {
      onError(apiError, message);
    } else {
      alert(message);
    }
  };

  const alert = (message: string) =>
    Toast.show({
      type: 'error',
      text1: message,
    });

  const call = async <T>(promise: Promise<T | null>) => {
    setLoading(true);
    setError(undefined);
    try {
      return await promise;
    } catch (err) {
      const { config, data } = err.response;
      handleError(config.url, data as ApiError);

      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
    setErrorMessage(null);
  };

  return { loading, call, errorMessage, clearError, error };
};
