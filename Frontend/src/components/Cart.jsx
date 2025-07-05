import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
import { Link, useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  let [order_total, setorder_total] = useState(0);
  let after_discount = 0;

  const handlePayment = async () => {
    const amount = 1;
    const { data: order } = await axios.post("https://seven-spices-1.onrender.com/api/payment/create-order", {
      amount,
    });

    const options = {
      key: "rzp_test_3aZ7gfexPtg6GF",
      amount: order.amount,
      currency: "INR",
      name: "My Store",
      description: "Food Order Payment",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful 🎉");
        console.log(response);
      },
      prefill: {
        name: "Harshit Yadav",
        email: "harshit@example.com",
      },
      theme: {
        color: "#F59E0B",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const check_token = async () => {
      const response = await axios.get(
        "https://seven-spices-1.onrender.com/api/check-token",
        {
          withCredentials: true,
        }
      );
      if (response.data !== "Token is available") {
        window.alert("No token 😑 , go back intruder");
        navigate("/login-page");
      }
    };
    check_token();
  }, []);

  const [Cartlist, setCartList] = useState([]);
  useEffect(() => {
    const getcartitems = async () => {
      try {
        const cartitem = await axios.get("https://seven-spices-1.onrender.com/api/get-cartitems");
        setCartList(cartitem.data);
        console.log(cartitem.data);
      } catch (error) {
        console.log("error");
      }
    };
    getcartitems();
  }, []);

  {
    Cartlist?.map((i) => (order_total += Number(i.Total_price)));
  }
  {
    Cartlist?.map(
      (i) =>
        (after_discount +=
          Number(i.Total_price) - Number((i.Total_price * i.Discount) / 100))
    );
  }

  return (
    <div className="justify-between h-screen bg-pink-100">
      <div className="">
        <h1
          className="text-5xl font-bold text-gray-800 mb-10 ml-2 p-2 border-b-2 w-fit"
          style={{ fontFamily: "Peralta, sans-serif" }}
        >
          Cart
        </h1>
        <div className="flex">
          <div className="p-4 ">
            <div className="flex flex-wrap gap-16 ">
              {Cartlist.length > 0 ? (
                Cartlist.map((i) => (
                  <>
                    <FoodCard
                      key={i._id}
                      name={i.name}
                      price={i.Price}
                      about={i.about}
                      type={i.type}
                      discount={i.Discount}
                      image={i.image}
                      button_info={"Remove from cart "}
                      className=""
                    />
                  </>
                ))
              ) : (
                <h1 className="text-xl font-semibold text-red-500 col-span-full text-center">
                  No food items available
                </h1>
              )}
            </div>
          </div>
          <div className="sticky top-0 left-0 bg-white mr-10 pb-10 text-gray-900 max-w-300 min-w-100 h-100 mx-auto rounded-xl shadow-lg border border-gray-200 p-6 mt-5">
            <h2 className="text-3xl font-bold text-center text-gray-800 border-b pb-4 mb-4 tracking-tight">
              Order Summary
            </h2>

            <div className="space-y-3 text-base">
              <div className="flex justify-between">
                <span className="text-gray-700">Items Total</span>
                <span className="font-medium text-gray-800">
                  ₹ {Math.round(order_total)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-700">Discount</span>
                <span className="text-green-600 font-semibold">
                  - ₹{Math.round(order_total - after_discount)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-700">Delivery Charges</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>

              <div className="flex justify-between border-t pt-4 text-lg font-semibold text-gray-900">
                <span>Total Payable</span>
                <span>₹{Math.round(after_discount)}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3 italic">
              * Prices include all taxes and charges.
            </p>

            <button
              onClick={() => handlePayment(after_discount)}
              className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
