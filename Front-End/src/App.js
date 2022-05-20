import './App.css';
import Navbar from './navbar/navbar';
import Content from './content/content';
import Data from './api-grab/data';
function App() {
  return (
    <div className="App">
        <Navbar/> 
        <Content/>
        <Data/>
    </div>
  );
}

export default App;
