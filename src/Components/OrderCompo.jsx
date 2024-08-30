import React, { useState } from "react";
import "../GlobalCss/global.css";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { SiGithubsponsors } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const OrderCompo = ({ porductId }) => {
  // data from redux store
  const orderQuuntity = useSelector((state) => {
    return state.updateQuantity;
  });

  const busket = useSelector((state) => {
    return state.UpdateBusketArray;
  });
  const updateValue = useDispatch();
  const navigate = useNavigate();

  // user local State

  const [busketLocalData, setBusketLocalData] = useState({
    size: "M",
    color: null,
  });

  const [colorError, setColorError] = useState(false);

  // for handleing selection size or color
  const SizeHandler = (e) => {
    const TargaterElement = e.target;

    // adding class for user selectin indintify

    TargaterElement.parentNode.childNodes.forEach((element) => {
      element.classList.remove("size-selection");
    });
    TargaterElement.classList.add("size-selection");

    // collect user data

    if (TargaterElement.id == "product-size") {
      setBusketLocalData((prev) => {
        return {
          ...prev,
          size: TargaterElement.name,
        };
      });
    } else if (TargaterElement.id == "product-color") {
      setBusketLocalData((prev) => {
        return {
          ...prev,
          color: TargaterElement.name,
        };
      });
    }
  };

  // push data to array
  const AddToBusketHandler = () => {
    if (busketLocalData.color) {
      updateValue({
        type: "add",
        newData: {
          productId: Number(porductId),
          porductSize: busketLocalData.size,
          productColor: busketLocalData.color,
          productQuyantity: orderQuuntity,
        },
      });

      setColorError(false);

      setTimeout(() => {
        navigate("/busket");
      }, 200);
    } else {
      setColorError(true);
    }
  };

  // buy now section handle
  const HaanldeBay = (e) => {
    if (busketLocalData.color) {
      updateValue({
        type: "add",
        newData: {
          productId: Number(porductId),
          porductSize: busketLocalData.size,
          productColor: busketLocalData.color,
          productQuyantity: orderQuuntity,
        },
      });
      setColorError(false);

      setTimeout(() => {
        navigate("/confirmorder");
      }, 200);
    } else {
      setColorError(true);
    }
  };

  return (
    <div className="">
      {/* iamge div  */}
      <div className="h-[250px] lg:h-[400px] w-full mt-3  flex justify-center items-center p-2">
        <img
          className="h-full rounded-md"
          src="/Images/Product_images/t_shart (42).jpeg"
          alt="iamagge"
        />
      </div>

      {/* titile and price div  */}
      <div className="h-fit py-2 px-2 w-full lg:w-1/2 lg:mx-auto lg:mt-2 bg-[#a1c181] rounded-md grid grid-cols-2">
        <p className="">Stylish T-shirt</p>
        <p className="">Price : 220 BDT</p>
      </div>

      <div className="w-full  lg:flex lg:justify-between lg:items-center">
        <div className="h-fit w-full mt-1 flex justify-center items-center">
          <button
            onClick={SizeHandler}
            id="product-size"
            name="SM"
            className="border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 "
          >
            SM
          </button>
          <button
            onClick={SizeHandler}
            id="product-size"
            name="M"
            className="border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 size-selection"
          >
            M
          </button>
          <button
            onClick={SizeHandler}
            id="product-size"
            name="L"
            className="border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 "
          >
            L
          </button>
          <button
            onClick={SizeHandler}
            id="product-size"
            name="XL"
            className="border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 "
          >
            XL
          </button>
          <button
            onClick={SizeHandler}
            id="product-size"
            name="XXL"
            className="border px-4 mx-1 my-1 border-black text-[20px] rounded-md duration-500 "
          >
            XXL
          </button>
        </div>

        {/* color selection */}
        <div className="h-fit w-full mt-1">
          {colorError ? (
            <div className="bottom-[-25px] left-0 h-[25px] w-full flex justify-center items-center bg-red-500 my-1">
              <p>Please Select Color</p>
            </div>
          ) : null}

          <div className=" flex justify-center items-center">
            <button
              onClick={SizeHandler}
              id="product-color"
              name="black"
              className="border p-1 mx-1 border-black text-[20px] rounded-md "
            >
              Balck
            </button>
            <button
              onClick={SizeHandler}
              id="product-color"
              name="blue"
              className="border p-1 mx-1 border-black text-[20px] rounded-md "
            >
              Blue
            </button>
          </div>
        </div>
      </div>
      {/* size selection div  */}

      {/* countity adjusment  */}
      <div className="h-[60px] w-[200px] mx-auto mt-2 bg-[#95718665] rounded-md grid grid-cols-3">
        <button
          onClick={() => updateValue({ type: "plus" })}
          className="grid place-content-center"
        >
          <CiSquarePlus className="h-10 w-10" />
        </button>
        <p className="grid place-content-center text-[25px] ">
          {orderQuuntity}
        </p>
        <button
          onClick={() => updateValue({ type: "minus" })}
          className="grid place-content-center"
        >
          <CiSquareMinus className="h-10 w-10" />
        </button>
      </div>

      {/* buy or add to card option  */}
      <div className="w-full h-[60px] relative  mt-2 flex gap-2 lg:w-[30%] lg:mx-auto  lg:py-10">
        <button className="absolute top-[-40px] right-0 h-fit">
          <SiGithubsponsors className="w-10 h-10" />
        </button>

        <button
          onClick={HaanldeBay}
          className="w-[70%] h-[60px] bg-[#81b9189c] rounded-md"
        >
          Buy Now
        </button>

        <button
          onClick={AddToBusketHandler}
          className="w-[30%]  h-[60px] bg-[#9f86c0a2] rounded-md"
        >
          Add To Busket
        </button>
      </div>
    </div>
  );
};
