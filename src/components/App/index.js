// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Header from 'src/containers/Header';
import Error from 'src/components/Error';
import Historique from 'src/containers/Historique';
import Sidebar from 'src/containers/Sidebar';
import Spinner from 'src/components/Spinner';

import './app.scss';

// == Composant
const App = ({ loadConversations, loading, displayMessages, loadMessages }) => {
  useEffect(() => {
    loadConversations();
    loadMessages();
  }, []);
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            {loading
              && <Spinner />}
            <Historique />
          </Route>
          <Route exact path="/conversations">
            <Sidebar />
            {displayMessages
              && (
              <div className="content_messages">
                <Messages />
                <Form />
              </div>
              )}
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

App.propTypes = {
  loadConversations: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  displayMessages: PropTypes.bool.isRequired,
  loadMessages: PropTypes.func.isRequired,
};

export default App;
