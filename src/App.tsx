import { Provider } from 'react-redux'
import Cart from './components/cart';
import Catalog from './components/catalog';
import store from './store';

function App () {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
