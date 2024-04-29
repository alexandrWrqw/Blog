import { useSelector } from 'react-redux';

export default function useAuth() {
  const { username, email, image } = useSelector((state) => state.user);

  return {
    isAuth: !!username,
    username,
    email,
    image,
  };
}
