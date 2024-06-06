import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const track = localStorage.getItem("trackingId")

  useEffect(() => {
    if (!track) {
      navigate("/");
    }
  }, [track, navigate]);


  if (track) return children;
}

export default ProtectedRoute;
