import React,{useState,useEffect} from 'react'
import axios from "axios"
const Shop = () => {
const [userdata, setUserdata] = useState([])

useEffect(() => {
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
  setUserdata(response.data)
  console.log(response.data)
}).catch((err)=>{
  console.log(err)
})

}, [])
  return (
    <>
    <div><h2 style={{padding:'30px'}}>Fetching data from API</h2><hr/></div>
   <div style={{display:"flex", flexWrap:'wrap', justifyContent:'center', margin:'20px 0'}}>
      
      {
        userdata.map((userData)=>{
         return <div style={{borderRadius:'5px', boxShadow:'1px 1px 6px 0px', width:'300px', padding:'15px', margin:'6px', fontWeight:'100'}}>
                  
                  <p>Id: {userData.id}</p>
                  <p>Title: {userData.title}</p>
                  <p>Body: {userData.body}</p>
                   
                  </div>
        })
      }
    </div>
    </>
 
  )
}

export default Shop
