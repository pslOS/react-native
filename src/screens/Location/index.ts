import { connect } from 'react-redux';
import { changeCity } from '@actions/index';

import Location from './View';

const matStateToProps = () => ({});

const actions = {
  changeCity,
};

export default connect(matStateToProps, actions)(Location);
