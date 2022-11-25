import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { selectUserCurrentUser } from "../../redux/user/user.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import "./checkout.style.scss";

const CheckOutPage = ({ cartItems, total, currentUser }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Products</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTALS: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 -Exp: 01/20 -CVV: 123
    </div>
    {currentUser ? (
      <StripeCheckoutButton price={total} />
    ) : (
      <div className="info">Please sign in to check out</div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectUserCurrentUser,
});

export default connect(mapStateToProps)(CheckOutPage);
