import PropTypes from 'prop-types';

import useAuth from '../../hooks/useAuth';
import SignIn from '../SignIn/SignIn';

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();

  return isAuth ? children : <SignIn />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
