const CITY_JSON = require('./cities.json');

export enum actions {
  CITY = 'CITY',
}

export interface IAction {
  type: string;
  status?: string;
  payload?: Object;
}

export interface ICity {
  id?: string;
  name: string;
  temperature?: number;
  coordinates: ICoordinates;
}

export interface ICoordinates {
  lon: number;
  lat: number;
}

export function getCites(): ICity[] {
  return CITY_JSON.cities;
}
