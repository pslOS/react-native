import { actions, ICity } from '@const/actions';
import { ICityAction } from '@reducers/city';

export const changeCity = (city: ICity): ICityAction => (
  { type: actions.CITY, payload: { name: city.name, coordinates: city.coordinates } }
);
