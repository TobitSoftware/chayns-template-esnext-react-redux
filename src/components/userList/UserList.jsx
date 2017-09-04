import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Accordion } from 'chayns-components';
import UserContainer from '../../containers/UserContainer';

const UserList = ({ users }) => (
    <Accordion head="User List" defaultOpened>
        <div className="accordion__content" id="usersList">
            {
                users && users.map(user => <UserContainer key={user.get('userId')} userId={user.get('userId')}/>)
            }
            {
                users && users.size === 0 && <div>No users have been selected.</div>
            }
        </div>
    </Accordion>
);

UserList.propTypes = {
    users: PropTypes.instanceOf(List)
};

UserList.defaultProps = {
    users: null
};

export default UserList;
