import data from './services/data.json';
import Header from './components/Header';
import Barchart from './components/Barchart';

import { AppStyle } from './components/styles/AppStyle';



function App() {

  return (
    <AppStyle>

      <Header key={data.amount} data={data}/>

      <Barchart data={data}/>

    </AppStyle>
  );
}

export default App;
