import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { PersonFinder } from 'chayns-components';
import { addUser as addUserAction } from '../actions/userList';

const PersonFinderWrapper = ({ addUser }) => (
    <PersonFinder
        placeholder="Search for users"
        style={{ width: '100%' }}
        /**
         * onChange is a person finder specified event provided via the chayns api
         * it returns the selected user to the addUser function
         */
        onChange={(result) => {
            result.node.value = '';
            addUser(result.user);
        }}
    />
);

PersonFinderWrapper.propTypes = {
    addUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUserAction(fromJS(user)))
});

export default connect(
    undefined,
    mapDispatchToProps
)(PersonFinderWrapper);
