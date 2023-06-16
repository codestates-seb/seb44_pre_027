import ReactDOM from 'react-dom/client';
import App from './App';
import './index.pcss';
import './style.css';
import Providers from './components/Providers';
import { worker } from './mocks/worker';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <App />
  </Providers>
);
