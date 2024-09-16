import './App.css'

import MainScreen from './components/MainScreenComponents/MainScreen'
import AdditionalScreen from './components/AdditionalScreenComponents/AdditionalScreen'

function App() {

  return (
    <div className='container'>
      <div className='mainScreenContainer'>
        <MainScreen />
      </div>
      <div className='additionalScreenContainer'>
        <AdditionalScreen />
      </div>
    </div>
  )
}

export default App
