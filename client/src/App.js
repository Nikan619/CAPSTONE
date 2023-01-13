

import {Route} from 'react-router-dom'
import Congress from "./pages/Congress.js"

import MainHeader from './components/MainHeader.js'



function App() {
  return (
    <div className="App">
   <MainHeader />
      <h1> Hello</h1>
      <main>
<Route path = "/senators">
      <Congress />
      </Route>
      </main>
    </div>
  );
}

export default App;
