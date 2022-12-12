import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root")!;
const root = createRoot(container);

const APOLLO_SERVER_URL = process.env.REACT_APP_APOLLO_SERVER_URL;

const client = new ApolloClient({
  uri: APOLLO_SERVER_URL,
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
