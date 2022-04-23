import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.scss';

function SignIn() {
  let navigate = useNavigate();
  return (
    <div>
      I am the talked about SignIn page
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        sign up
      </button>
    </div>
  );
}

export default SignIn;
