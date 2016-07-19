/*
 *
 * LoginPage
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import selectLoginPage from './selectors';
import styles from './styles.css';
import LoginBox from 'components/LoginBox';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
	render() {
		return (
			<div className={styles.loginPage}>
				<Helmet
					title="Login to HealthTap Admin"
					meta={[
            { name: 'description', content: 'CMS for HealthTap Admin' },
          ]}
				/>
				<LoginBox />
			</div>
		);
	}
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
