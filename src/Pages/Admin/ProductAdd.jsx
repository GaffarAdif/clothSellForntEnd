import React from "react";
import { DashbordManu } from "../../Components/Admin/DashbordManu";
import { useNavigate } from "react-router-dom";
import { FaCloudArrowUp } from "react-icons/fa6";

export const ProductAdd = () => {
  const checkAdmin = sessionStorage.getItem("admin");
  const navigate = useNavigate();

  if (checkAdmin) {
    const HanldeInput = (e) => {};

    const AddProductHandle = (e) => {
      e.preventDefault();
    };

    return (
      <div className="px-5">
        <DashbordManu />

        <div className="w-full h-fit py-2  pb-[100px]">
          <form
            className="flex flex-col justify-center items-center gap-2"
            onSubmit={AddProductHandle}
          >
            {/* Product Id  */}
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product-id"
              >
                Prouct Id
              </label>
              <input
                required
                onChange={HanldeInput}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Product id"
                type="text"
                id="product-id"
              />
            </div>
            {/* Product Id  */}

            {/* Product Name  */}
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product-name"
              >
                Prouct Name
              </label>
              <input
                required
                onChange={HanldeInput}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Product Name"
                type="text"
                id="product-name"
              />
            </div>
            {/* Product Name  */}

            {/* Product Price  */}
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product-price"
              >
                Prouct Price
              </label>
              <input
                required
                onChange={HanldeInput}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Product Price"
                type="text"
                id="product-price"
              />
            </div>
            {/* Product Price  */}

            {/* ProductSize  */}
            <div className="w-full h-fit flex flex-col justify-center items-center ">
              <p>PorductSize</p>
              <div className="w-[80%] h-fit grid grid-cols-3 ">
                {/*s M Size  */}

                <div className="w-full h-10 flex justify-center items-center gap-1 ">
                  <label
                    className=" text-center  text-[25px] "
                    htmlFor="product-Size-sm"
                  >
                    SM
                  </label>
                  <input
                    onChange={HanldeInput}
                    className="h-5 w-5"
                    type="checkbox"
                    id="product-Size-sm"
                  />
                </div>

                {/* M Size  */}

                <div className="w-full h-10 flex justify-center items-center gap-1 ">
                  <label
                    className=" text-center  text-[25px] "
                    htmlFor="product-Size-m"
                  >
                    M
                  </label>
                  <input
                    onChange={HanldeInput}
                    className="h-5 w-5"
                    type="checkbox"
                    id="product-Size-m"
                  />
                </div>

                {/*L  Size  */}

                <div className="w-full h-10 flex justify-center items-center gap-1 ">
                  <label
                    className=" text-center  text-[25px] "
                    htmlFor="product-Size-l"
                  >
                    L
                  </label>
                  <input
                    onChange={HanldeInput}
                    className="h-5 w-5"
                    type="checkbox"
                    id="product-Size-l"
                  />
                </div>

                {/* xl Size  */}

                <div className="w-full h-10 flex justify-center items-center gap-1 ">
                  <label
                    className=" text-center  text-[25px] "
                    htmlFor="product-Size-xl"
                  >
                    XL
                  </label>
                  <input
                    onChange={HanldeInput}
                    className="h-5 w-5"
                    type="checkbox"
                    id="product-Size-xl"
                  />
                </div>

                {/* xxl Size  */}

                <div className="w-full h-10 flex justify-center items-center gap-1 ">
                  <label
                    className=" text-center  text-[25px] "
                    htmlFor="product-Size-xxl"
                  >
                    XXL
                  </label>
                  <input
                    onChange={HanldeInput}
                    className="h-5 w-5"
                    type="checkbox"
                    id="product-Size-xxl"
                  />
                </div>
                {/* xxxl Size  */}

                <div className="w-full h-10 flex justify-center items-center gap-1 ">
                  <label
                    className=" text-center  text-[25px] "
                    htmlFor="product-Size-xdxl"
                  >
                    XXXL
                  </label>
                  <input
                    onChange={HanldeInput}
                    className="h-5 w-5"
                    type="checkbox"
                    id="product-Size-xdxl"
                  />
                </div>
              </div>
            </div>
            {/* ProductSize  */}

            {/* proudct color  */}

            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product-color"
              >
                Prouct Color
              </label>
              <input
                required
                onChange={HanldeInput}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="expm: black,red,white"
                type="text"
                id="product-color"
              />
            </div>
            {/* proudct color  */}

            {/* proudct Stock  */}

            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product-Stock"
              >
                Prouct Stock
              </label>
              <input
                required
                onChange={HanldeInput}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Produt Stock"
                type="number"
                id="product-Stock"
              />
            </div>
            {/* proudct Stock  */}

            {/* proudct Image  */}

            <div className="w-full h-fit flex flex-col justify-center items-center">
              <p>Upload Image</p>
              <label
                className="w-[50%] h-[50px] bg-purple-300 flex justify-center items-center text-[20px] rounded-md "
                htmlFor="product-Image"
              >
                <FaCloudArrowUp className="h-[50px] w-[50px]" />
              </label>
              <input
                required
                onChange={HanldeInput}
                className="hidden"
                type="file"
                id="product-Image"
              />
            </div>
            {/* proudct Image  */}

            {/* submit button  */}
            <button
              type="submit"
              className="w-1/2 h-10 rounded-md bg-green-300"
            >
              Add Product
            </button>
            {/* submit button  */}
          </form>
        </div>
      </div>
    );
  } else {
    setTimeout(() => {
      navigate("/admin");
    }, 200);
  }
};
