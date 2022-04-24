import { useNavigate, Link } from 'react-router-dom';
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

        <div role='main' className={styles.authFormsContainer}>
          <h2 className={styles.authFormHeader}>Let's set up your account</h2>
          <p className={styles.authFormSubHeader}>
            Already have an account?
            <Link to={'/sign-in'} className={styles.authFormLink}>
              Sign in
            </Link>
          </p>

          <form role='form' className={styles.authForm}>
            <div className={styles.didLloatingLabelContent}>
              <input
                className={styles.didFloatingInput}
                type='text'
                placeholder=' '
              />
              <label className={styles.didFloatingLabel}>your name</label>
            </div>
            <div className={styles.didLloatingLabelContent}>
              <input
                className={styles.didFloatingInput}
                type='text'
                placeholder=' '
              />
              <label className={styles.didFloatingLabel}>email address</label>
            </div>

            {/* select option  */}
            {/* <div className={styles.didFloatingLabelContent}>
              <select className={styles.didFloatingSelect} value=''>
                <option value=''></option>
                <option value='1'>Alabama</option>
                <option value='2'>Boston</option>
                <option value='3'>Ohaio</option>
                <option value='4'>New York</option>
                <option value='5'>Washington</option>
              </select>
              <label className={styles.didFloatingLabel}>Select</label>
            </div> */}

            <div className={styles.selectDropdown}>
              <select>
                <option value='Option 1'>First Option</option>
                <option value='Option 2'>2nd Option</option>
                <option value='Option 3'>Option Number 3</option>
              </select>
            </div>
            {/* select option  */}

            <div className={styles.didLloatingLabelContent}>
              <input
                className={styles.didFloatingInput}
                type='text'
                placeholder=' '
              />
              <p className={styles.authFormInstruction}>
                Minimum of 8 characters
              </p>
              <label className={styles.didFloatingLabel}>password</label>
            </div>

            <button
              // onClick={() => {
              //   navigate('/sign-in');
              // }}
              className={styles.authFormBtnDisabled}
            >
              next
            </button>
          </form>

          <p className={styles.authFooterDetail}>
            By clicking the "Next" button, you agree to creating a free account,
            and to{' '}
            <Link to='#' className={styles.authFooterLink}>
              Terms of service
            </Link>
            and{' '}
            <Link to='#' className={styles.authFooterLink}>
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.authColTwo}>
        <h1 className={styles.authColTwoHeader}>dummy heading</h1>
        <p className={styles.authColTwoSubHeader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
