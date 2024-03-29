import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PRIVATE_PATHS } from "../routes/paths";

export const useRedirect = () => {
  const token = localStorage.getItem("key");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      token &&
      !Object.values(PRIVATE_PATHS).includes(
        location.pathname as typeof PRIVATE_PATHS.HOME
      )
    ) {
      navigate("/");
    }
  }, [location.pathname, token]);
};
