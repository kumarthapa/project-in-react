import React from 'react'
import { connect } from "react-redux";
import { addTotext } from "../../services/action/actions";
const Studentdata = (props) => {
    //console.log("reducer data", props.sudentdata)
    return (
        <div style={{backgroundColor:'cornflowerblue', padding:'20px', color:'white'}}>
            <h1>Add a new card {props.sudentdata}</h1>
        </div>
    )
}
  


const mapStateToProps = (state) => ({
    sudentdata: state.cardItems.Cardbox
  });
  const mapDispatchToProps = (dispatch) => ({
    // addTotextHandler: (data) => dispatch(addTotext(data))
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Studentdata);