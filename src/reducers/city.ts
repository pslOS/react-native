import { actions, getCites, ICity } from '@const/actions';

export interface ICityAction {
  type: string;
  payload: ICity;
}

export const initialDataState: ICity = {
  name: getCites()[0].name,
  coordinates: getCites()[0].coordinates,
};

export default (state = initialDataState, action: ICityAction) => {
  switch (action.type) {
    case actions.CITY:
      return { ...state, name: action.payload.name, coordinates: action.payload.coordinates };
    default:
      return state;
  }
};
