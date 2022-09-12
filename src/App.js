import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Wishlist from './components/Wishlist';

function App()
{
    return(
        <Router>
            <div className="App">
             <Nav/>
       <Switch>
           <Route exact path="/">
              <Home/>
           </Route >
      
        
          <Route path="/wishlist">
             <Wishlist/>
          </Route>
       </Switch>
            </div>

        </Router>
    );
}

export default App;