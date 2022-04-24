import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';

function SignUp() {
  let navigate = useNavigate();
  return (
    <div className={styles.auth}>
      <div className={styles.authColOne}>
        <div className={styles.authSteps}>
          <p className={styles.authStepsText}>Step 1 of 3</p>
          <div className={styles.authStepsDots}>
            <span className={styles.authStepsDotActive} />
            <span className={styles.authStepsDot} />
            <span className={styles.authStepsDot} />
          </div>
        </div>
      </div>
      <div className={styles.authColTwo}>
        <h1 className={styles.authColTwoHeader}>dummy header</h1>
        <p className={styles.authColTwoSubHeader}></p>
      </div>
      {/* <button
        onClick={() => {
          navigate('/sign-in');
        }}
      >
        sign in
      </button> */}
    </div>
  );
}

export default SignUp;
