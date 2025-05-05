import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"; 
import { auth } from "../firebase";

const ProtectedRoute = ({ element }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>; 
  return user ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
