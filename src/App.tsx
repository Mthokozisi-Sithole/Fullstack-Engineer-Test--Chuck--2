import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./styles.scss";
import Header from "./components/header/Header";
import RightSider from "./components/RightSider";

const client = new ApolloClient({
  uri: "https://kywxn.sse.codesandbox.io",
  resolvers: {}
});

const App: React.FC = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <main>
        <Header />
        <RightSider />
      </main>
    </ApolloProvider>
  );
};

export default App;
