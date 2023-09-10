
import './App.css';
import Box1 from './Box1';
import Scroller from './Scroller';
import Header from './Header';
import Box2 from './Box2';
import Sign from './Sign';
import Box5 from './Box5';
import Footer from './Footer';
import Box4 from './Box4';


function App() {
  return (
    <div className="App">
      <Header/>
      <Box1/>
      <Scroller></Scroller>
      <Box2></Box2>
      <Sign></Sign>
      <Box4/>
      <Box5></Box5>
      <Footer/>
    </div>
  );
}

export default App;
