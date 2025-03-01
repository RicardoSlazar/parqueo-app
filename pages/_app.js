import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Archivo para estilos personalizados

import { Provider } from 'react-redux';
import { store } from '../store/index';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;