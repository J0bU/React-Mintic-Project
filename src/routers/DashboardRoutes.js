import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ListScreen } from '../components/soccer/ListScreen';
import { MatchScreen } from '../components/soccer/MatchScreen';
import { MatchUpdateScreen } from '../components/soccer/MatchUpdateScreen';
import { TeamScreen } from '../components/soccer/TeamScreen';
import { Home } from '../components/ui/Home';
// import { ConstellationScreen } from '../components/constellations/ConstellationScreen';
// import { SearchScreen } from '../components/search/SearchScreen';
// import { SpaceScreen } from '../components/space/SpaceScreen';
// import { ZodiacScreen } from '../components/constellations/ZodiacScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/matches" component={TeamScreen} />
          <Route exact path="/" component={Home} />
          <Route exact path="/vs" component={MatchScreen} />
          <Route exact path="/create" component={ListScreen} />
          <Route exact path="/information" component={MatchUpdateScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};
