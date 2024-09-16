import React from "react";
import "./order.css";

const Order = () => {
  window.scrollTo(0, 0);
  return (
    <div className="order">
      <div className="orderHead">
        <p className="orderHead1">Order History</p>
        <div className="orderHeadSub">
          <p className="orderHeadSub1">Home</p>
          <i class="fa-solid fa-angle-right"></i>
          <p className="orderHeadSub2">Orders</p>
        </div>
      </div>
      <div className="orderMain">
        <div className="orderMainHead">
          <p className="orderMainHead1">Order Details</p>
          <div className="orderMainHead2">
            <input type="date" />
            <button>Check</button>
          </div>
        </div>
        <div className="orderMainColumn">
          <div className="orderMainColumn1 ">
            <p>Date</p>
          </div>
          <div className="orderMainColumn2">
            <p>Order ID</p>
          </div>
          <div className="orderMainColumn3">
            <p>Category</p>
          </div>
          <div className="orderMainColumn4">
            <p>Order</p>
          </div>
          <div className="orderMainColumn8">
            <p>Quantity</p>
          </div>
          <div className="orderMainColumn5">
            <p>Price</p>
          </div>
          <div className="orderMainColumn6">
            <p>Payment Method</p>
          </div>
          <div className="orderMainColumn7">
            <p>Status</p>
          </div>
        </div>
        <div className="orderMainInputs">
          <div className="orderMainInputs1 ">
            <p>21/06/2023</p>
          </div>
          <div className="orderMainInputs2">
            <p>MMG0986</p>
          </div>
          <div className="orderMainInputs3">
            <p>Dessert</p>
          </div>
          <div className="orderMainInputs4">
            <p>Vegge Lover</p>
          </div>
          <div className="orderMainColumn8">
            <p>1</p>
          </div>
          <div className="orderMainInputs5">
            <p>#4,500</p>
          </div>
          <div className="orderMainInputs6">
            <p>Bank Transfer</p>
          </div>
          <div className="orderMainInputs7">
            <p>On Hold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
