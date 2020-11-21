import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import img from '../../images/img1.svg'
import './UserDashboard.css'



function UserDashboard() {
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
        
        <div className="container">
            {error && <h4>{error}</h4>}
            <div className="mr-auto">
            <button className="btn btn-danger" variant="link" onClick={handleLogout}>Log out</button>
            </div>
            <div className="container">
                <div class="col-lg-6 col-md-12 site hero-subtitle" >
                    <h4 className="lightText heading dark" >Green Office</h4>
                    <p className="lightTextDesc hero-subtitle dark">New way of Applying for Apllications online</p>
                    <div class="d-flex flex-row flex-wrap">
                    <Link to='/newapplication'>
                    <button className="btn btn-primary">
                      Fill the New Form
                    </button>
                    </Link> 
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 hero-img-wrapper">
                 <img src={img}  className='hero-img' />
                </div>
            </div>
        </div>
       

          
        //      <div className="lightBg hero-section">
        //         <div className="container">
        //         <div className="row hero-row" style={{ display: 'flex' }}>
              
        //         <div className="col-lg-6 hero-text-wrapper">
        //           <div className="top-line">Helllllllllllllllllllll</div>
        //           <h1 className="lightText heading dark">
        //             papapapappapappapapapapappapapappappapa
        //           </h1>
        //           <p
        //             className=" lightTextDesc hero-subtitle dark "
        //           >
        //             hsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacbbbbbbbbccccccccccccccccccccccc
        //           </p>
                  
              
        //       </div>
        //       <div className='col-lg-6'>
        //         <div className='hero-img-wrapper'>
        //           <img src={img}  className='hero-img' />
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
     
            
            /* <button><Link to="/status">Application Status</Link></button>
            <button><Link to="/newapplication">Apply for New Form</Link></button>
            */
            
        
    )
}

export default UserDashboard
