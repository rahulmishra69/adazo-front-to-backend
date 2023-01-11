import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../redux/store";
import { AuthContextProvider } from "./context/authContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default MyApp;
