import constants from '../../../constants.json'

export const createNewUser = async() => {
    try {
        const createUserRawResp = await fetch(`${constants.devServer}/users/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (!createUserRawResp.ok) {
            return { error: createUserRawResp.status}
        }
        return await createUserRawResp.json()
    } catch (error) {
        console.log('the error was', error)
        return { error }
    }
}