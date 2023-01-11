// import { createContext, useContext } from "react";
// import router from "next/router";
// const AuthContext = createContext();
// export const getUser = async (ctx) => {
//   return await axios
//     .get(`http://localhost:3000/api/verify`, {
//       headers: ctx?.req?.headers?.cookie
//         ? { cookie: ctx.req.headers.cookie }
//         : undefined,
//       withCredentials: true,
//     })
//     .then((response) => {
//       if (response.data) {
//         return { status: "SIGNED_IN", user: response.data };
//       } else {
//         return { status: "SIGNED_OUT", user: null };
//       }
//     })
//     .catch((error) => {
//       return { status: "SIGNED_OUT", user: null };
//     });
// };
// export function AuthProvider(props) {
//   const auth = props.myAuth || { status: "SIGNED_OUT", user: null };

//   const login = async (dataVal) => {
//     // Use any auth service methods here
//     console.log("🚀 ~ file: authContext.js:30 ~ login ~ email", dataVal)
//     const { email, password }= dataVal;
//     return await axios
//       .post(`http://localhost:3000/api/login`,dataVal)
//       .then(() => {
//         router.push("/admin/dashboard");
//         console.log("user signed in");
//       })
//       .catch((error) => {
//         console.error("Incorrect email or password entered");
//       });
//   };
//   const register = async (name, email, password) => {
//     const data = { name, email, password };
//     return await axios
//       .post(`http://localhost:3000/api/register`, data)
//       .then(function (response) {
//         router.push("/marketplace");
//         console.log("user registered");
//       })
//       .catch(function (error) {
//         console.error(error.message);
//       });
//   };
//   const logout = async () => {
//     return await axios
//       .get(`http://localhost:3000/api/logout`)
//       .then(() => {
//         router.push("/");
//         console.log("user logged out");
//       })
//       .catch((error) => {
//         console.error(error.message);
//       });
//   };
//   return (
//     <AuthContext.Provider
//       value={{ auth, logout, register, login }}
//       {...props}
//     />
//   );
// }
// export const useAuth = () => useContext(AuthContext);
// export const AuthConsumer = AuthContext.Consumer;

// ** React Imports
// import { createContext, useEffect, useState } from "react";

// // ** Next Import
// import { useRouter } from "next/router";

// // ** Axios
// import axios from "axios";

// // ** Config
// import authConfig from "../config";

// // ** Defaults
// const defaultProvider = {
//   user: null,
//   loading: true,
//   setUser: () => null,
//   setLoading: () => Boolean,
//   isInitialized: false,
//   login: () => Promise.resolve(),
//   logout: () => Promise.resolve(),
//   setIsInitialized: () => Boolean,
//   signup: () => Promise.resolve(),
// };
// const RegisterAuthContext = createContext(defaultProvider);

// const RegisterProvider = ({ children }) => {
//   // ** States
//   const [user, setUser] = useState(defaultProvider.user);
//   const [loading, setLoading] = useState(defaultProvider.loading);
//   const [isInitialized, setIsInitialized] = useState(
//     defaultProvider.isInitialized
//   );

//   // ** Hooks
//   const router = useRouter();
//   useEffect(() => {
//     const initAuth = async () => {
//       setIsInitialized(true);
//       const storedToken = window.localStorage.getItem(
//         authConfig.storageTokenKeyName
//       );
//       if (storedToken) {
//         setLoading(true);
//         await axios
//           .get(authConfig.meEndpoint, {
//             headers: {
//               Authorization: storedToken,
//             },
//           })
//           .then(async (response) => {
//             setLoading(false);
//             setUser({ ...response.data.data });
//           })
//           .catch(() => {
//             localStorage.removeItem("userData");
//             localStorage.removeItem("refreshToken");
//             localStorage.removeItem("accessToken");
//             setUser(null);
//             setLoading(false);
//           });
//       } else {
//         setLoading(false);
//       }
//     };
//     initAuth();
//   }, []);

//   const handleLogin = (params, errorCallback) => {
//     axios
//       .post(authConfig.loginAPI, params)
//       .then(async (res) => {
//         window.localStorage.setItem(
//           authConfig.storageTokenKeyName,
//           res.data.Token
//         );
//         const returnUrl = router.query.returnUrl;
//         setUser({ ...res.data.user });
//         window.localStorage.setItem("userData", JSON.stringify(res.data.user));
//         const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
//         router.replace(redirectURL);
//       })

//       .catch((err) => {
//         if (errorCallback) errorCallback(err);
//       });
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setIsInitialized(false);
//     window.localStorage.removeItem("userData");
//     window.localStorage.removeItem(authConfig.storageTokenKeyName);
//     router.push("/signin");
//   };

//   const handleRegister = (params, errorCallback) => {
//       axios
//         .post(authConfig.registerAPI, params)
//         .then((res) => {
//           if (res.data.error) {
//             if (errorCallback) errorCallback(res.data.error);
//           } else {
//             handleLogin({ email: params.email, password: params.password });
//           }
//         })
//         .catch((err) => (errorCallback ? errorCallback(err) : null));
//   };

//   const values = {
//     user,
//     loading,
//     setUser,
//     setLoading,
//     isInitialized,
//     setIsInitialized,
//     login: handleLogin,
//     logout: handleLogout,
//     signup: handleRegister,
//   };

//   return (
//     <RegisterAuthContext.Provider value={values}>
//       {children}
//     </RegisterAuthContext.Provider>
//   );
// };

// export { RegisterAuthContext, RegisterProvider };

import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userDetails"))
      : null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(state.user));
    console.log("🚀 ~ file: authContext.js:252 ~ useEffect ~ user",state.user)
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
