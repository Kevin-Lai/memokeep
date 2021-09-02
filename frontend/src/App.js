import './App.css';

import { Provider } from 'react-redux';
import NoteIndex from './components/note_index';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <NoteIndex />
        </header>
      </div>
    </Provider>
  );
}

export default App;
