
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { Provider } from "react-redux"
import { store } from './store/store';


export const App = () => {

  return (
    <>
     
      <Provider store={store}>

          <AppRoutes/>

      y</Provider>

    </>
  );
}

export default App;
