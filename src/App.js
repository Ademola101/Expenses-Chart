
import Header from './components/Header'
import Barchart from './components/Barchart'
import data from './services/data.json'


function App() {

  return (
    <div>

      <Header/>

      <Barchart data={data}/>
    </div>
  )
}

export default App
