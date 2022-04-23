import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';

function SignUp() {
  let navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      This is the landing for this site{' '}
      <button
        onClick={() => {
          navigate('/sign-in');
        }}
      >
        sign in
      </button>
    </div>
  );
}

export default SignUp;
