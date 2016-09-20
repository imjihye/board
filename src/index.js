import 'bootstrap-css';
import './static/css/base.css';
import './static/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Content from './board';

ReactDOM.render(
	<Content />,
	document.getElementById('content')
);
