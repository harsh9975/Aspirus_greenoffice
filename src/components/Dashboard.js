import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'



function Dashboard() {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()
    
    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push=('/login')
        }
        catch{
            setError('Failes to logout')
        }
    }


    return (
        <div>
            {error && <h4>{error}</h4>}
            Dashboard
            <h2>Profile</h2>
            <button variant="link" onClick={handleLogout}>Log out</button>
            <button><Link to="/status">Application Status</Link></button>
            <button><Link to="/newapplication">Apply for New Form</Link></button>
            
        </div>
    )
}

export default Dashboard
