import './Normalize.css';
import Home from './Pages/Home';
import { Provider } from "react-redux";
import store from './Store/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
