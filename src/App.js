import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
// Pages
import Home from "./pages/Shared/Home";

// Pages - Sport
import { MLB, NBA, NFL } from "./pages";

// Stores
import { MLBProvider, NBAProvider, NFLProvider } from "./stores";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <hr />
        <Route path="/" exact component={Home} />
        <Route
          path="/mlb"
          render={() => (
            <MLBProvider>
              <MLB sport="MLB" />
            </MLBProvider>
          )}
        />
        <Route
          path="/nba"
          render={() => (
            <NBAProvider>
              <NBA sport="NBA" />
            </NBAProvider>
          )}
        />
        <Route
          path="/nfl"
          render={() => (
            <NFLProvider>
              <NFL sport="NFL" />
            </NFLProvider>
          )}
        />
      </>
    </Router>
  );
};

export default App;
