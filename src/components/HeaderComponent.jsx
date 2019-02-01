import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Pure react component. Should not be connected to redux store; its container
// should be connected to the store.
export class HeaderComponent extends React.Component {
    render() {
        return (
            <div style={{color: 'white'}}>
                <h1> Header Section </h1>
                {/* <h2>{this.props.label}</h2> */}
            </div>
        );
    }
}

HeaderComponent.PropTypes = {
    label: PropTypes.number.isRequired
}

function mapStateToProps(state) {
    return {
        label: state.get('count')
    }
}

export const HeaderComponentContainer = connect(mapStateToProps)(HeaderComponent);
