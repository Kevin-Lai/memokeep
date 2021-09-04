import './App.css';

import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import NoteIndex from './components/note_index';
import Sidebar from './components/sidebar';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <HashRouter>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={NoteIndex} /> 
          </Switch>
        </HashRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
