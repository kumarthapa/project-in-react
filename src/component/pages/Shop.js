import React, { useState } from 'react';
import Blog from './Blog'

const Shop = () => {
  const [inputData, setInputData] = useState({
    title:'',
    cname:'',
    c_info:''
  });
  const [newinputData, setnewInputData] = useState([]);
  const onChangeHandler = name => e =>{
    setInputData({
      ...inputData,
      [name]: e.target.value
    })
    
  }
  
  const onSubmitHandler = (e) =>{
    e.preventDefault()
    setnewInputData(inputData)
    //console.log(newinputData)
  }
  return (
    <div style={{width:'80%', padding:'20px', display:'flex', margin:'50px auto', backgroundColor:'#5e5e8e', color:'#fff'}}>
              <div style={{width:'30%'}}> 
                <form onSubmit={onSubmitHandler}>
                <div className="HTrow">
                    <div className="col-75">
                    <label for="title">Your Title</label>
                    <input type="text" id="title" onChange={onChangeHandler('title')} value={inputData.title} name="title" placeholder="Your name.."/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-75">
                    <label for="cname">Company name</label>
                    <input type="text" id="cname" onChange={onChangeHandler('cname')} value={inputData.cname} name="cname" placeholder="Your company name"/>
                    </div>
                    </div>
                    <div className="HTrow">
                    <div className="col-75">
                    <label for="c_info">About your company{newinputData.c_info}</label>
                    <textarea id="c_info" name="c_info" onChange={onChangeHandler('c_info')} value={inputData.c_info} placeholder="Write something.." style={{height:'200px'}}></textarea>
                    <br/>
                    <input type="submit" value="Submit" style={{margin:'10px 0'}}/>
                    </div>
                    </div>
                    </form> 
                    </div>  

                    <Blog title={newinputData.title} cname={newinputData.cname} c_info={newinputData.c_info}/>
                    
            </div>
  )
}
export default Shop;