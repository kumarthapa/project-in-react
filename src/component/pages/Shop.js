import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTotext } from "../../services/action/actions";
class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: [],
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

  render() {
    return (
      <>
        <div style={{ display: 'flex', width: '800px', margin: '30px auto' }}>
          <div style={{ padding: '20px', color: 'white', backgroundColor: 'cornflowerblue', borderRadius: '5px', margin: 'auto 10px', height: '250px' }}>
            <h2 style={{ margin: '10px 0', padding: '10px 0' }}>Please click button and change your text</h2>
            <input type="text" name="name" onChange={this.onchangeHandler} style={{ margin: '10px 0', padding: '10px 7' }} value={this.state.name} />

            <button onClick={this.onClickHandler} style={{ padding: '16px 20px', backgroundColor: 'hotpink', color: 'white', borderRadius: '7px', border: 'none', fontSize: '17px' }}>Add Text</button>

          </div>
          <div style={{ padding: '20px', color: 'white', backgroundColor: 'cornflowerblue', borderRadius: '5px', margin: 'auto 10px', height: '250px' }}>
          <h3 style={{ margin: '10px 0', padding: '10px 0',display:'flex', flexDirection:'column'}}>{this.state.Newname.map((uName,index)=>{return <p key={index}>{uName}</p>})}</h3>
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