import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './GoogleAuthProvider';

const approvedEmails = ['chris.mendence@gmail.com']; // List of approved emails

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        user && approvedEmails.includes(user.email) ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
