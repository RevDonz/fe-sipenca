import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer pauseOnFocusLoss={false} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
