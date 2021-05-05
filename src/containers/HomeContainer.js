//'ReMyhomeact'==my parant is src/App.js
import { connect } from "react-redux";
import { addToCart,removeToCart } from "../services/action/actions";
import Myhome from "../component/Myhome";
const mapStateToProps = (state) => ({
  cardData: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Myhome);
// export default ReMyhomeact;