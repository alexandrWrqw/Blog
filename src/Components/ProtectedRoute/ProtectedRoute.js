import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  return isAuth ? children : navigate('/sign-in');
}

export default ProtectedRoute;
