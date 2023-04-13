import ReactDOM from 'react-dom/client';
import './index.css';
import './nullstyle.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './Redux/Store/Store';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App/>
    </Provider>
  </BrowserRouter>
);



reportWebVitals();
