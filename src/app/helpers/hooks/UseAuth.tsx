import { useState, useEffect } from "react";

const useAuth = () => {
  const [token, setToken] = useState<string | false>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken(false);
    }
  }, []);

  return token;
};

export default useAuth;
