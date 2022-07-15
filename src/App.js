import data from './services/data.json'
import Header from './components/Header'
import Barchart from './components/Barchart'

function App() {
  return (
    <div>

      <Header/>
      {data.map(d => <Barchart key = {d.amount} data = {d}/> )}

    </div>
  )
}

export default App
