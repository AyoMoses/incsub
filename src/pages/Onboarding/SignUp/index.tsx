import { useNavigate, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";

import styles from "./SignUp.module.scss";

import { Input } from "../../../components/Input";

const initialFormValues = {
  name: "",
  email: "",
  role: "Option 1",
  password: "",
};

const validationSchema = {
  name: yup.string().required("Name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum of 8 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email address is required"),
};

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

        <div role="main" className={styles.authFormsContainer}>
          <h2 className={styles.authFormHeader}>Let's set up your account</h2>
          <p className={styles.authFormSubHeader}>
            Already have an account?
            <Link to={"/sign-in"} className={styles.authFormLink}>
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
                (field) => field === ""
              );

              const isValidationError = Object.values(errors).length > 0;

              return (
                <Form>
                  <div className={styles.authForm}>
                    <Input
                      placeholder=""
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      error={errors.name}
                      label="Your name"
                    />

                    <Input
                      placeholder=""
                      name="email"
                      value={props.values.email}
                      onChange={props.handleChange}
                      error={errors.email}
                      label="Email address"
                    />

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
                      <select
                        name="role"
                        value={props.values.role}
                        onChange={props.handleChange}
                      >
                        <option value="Option 1">First Option</option>
                        <option value="Option 2">2nd Option</option>
                        <option value="Option 3">Option Number 3</option>
                      </select>
                    </div>
                    {/* select option  */}

                    <Input
                      label="Password"
                      type="password"
                      placeholder=""
                      name="password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      error={errors.password}
                    />

                    <button
                      type="submit"
                      disabled={isNotField || isValidationError}
                      // onClick={() => {
                      //   navigate('/sign-in');
                      // }}
                      className={styles.authFormBtn}
                    >
                      next
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          <p className={styles.authFooterDetail}>
            By clicking the "Next" button, you agree to creating a free account,
            and to{" "}
            <Link to="#" className={styles.authFooterLink}>
              Terms of service
            </Link>
            and{" "}
            <Link to="#" className={styles.authFooterLink}>
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
