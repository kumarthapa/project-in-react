//'ReMyhomeact'==my parant is src/App.js
import Header from "../component/Header";
import { connect } from "react-redux";
// import { addToCart } from "../services/action/actions";
const mapStateToProps = (state) => ({
  cardData: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({
//   addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
