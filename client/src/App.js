

import {Route} from 'react-router-dom'
import Congress from "./pages/Congress.js"

import MainHeader from './components/MainHeader.js'
import HouseTrivia from './pages/HouseTrivia.js';



function App() {
  return (
    <div className="App">
   <MainHeader />
      <h1> Hello</h1>
      <main>
        <Route exact path = "/"></Route>
<Route path = "/senators">
      <Congress />
      </Route>
      <Route path = "/house">
        <HouseTrivia />
      </Route>
      </main>
    </div>
  );
}

export default App;
