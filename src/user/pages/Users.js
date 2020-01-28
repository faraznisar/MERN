import React from 'react';
import UsersList from '../components/UsersList'


const Users = (props) => {
    const USERS = [{
        id: 12,
        name: 'Faraz Shah',
        image: '',
        places: 2

    }]
    return <UsersList item={USERS} />
}

export default Users