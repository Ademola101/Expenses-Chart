import data from './services/data.json'
import Header from './components/Header'
import Barchart from './components/Barchart'
import Footer from './components/Footer'



function App() {

  return (
    <div>

      <Header key={data.amount} data={data}/>

      <Barchart data={data}/>
      <Footer/>
    </div>
  )
}

export default App
