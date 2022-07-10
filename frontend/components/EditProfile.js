import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { updateUser } from '../fetchers/fetchUser'



export default function EditProfile({ user, mutate, token, editing }) {
    const [gender, setGender] = useState('')
    const [isAdmin, setisAdmin] = useState(false)
    const [disabled, setdisabled] = useState(true);
    const updatedData = {};
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (gender !== '') {
            if (editing) {
                updatedData = { gender }
            } else {
                updatedData = { gender, isAdmin }
            }
            let updatedUser = await updateUser('/edit/',
                token, updatedData
            );
            if (mutate) mutate(updatedUser)
            if (router.query.callbackUrl) router.push(router.query.callbackUrl || '/')
        }
    }

    useEffect(() => {
        if (user) {
            if (user.gender) setGender(user.gender)
            setisAdmin(user.isAdmin)
        }
    }, [user])


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="gender">Gender :</label>
                <input
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={(e) => {
                        if (disabled) setdisabled(false)
                        setGender(e.target.value);
                        if (e.target.value === '') setdisabled(true)
                    }}
                />
            </div>

            <div>
                <label
                    className={editing ? 'disabled-text' : ''}
                    htmlFor="isAdmin">Artist Account :</label>
                <input
                    type="checkbox"
                    name="isAdmin"
                    checked={isAdmin}
                    disabled={editing ? true : false}
                    onChange={(e) => {
                        setisAdmin(e.target.checked);
                        console.log(e.target.checked, isAdmin)
                    }}
                />
            </div>
            {!disabled && <button type="submit" >Save</button>}
        </form>
    )
}
