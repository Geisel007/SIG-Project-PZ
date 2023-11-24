// Components
import View from '../src/components/Wrappers/View/View'
import Map from './components/Map/Map'

// Styles
import './App.css'

function App() {
  
  return (
    <View className='App'>
      <Map
        latitude={9.34111}
        longitude={-83.7406}
        zoom={10}
      />
    </View>
  )
}

export default App
