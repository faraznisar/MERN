import React from 'react';
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State',
        description: 'We The Best',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: '40.7484405',
            lon: '-73.9856644'
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'Empire State1',
        description: 'We The Best1',
        imageUrl: 'https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: '40.7484405',
            lon: '-73.9856644'
        },
        creator: 'u2'

    }
]

const UserPlaces = props => {
    const userId = useParams().userId;

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)


    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces