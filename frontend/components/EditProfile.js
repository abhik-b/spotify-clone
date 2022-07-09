import React, { useState, useEffect } from 'react'
import { updateUser } from '../fetchers/fetchUser'
export default function EditProfile({ user, mutate, token }) {
    const [gender, setGender] = useState('')
    const [disabled, setDisabled] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault()
        if (gender !== '') {
            let updatedUser = await updateUser('/edit/', token,
                { gender });
            mutate(updatedUser)
        }
    }

    useEffect(() => {
        if (user) {
            setGender(user.gender)
        }
    }, [user])


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="gender">Gender :</label>
                {user?.gender ?
                    <span>{user.gender}</span>
                    : <input
                        type="text"
                        name="gender" value={gender}
                        onChange={(e) => {
                            if (disabled) setDisabled(false)
                            setGender(e.target.value);
                            if (e.target.value === '') setDisabled(true)
                        }}
                    />
                }
            </div>
            <div>
                <label htmlFor="gender">Gender :</label>
                <input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={(e) => {
                        if (disabled) setDisabled(false)
                        setGender(e.target.value);
                        if (e.target.value === '') setDisabled(true)
                    }}
                />
            </div>


            {!disabled && <button type="submit" >Save</button>}
        </form>
    )
}
