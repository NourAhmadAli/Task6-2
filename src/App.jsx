
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Carousel } from './Components/carousel/Carousel';
import {slides} from "./data/carouselData.json"





function App() {

  return (
    <div className='app'>

      <Carousel data={slides} />
      

     
    </div>
  )
}

export default App
