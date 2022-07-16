import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../reducers/globalReducer";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
