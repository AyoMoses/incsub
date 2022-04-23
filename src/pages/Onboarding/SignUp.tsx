import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  let navigate = useNavigate();
  return (
    <div>
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
