import './App.css';
import Navbar from './navbar/navbar';
import Content from './content/content';
import Data from './api-grab/data';
import Chat from './chat/chat';
function App() {
  return (
    <div className="App">
        <Navbar/> 
        {/* <Content/> */}
        <Data/>
        <Chat/>
    </div>
  );
}

export default App;
