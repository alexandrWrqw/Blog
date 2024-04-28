import { useSelector } from 'react-redux';

export default function useAuth() {
  const token = useSelector((state) => state.user.token);

  return {
    isAuth: !!token,
  };
}
