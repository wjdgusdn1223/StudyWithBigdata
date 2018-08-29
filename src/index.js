import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Components/Container/Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
