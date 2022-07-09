export const getCurrentUser = async (url, token) => {
    return await fetch(`http://localhost:8000/api/user${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

    })
        .then((res) => res.json())
        .then((data) => {
            console.log('user - >', data.user)

            if (data) return data.user
            return undefined
        })
}

export const updateUser = async (url, token, userData) => {
    return await fetch(`http://localhost:8000/api/user${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userData)
    })
        .then((res) => res.json())
        .then((updatedUser) => {
            console.log('updatedUser', updatedUser)
            if (updatedUser) return updatedUser
            return undefined
        })

}