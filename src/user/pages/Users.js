import React from 'react';
import UsersList from '../components/UsersList'


const Users = props => {
    const USERS = [
        {
            id: 'u1',
            name: 'Faraz Shah',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEgVNDoNGHJ2fqJRqOlsekiF68BBJMeYwH87BhO2QdcFPKe1em',
            places: 2

        }
    ]
    return <UsersList items={USERS} />
}

export default Users