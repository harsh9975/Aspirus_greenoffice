import React, { Component } from 'react'
import firebase from '../firebase'

class NewApplicationlist extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:null,
            middlename:null,
            surname: null,
            address: null,
            pic: null,
            sign: null,
            poi: null,
            poa: null
        }
    }

    handleChange = (firstname, middlename, surname, address, pic,sign, poi, poa)=>{
        this.setState({
            firstname: firstname,
            middlename: middlename,
            surname: surname,
            address: address,
            pic: pic,
            sign: sign,
            poi: poi,
            poa: poa

        })
    }

    handleSave=()=>{
        let bucketName = 'UserData'
        let file = this.files[0]
        let storageRef = firebase.storage().ref.apply(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
       // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED),
        // ()=>{
        //     let downloadURL = uploadTask.snapshot.downloadURL
        // }
    }

    render(){

        return (
            <div className="container">
               <form >

                <div class="form-group">

                <div className="col-xs-4">
                <label>First Name</label>
                <input className="form-control " type="text" placeholder="First Name"/>
                </div>

                <div className="form-group col-xs-4">
                <label>Middle Name</label>
                <input className="form-control" type="text" placeholder="Middle Name"/>
                </div>

                <div className="col-xs-4">
                <label>Surname</label>
                <input className="form-control" type="text" placeholder="Last Name Name"/>
                </div>

                </div>
                   
                <div class="form-group">
                <label>Email</label>
                <input className="form-control" type="email" placeholder="Email"/>
                </div>
                
                <div class="form-group">
                <label>Address</label>
                <textarea className="form-control" placeholder="Addresss" rows="5"></textarea>
                </div>
    
                <div className="col-xs-4">
                    <div className="form-group">
                    <label>Upload Passport Size Photo</label>
                    <input type="file" className="custom-file-input" id="customFile" onChange={(e)=>{this.handleChange(e.target.files)}}/>
                    <img id="new-img"/>
                    </div>
    
                    <div className="form-group">
                    <label>Upload Sign</label>
                    <input type="file" className="custom-file-input" id="customFile"/>
                    </div>
                </div>
    
    
                <div className="col-xs-4">
                <div className="form-group">
                <label>Upload Proof of Identity</label>
                <input type="file" className="custom-file-input" id="customFile"/>
                
               
    
                <div className="form-group">
                <label>Upload Proof of Address</label>
                <input type="file" className="custom-file-input" id="customFile"/>
                </div>
                </div>
                </div>
    
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={this.handleSave}>Submit</button>
                </div>
                 </form>
            </div>
        )

    }
    
}

export default NewApplicationlist

