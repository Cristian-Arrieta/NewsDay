import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

/*Components*/
import CountryBar from './components/CountryBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*Pages*/
import HomeContainer from './pages/HomeContainer';
import CategoryContainer from './pages/CategoryContainer';
import SearchContainer from './pages/SearchContainer';


const App = () =>(
  <BrowserRouter>
    <div className="App">
      <CountryBar/>
      <Navbar/>  
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/category/:categ" component={CategoryContainer} />
        <Route exact path="/search/:text" component={SearchContainer} />
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
)

export default App;
