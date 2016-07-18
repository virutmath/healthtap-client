/*
 *
 * AdminPanel
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAdminPanel from './selectors';
import styles from './styles.css';

export class AdminPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.adminPanel}>
      This is AdminPanel container !
      </div>
    );
  }
}

const mapStateToProps = selectAdminPanel();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
