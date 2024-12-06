import '../styles/globals.css';
import { Provider } from 'react-redux';
import {store} from '../store';
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
