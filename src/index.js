//1. Import area
//1.1 import {} something from  somelibrary/SomeLocation
//1.2 import from somelocation/ somelibrary
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Library should be injected before our customs style
import "./style2.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

