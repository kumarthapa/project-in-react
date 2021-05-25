import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTotext } from "../../services/action/actions";
import Studentdata from "./Studentdata"
class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ['Click and add your card Box'],
      Newname:[]
    }
  }
  onchangeHandler = (e) => {
    e.preventDefault()
    this.setState({ name: e.target.value })
  }
  onClickHandler = (e) => {
    e.preventDefault();
    if (this.state.name == '') {
      alert('Please write some rext..!');
    } else {
      this.props.addTotextHandler(this.state.name)
      this.setState({Newname: [...this.state.Newname,this.props.username.username]})
    }
  }
 
  onClearHandler = () =>{
    this.setState({Newname: []})
  }
  render() {

    return (
      <>
      <Studentdata/>
        <div style={{width: '800px', margin: '30px auto' }}>
          <div style={{ padding: '20px', color: 'white', backgroundColor: 'cornflowerblue', borderRadius: '5px', margin: 'auto 10px'}}>
          <div style={{ padding: '20px', backgroundColor: 'cornflowerblue', borderRadius: '5px', margin: 'auto 10px'}}>
          <div style={{ margin: '10px 0', padding: '10px 0',display:'flex', flexWrap:'wrap'}}>
            {this.state.Newname.map((uName,index)=>{return <p key={index} style={{margin:'5px', padding:'20px', 
            backgroundColor:'yellowgreen', textAlign:'center', borderRadius:'4px', width:'100px'}}>{index+1}</p>})}
            </div>
          </div>
            <input type="text" name="name" onChange={this.onchangeHandler} style={{ margin: '10px 0', padding: '10px 7' }} value={this.state.name} />

            <button onClick={this.onClickHandler} style={{ padding: '16px 20px', backgroundColor: 'darkgreen', color: 'white', 
            borderRadius: '7px', border: 'none', fontSize: '17px' }}>Add Card </button>

            <button onClick={this.onClearHandler}  style={{ padding: '16px 20px', margin:'8px', backgroundColor: 'crimson', color: 'white', 
            borderRadius: '7px', border: 'none', fontSize: '17px' }}>Clear Card</button>

          </div>
         
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.cardItems
});
const mapDispatchToProps = (dispatch) => ({
  addTotextHandler: (data) => dispatch(addTotext(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);