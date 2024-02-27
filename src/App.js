
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AllRoutes from './routes/AllRoutes';
import { Provider } from "react-redux"
import appStore from './utils/appStore';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>

      <Provider store={appStore}>

        <Header />


        <AllRoutes />
        <Footer />
      </Provider>


    </div>
  );
}

export default App;
