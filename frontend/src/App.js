import './App.scss'
import CardsGrid from './components/CardsGrid'
import Navbar from './components/NavBar'
import { BrowserRouter, Route } from "react-router-dom"
import store from './redux/store/index'
import { Provider } from 'react-redux'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <div className='app'>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={CardsGrid} />
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

