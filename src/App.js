import First from "./First";
import { Myroutes } from "./Myroutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from "./Second";
import './mystyle.css';
import { GlobalContextProvider } from "./hooks/GlobalContext";
import { Provider } from "react-redux";
// import myStore from './redux/store'
// import myStory from "./redux/store";
import { myStore } from "./components/reducers/store";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Provider store={myStore}>
      <Myroutes/>
      </Provider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
