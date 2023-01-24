import { connect } from 'react-redux';
import IStoreState from '@store/IStoreState';

import Dashboard from './View';

const matStateToProps = (state: IStoreState) => ({
  cityName: state.city.name,
  cityCoordinates: state.city.coordinates,
});

const actions = {
};

export default connect(matStateToProps, actions)(Dashboard);
