import './assets/css/bootstrap.min.css'
import './assets/css/styles.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './views/Home/Home'
import CasasCancun from './views/casasVentasCancun/casasCancun';
import CasasMerida from './views/casasVentasMerida/casasMerida';
import CasaId from './views/casaId/Casa';

import {DataProvider} from './context/DataContext'

function App() {
  return (
<DataProvider>
<Router>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/casasCancun" exact element={<CasasCancun/>} />
      <Route path="/casasMerida" exact element={<CasasMerida />} />
      <Route path="/casa/:id" exact element={<CasaId /> }/>
    </Routes>
 </Router>
</DataProvider>
  );
}

export default App;
