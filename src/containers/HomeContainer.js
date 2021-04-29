//'ReMyhomeact'==my parant is src/App.js
import {connect} from 'react-redux'
import {addToCart} from '../services/action/actions'
import ReMyhomeact from '../component/Myhome'; 

const mapStateToProps=state=>({
    cardData:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(ReMyhomeact)
// export default ReMyhomeact;


