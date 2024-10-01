import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Flights from './Pages/Flights';
import Train from './Pages/Train';
import Home from './Pages/Home';
import Footer from './components/Footer';
import ExpandableGuideButton from './components/ExpandableGuideButton';
import SpeechTextButton from './Pages/SpeechTextButton';
import SpeechSynthesis from './Pages/SpeechSynthesis';
import SpeechRecognitionButton from './Pages/SpeechRecognitionButton.js';
import MapButton from './components/MapButton.js';
import Maps from './Pages/Maps.js';
import SOSButton from './components/SOSButton.js';
import Hotels from './Pages/Hotels.js';
import AccessibleItinerary from './Pages/AccessibleItinerary.js';
import ItenaryButtons from './components/ItenaryButtons.js';
import Signup from './Pages/Signup.js';

function App() {

  // const [data, setData] = useState([{}])

  // useEffect(()=>{
  //   fetch("/members").then(
  //     res=>res.json()
  //   ).then(
  //     data=> {
  //       setData(data)
  //       console.log(data);
        
  //     }
  //   )
    
  //},[])


  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/flights' element={<Flights />}/>
          <Route path='/trains' element={<Train />}/>
          <Route path='/hotels' element={<Hotels />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/speechToText' element={<SpeechTextButton />}/>
          <Route path='/textToSpeech' element={<SpeechSynthesis />}/>
          <Route path='/map' element={<Maps />} />
          <Route path='/itinerary' element={<AccessibleItinerary />} /> 
          <Route path='/signup' element={<Signup />}/>
        </Routes>
        <ExpandableGuideButton />
        <ItenaryButtons />
        <MapButton />
        <SOSButton />
        <SpeechRecognitionButton />
        <Footer />
      </Router>
      
    </div>
  )
}
export default App;
