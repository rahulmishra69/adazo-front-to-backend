import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "./authContext";

const ProtectRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return children;
};
export default ProtectRoute;
