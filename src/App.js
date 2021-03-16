import './App.css';

import Hakim from './components/Navbar';
import Iheb from './components/Slide' ;
import {Cards,Paragraphe} from './components/Cards';

function App() {
 


  return (

    <div className="App">
     <Hakim/>
     <Iheb/>
     <Cards/>
     <Paragraphe/>
   </div>
  );
}

export default App;
