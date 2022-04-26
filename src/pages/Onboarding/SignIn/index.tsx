import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import styles from './SignIn.module.scss';

import { Input } from '../../../components/Input';

const initialFormValues = {
  email: '',
  password: '',
};

const validationSchema = {
  password: yup
    .string()
    .required('Enter your password')
    .min(8, 'Minimum of 8 characters'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email your email'),
};

function SignIn() {
  let navigate = useNavigate();
  return (
    <div className={styles.auth}>
      <div className={styles.authColOne}>
        <div className={styles.authSteps}>
          <p className={styles.authStepsText}>Step 3 of 3</p>
          <div className={styles.authStepsDots}>
            <span className={styles.authStepsDot} />
            <span className={styles.authStepsDot} />
            <span className={styles.authStepsDotActive} />
          </div>
        </div>

        <div role='main' className={styles.authFormsContainer}>
          <h2 className={styles.authFormHeader}>Let's set up your account</h2>
          <p className={styles.authFormSubHeader}>
            Already have an account?
            <Link to={'/'} className={styles.authFormLink}>
              Sign in
            </Link>
          </p>

          <Formik
            initialValues={initialFormValues}
            onSubmit={() => {}}
            validationSchema={yup.object(validationSchema)}
          >
            {({ errors, ...props }) => {
              const isNotField = Object.values(props.values).some(
                (field) => field === ''
              );

              const isValidationError = Object.values(errors).length > 0;

              return (
                <Form className={styles.authForm}>
                  <Input
                    placeholder=''
                    name='email'
                    value={props.values.email}
                    onChange={props.handleChange}
                    error={errors.email}
                    label='Email address'
                  />

                  <Input
                    label='Password'
                    type='password'
                    placeholder=''
                    name='password'
                    value={props.values.password}
                    onChange={props.handleChange}
                    error={errors.password}
                  />

                  <button
                    type='submit'
                    disabled={isNotField || isValidationError}
                    onClick={() => {
                      navigate('/sign-up');
                    }}
                    className={styles.authFormBtn}
                  >
                    next
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div className={styles.authColTwo}>
        <h1 className={styles.authColTwoHeader}>dummy heading</h1>
        <p className={styles.authColTwoSubHeader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default SignIn;
