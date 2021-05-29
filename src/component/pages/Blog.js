import React from 'react'

const Blog = (props) => {
    return (
        <>
        <div style={{width:'70%', display:'flex', justifyContent:'center',padding:'70px 0', boxShadow:'1px 1px 115px -31px'}}> 
                    <div style={{margin:'20px', textAlign:'left', width:'100%'}}>
                      <p style={{fontSize:'36px', fontWeight:'600',margin:'5px 0'}}>{props.title}</p>
                      <p style={{fontSize:'40px',fontWeight:'100'}}>{props.cname}</p>
                    </div>

                    <div style={{margin:'20px',width:'100%'}}>
                      <p style={{fontSize:'20px',fontWeight:'lighter'}}>{props.c_info}
                      </p>
                    </div>
                    </div>
        </>
    )
}

export default Blog
