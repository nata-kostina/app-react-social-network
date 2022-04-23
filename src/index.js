import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/redux-store';


let rerenderEntireTree = () => {
	ReactDOM.render(
		<Provider store={store}>
			<React.StrictMode>
				<App store={store} />
			</React.StrictMode>
		</Provider>,
		document.getElementById('root')
	);
};
rerenderEntireTree();
store.subscribe(() => {
	rerenderEntireTree();
});

