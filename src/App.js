import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;
