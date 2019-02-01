import GoldenLayoutWrapper from './components/GoldenLayoutWrapper';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './ActionCreators';

import '../css/main.css';

const store = createStore(reducer);
store.dispatch(setState({ 'count': 10 })); 

ReactDOM.render(
    <Provider store={store}>        
        <GoldenLayoutWrapper/>
    </Provider>,
    document.getElementById('root')
);
