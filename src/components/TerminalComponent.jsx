import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Pure react component. Should not be connected to redux store; its container
// should be connected to the store.
export class TerminalComponent extends React.Component {
    render() {
        return (
            <div style={{color: 'white'}}>
                <h1> Terminal </h1>
            </div>
        );
    }
}

export const TerminalComponentContainer = connect()(TerminalComponent);
