import { useEffect, useState } from 'react'
import { createNewUser } from './LoginPanel.service'
import './LoginPanel.css'
export const LoginPanel = () => {
    const [isCreateAccountDialogOpen, setCreateAccountDialogOpen] = useState(false)
    const [newUserId, setNewUserId] = useState('loading...')
    useEffect(() => {
        console.log('firing an event', isCreateAccountDialogOpen)
        if(isCreateAccountDialogOpen) onCreateNewUserDialogSend()
    }, [isCreateAccountDialogOpen])

    const onCreateNewUserDialogSend = async() => {
        console.log('method called')
        const createNewUserResp = await createNewUser()
        if(createNewUserResp?.error || !createNewUserResp?.id) {
            setNewUserId('Error, close this message and try again')
            return
        }
        setNewUserId(createNewUserResp.id)
    }

    return (
        <div className="loginPanel">
            <button onClick={ () => setCreateAccountDialogOpen(true)}>Create Account</button>
            <dialog open={isCreateAccountDialogOpen}>
                <h3>Your user id is:</h3>
                <p>Save it so you can access later</p>
                <h2>{newUserId}</h2>
                <button onClick={() => setCreateAccountDialogOpen(false)}>Close</button>
            </dialog>
        </div>
    )
}