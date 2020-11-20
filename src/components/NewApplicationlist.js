import React from 'react'

function NewApplicationlist() {
    return (
        <div>
           <form >
            <div class="form-group row">
            <div className="col-xs-3">
            <input className="form-control " type="text" placeholder="First Name"/>
            </div>
            <div className="col-xs-3">
            <input className="form-control" type="text" placeholder="Middle Name"/>
            </div>
            <div className="col-xs-3">
            <input className="form-control" type="text" placeholder="Last Name Name"/>
            </div>
            </div>
               
            <div class="form-group">
            <input className="form-control" type="email" placeholder="Email"/>
            </div>
            
            <div class="form-group">
            <textarea className="form-control" placeholder="Message..." rows="5"></textarea>
            </div>

            <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile"/>
            <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
                <button type="submit" className="btn btn-primary" href="/">Submit</button>
             </form>
        </div>
    )
}

export default NewApplicationlist

