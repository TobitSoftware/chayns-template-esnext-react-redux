import { connect } from 'react-redux';
import UserList from '../components/userList/UserList';

const mapStateToProps = state => ({
    users: state.userList
});

export default connect(mapStateToProps)(UserList);
