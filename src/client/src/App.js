import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import TSHeader from "./components/TSHeader";
import DummyPage from "./pages/DummyPage";
import AllROMsPage from "./pages/AllROMsPage";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout className="layout" style={{ height: "100%" }}>
          <TSHeader />
          <Switch>
            <Route path="/helps">
              <DummyPage />
            </Route>
            <Route path="/">
              <AllROMsPage />
            </Route>
          </Switch>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
