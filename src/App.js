import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Animes from './components/root/home/Home'
import About from './components/root/about/About'
import Wikipedia from './components/root/animeWIki/Wikipedia'
import MyRegisterForm from'./components/root/contact/Contact'
import Error from './components/root/error/Error'
import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Animes} />
        <Route path="/home" exact component={Animes} />
        <Route path="/about" exact component={About} />
        <Route path="/wikipedia" exact component={Wikipedia} />
        <Route path="/contact" exact component={MyRegisterForm} />
        <Route  component={Error} /> 
      </Switch>
      <br/>
      <br/>
      <Footer></Footer>
    </div>
  );
}

export default App;
