import '../styles/App.scss';
import './Navigation.js'
import Navigation from './Navigation.js';
import Cards from './Cards.js'
import Sidebar from './Sidebar.js'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main>
        <div className='container'>
        <Cards />
        <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
