import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { useForm } from '../../shared/components/hooks/form-hook'
import './PlaceForm.css';



const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];


const UpdatePlace = props => {
    const [isLoading, setLoading] = useState(true)


    const placeId = useParams().placeId

    console.log(placeId)

    // const identifiedPlace = DUMMY_PLACES.find(p => p.Id === placeId)
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    })
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)
    console.log(identifiedPlace)

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            }, true)
        }
        setLoading(false)
    }, [setFormData, identifiedPlace])


    if (!identifiedPlace) {
        return (< div className="center" >
            <Card>
                <h2>Could Not Find Place</h2>
            </Card>
        </div >)
    }
    if (isLoading) {
        return (< div className="center" >
            <h2>Loading!!!</h2>
        </div >)
    }

    const placeUpdateSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input
            id="title"
            label="Title"
            type="text"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
        />
        <Input
            id="title"
            label="Description"
            element="textarea"
            type="text"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min length 5)."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
}

export default UpdatePlace