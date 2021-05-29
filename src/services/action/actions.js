export const addTodo=(data)=>{
    //console.log('action');
    return{
           type:'ADD_TODO',
           payload: {
               id : new Date().getTime().toString(),
               data:data
           }
    }
}
