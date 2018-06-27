import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeUser } from '../actions/userList';
import User from '../components/userList/user/User';

const mapStateToProps = (state, ownProps) => {
    const user = state.userList.find(u => u.get('userId') === ownProps.userId);

    return {
        userId: user.get('userId'),
        name: user.get('name'),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeUser: () => dispatch(removeUser(ownProps.userId)),
});

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

UserContainer.propTypes = {
    userId: PropTypes.number.isRequired
};

export default UserContainer;
