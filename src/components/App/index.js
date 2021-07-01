// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// import ConnectedForm from 'src/containers/Form';
// import ConnectedMessages from 'src/containers/Messages';
import Header from 'src/containers/Header';
import Error from 'src/components/Error';
import Historique from 'src/containers/Historique';

import './app.scss';

// == Composant
const App = ({ loadConversations }) => {
  useEffect(() => {
    loadConversations();
  }, []);
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Historique />
          </Route>
          <Route exact path="/conversations">
            {/* Conversation /> */}
          </Route>
          <Route exact path="/conversations/:id">
            {/* Conversation /> */}
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>

        <div className="content">
          {/* <ConnectedMessages /> */}
          {/* <ConnectedForm /> */}

        </div>

      </main>

    </div>
  );
};

App.propTypes = {
  loadConversations: PropTypes.func.isRequired,
};

export default App;
