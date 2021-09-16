import './App.css';

import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Modal from './components/modal';
import NoteIndex from './components/note_index';
import Sidebar from './components/sidebar';
import Archive from './components/archive';
import Trash from './components/trash';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        <HashRouter>
          <Modal />
          <Sidebar />
          <Switch>
            <Route exact path="/" component={NoteIndex} /> 
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/trash" component={Trash} /> 
          </Switch>
        </HashRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
