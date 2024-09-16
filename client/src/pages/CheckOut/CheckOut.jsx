import React, { useEffect, useState, useContext } from "react";
import "./checkout.css";
import bitcoin from "./../../assets/menu/6add45ef81ba9eb4d11a68faed3ee9c3-removebg-preview.png";
import {
  cartContext,
  tokenContext,
  cartTotalContext,
  userContext,
  userIdContext,
} from "../../App";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { toast } from "sonner";

const CheckOut = () => {
  const [iscoupon, setIsCoupon] = useState(false);
  const [bankTransfer, setBankTransfer] = useState(false);
  const [checkPayment, setCheckPayment] = useState(false);
  const [cashDeliver, setCashDelivery] = useState(false);
  const [bitPayment, setBitPayment] = useState(false);
  const { carts, setCarts } = useContext(cartContext);
  const { userToken, setUserToken } = useContext(tokenContext);
  const { cartTotal, setCartTotal } = useContext(cartTotalContext);
  const [placingOrder, setPlacingOrder] = useState(false);
  const { user, setUser } = useContext(userContext);
  const { userId, setUserId } = useContext(userIdContext);

  console.log(carts);
  console.log(userToken);
  // console.log(cartTotal);
  console.log(user);

  const baseUrl = "http://localhost:3500/api/v1";
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const handleCoupon = () => {
    setIsCoupon((prev) => !prev);
  };

  const handleBankTransfer = () => {
    setBankTransfer(true);
    setCheckPayment(false);
    setCashDelivery(false);
    setBitPayment(false);
  };

  const handleCheckPayment = () => {
    setCheckPayment(true);
    setBankTransfer(false);
    setCashDelivery(false);
    setBitPayment(false);
  };

  const handleCashDelivery = () => {
    setCashDelivery(true);
    setCheckPayment(false);
    setBankTransfer(false);
    setBitPayment(false);
  };

  const handleBitPayment = () => {
    setBitPayment(true);
    setBankTransfer(false);
    setCheckPayment(false);
    setCashDelivery(false);
  };

  const handleCheckingOut = async (e) => {
    e.preventDefault();
    setPlacingOrder(true);
    console.log("Checking Out Orders");

    const orderValues = { orders: carts, Id: userId };

    setTimeout(async () => {
      // try {
      //   const response = await axios.post(
      //     `${baseUrl}/checkoutcart`,
      //     orderValues
      //   );
      //   setPlacingOrder(false);
      //   console.log(response);
      //   toast.success(response.data.message);
      //   console.log("Done");
      // } catch (error) {
      //   console.log(error);
      //   setPlacingOrder(false);
      //   toast.success(error.response.data.message);
      // }
      if (carts.lenght >= 1) {
        toast.success("Your order is on the way sit tight");
        setPlacingOrder(false);
      }
    }, 1000);
  };

  return (
    <>
      <div className="checkOut">
        <div
          className={`CheckingOut ${
            placingOrder ? "showCheckingOut" : "closeCheckingOut"
          }`}
        >
          <Oval
            visible={true}
            height="60"
            color="rgb(255, 194, 34)"
            secondaryColor="rgb(248, 245, 240)"
            radius="9"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
        <div className="checkHead">
          <p className="checkHead1">Checkout</p>
          <div className="checkHeadSub">
            <p className="checkHeadSub1">Home</p>
            <i class="fa-solid fa-angle-right"></i>
            <p className="checkHeadSub2">Checkout</p>
          </div>
        </div>
        <div className="checkMain">
          <div className="checkCoupon">
            <div className="checkCoupon1">
              <p>
                Have a coupon?{" "}
                <span onClick={() => handleCoupon()}>
                  Click here to enter your code
                </span>
              </p>
            </div>

            <div
              className={`checkCouponForm ${
                iscoupon ? "checkCouponFormOpen" : "checkCouponFormClose"
              }`}
            >
              <p className="checkCouponForm1">
                If you have a coupon code, please apply it below.
              </p>
              <div className="checkCouponForm2">
                <input type="text" placeholder="Coupon code" />
                <button>APPLY COUPON</button>
              </div>
            </div>
          </div>
          <form onSubmit={handleCheckingOut}>
            <div className="checkReceipt">
              <div className="checkReceiptL">
                <p className="checkReceiptLHead">Billing details</p>
                <div className="checkReceipt1">
                  <div>
                    <p>
                      First Name <span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div>
                    <p>
                      Last Name <span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                </div>
                <div className="checkReceipt2">
                  <p>Company name (optional)</p>
                  <input type="text" />
                </div>
                <div className="checkReceipt3">
                  <p>
                    Country / Region <span>*</span>
                  </p>
                  <select>
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="checkReceipt3">
                  <p>
                    State <span>*</span>
                  </p>
                  <select>
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="checkReceipt4">
                  <p>
                    Street address <span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className="checkReceipt4">
                  <p>
                    Post Code<span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className="checkReceipt4">
                  <p>
                    Phone<span>*</span>
                  </p>
                  <input type="text" />
                </div>
                <div className="checkReceipt4">
                  <p>
                    Email address<span>*</span>
                  </p>
                  <input type="text" />
                </div>

                <div className="checkReceipt5">
                  <div className="checkReceipt5Top">
                    <p>Ship to a different address?</p>
                    <input type="checkbox" />
                  </div>
                  <div className="checkReceiptButtom">
                    <p>Order notes (optional)</p>
                    <textarea
                      name=""
                      id=""
                      placeholder="Notes about your order, e.g special notes for delivery."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="checkReceiptR">
                <p className="checkReceiptRHead">Your order</p>
                <div className="checkReceiptRColumn">
                  <p>Menu</p>
                  <p>Subtotal</p>
                </div>
                <div>
                  {carts?.map((cart, index) => (
                    <div className="checkReceiptRorder">
                      <p className="checkReceiptRorder1">
                        {cart?.menuItem} <span>x {cart?.menuQuantity}</span>
                      </p>
                      <p className="checkReceiptRorder2">{`#${parseInt(
                        cart?.menuPrice
                      ).toLocaleString()}`}</p>
                    </div>
                  ))}
                </div>
                <div className="checkReceiptR3">
                  <p>Subtotal</p>
                  <p>{`#${parseInt(cartTotal).toLocaleString()}`}</p>
                </div>
                <div className="checkReceiptR4Main">
                  <div className="checkReceiptR4">
                    <p className="checkReceiptR4L">Shipping</p>
                    <p className="checkReceiptR4R">
                      Enter your address to view shipping options.
                    </p>
                  </div>
                </div>
                <div className="checkReceiptR5">
                  <p className="checkReceiptR5L">Total</p>
                  <p className="checkReceiptR5R">#4000</p>
                </div>
                <div className="checkReceiptR6">
                  <div className="checkReceiptR6Head">
                    <input
                      onChange={() => handleBankTransfer()}
                      name="option"
                      type="radio"
                    />
                    <p>Direct bank transfer</p>
                  </div>
                  <div
                    className={`checkReceiptR6Main  ${
                      bankTransfer
                        ? "checkReceiptR6MainOpen"
                        : "checkReceiptR6MainClose"
                    }`}
                  >
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="checkReceiptR6">
                  <div className="checkReceiptR6Head">
                    <input
                      onChange={() => handleCheckPayment()}
                      name="option"
                      type="radio"
                    />
                    <p>Check payments</p>
                  </div>
                  <div
                    className={`checkReceiptR6Main  ${
                      checkPayment
                        ? "checkReceiptR6MainOpen"
                        : "checkReceiptR6MainClose"
                    }`}
                  >
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                </div>
                <div className="checkReceiptR6">
                  <div className="checkReceiptR6Head">
                    <input
                      onChange={handleCashDelivery}
                      name="option"
                      type="radio"
                    />
                    <p>Cash on delivery</p>
                  </div>
                  <div
                    className={`checkReceiptR6Main ${
                      cashDeliver
                        ? "checkReceiptR6MainOpen"
                        : "checkReceiptR6MainClose"
                    } `}
                  >
                    <p>Pay with cash upon delivery.</p>
                  </div>
                </div>
                <div className="checkReceiptR6">
                  <div className="checkReceiptR6Head">
                    <div className="checkReceiptR6HeadCoin">
                      <div className="checkReceiptR6Head1">
                        <input
                          onChange={() => handleBitPayment()}
                          name="option"
                          type="radio"
                        />
                        <p>
                          Bitcoin <span>What is Bitcoin</span>
                        </p>
                      </div>
                      <div className="checkReceiptR6Head2">
                        <img src={bitcoin} alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`checkReceiptR6Main ${
                      bitPayment
                        ? "checkReceiptR6MainOpen"
                        : "checkReceiptR6MainClose"
                    }  `}
                  >
                    <p>
                      We are excited to offer Bitcoin as a payment option! A
                      unique Bitcoin address will be generated for your
                      transaction. This ensures secure and accurate processing
                      of your payment.
                    </p>
                  </div>
                </div>
                <div className="checkReceiptR7">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our <span>privacy policy</span>.
                  </p>
                </div>
                <div className="checkReceiptR8">
                  <button>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
