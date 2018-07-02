import React, { Component } from 'react';
import SignupForm from '../SignupForm/SignupForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import {userSignupRequest} from '../../actions/SingupActions';


class SignupPage extends React.Component {
  render() {
  	const{ userSignupRequest} = this.props;
    return (
      <div className="SignupPage">

          <SignupForm userSignupRequest={userSignupRequest} />

      </div>
    );
  }
}


SignupPage.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest} )(SignupPage);