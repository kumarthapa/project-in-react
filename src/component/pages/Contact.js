import React from 'react'

function Contact (){

    return (
            <div>
               
                <div className="HTcontainer">
                <h2>Responsive Form</h2>
                <p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>

                <form>
                <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">Name</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="email" name="email" placeholder="Your email.."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-25">
                    <label for="fname">Phone</label>
                    </div>
                    <div className="col-75">
                    <input type="text" id="phone" name="phone" placeholder="Your phone.."/>
                    </div>
                    </div>
                    <div className="row">
                    <input type="submit" value="Submit"/>
                    </div>
                    </form> 
                    </div>
                    </div>

    )
}
export default Contact