import logo from './logo.svg';
import './App.css';
import Todotask from './Components/Todotask';
import Todolist from './Components/Todolist';
function App() {
  return (
    <div className="App">
      <Todotask />
      <Todolist />
    </div>
  );
}

export default App;
