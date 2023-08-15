import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import CounterComponent from './Components/CounterComponent';
import store from './ReduxFiles/store';
function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <CounterComponent/>
      </div>
    </Provider>
  );
}

export default App;
