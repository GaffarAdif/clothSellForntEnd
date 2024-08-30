import React, { useRef, useState,useEffect } from "react";
import { DashbordManu } from "../../Components/Admin/DashbordManu";
// import { Loader } from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { FaCloudArrowUp } from "react-icons/fa6";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";

export const ProductAdd = () => {
const serverUrl = useSelector(state=>state.SerVerUrlSave)

  const [LoadingShow,setLodingShow]= useState(false)
  const [showSucc,setshowSucc]= useState(false)

  const checkAdmin = sessionStorage.getItem("admin");
  const navigate = useNavigate();
  const inputREfarance = useRef()
  const [prodcutInfo,setProductInfo] = useState({

    product_id : '',
    product_name: '',
    product_price: 0,
    product_catagoris: '',
    product_size: '',
    product_color: '',
    product_stock: 0,
  })

  useEffect(() => {
    if(showSucc){

      setTimeout(() => {
        window.location.reload()
      }, 1000);

    }
  }, [showSucc])
  



  const HanldeInput = (e) => {
    // console.log(e.target.id)

    const inputTarget = e.target
    const InputdId = e.target.id

    switch (InputdId) {
      
      case 'product_id':
        setProductInfo(prev=>{
          return({
            ...prev,
            product_id : inputTarget.value
          })
        })
        break;
    

      case 'product_name':
        setProductInfo(prev=>{
          return({
            ...prev,
            product_name : inputTarget.value
          })
        })
        break;
    
    

      case 'product_price':
        setProductInfo(prev=>{
          return({
            ...prev,
            product_price : inputTarget.value
          })
        })
        break;
    
      case 'product_catagoris':
        setProductInfo(prev=>{
          return({
            ...prev,
            product_catagoris : inputTarget.value
          })
        })
        break;
    
    
      case 'product_size':

        setProductInfo(prev=>{
          return({
            ...prev,
            product_size : inputTarget.value
          })
        })
        break;
    
    
      case 'product_color':
        setProductInfo(prev=>{
          return({
            ...prev,
            product_color : inputTarget.value
          })
        })
        break;
    

      case 'product_stock':
        setProductInfo(prev=>{
          return({
            ...prev,
            product_stock : inputTarget.value
          })
        })
        break;
    

      default:
        break;
    }


  
  };



  const AddProductHandle =  async(e) => {
    e.preventDefault();
    const imageFileRef = inputREfarance.current.files[0]

    
    setLodingShow(true)


    // formate String to array size,color,catagoirs 
if(!Array.isArray(prodcutInfo.product_catagoris)){
 const catagorisSplit = (prodcutInfo.product_catagoris.split(','))
 setProductInfo(prev=>{
  return({
    ...prev,
    product_catagoris : catagorisSplit
  })
})
}
if(!Array.isArray(prodcutInfo.product_color)){

  const colorSplit = (prodcutInfo.product_color.split(','))
  setProductInfo(prev=>{
   return({
     ...prev,
     product_color : colorSplit
   })
 })


}
if(!Array.isArray(prodcutInfo.product_size)){


  const sizeSplit = (prodcutInfo.product_size.split(','))
  setProductInfo(prev=>{
   return({
     ...prev,
     product_size : sizeSplit
   })
 })


}
    // formate String to array size,color,catagoirs 


    try {
      const formData = new FormData();
    
      // Append the image file
      formData.append('productImage', imageFileRef);
    
      // Append each field from productInfo to the formData
      Object.keys(prodcutInfo).forEach(key => {
        const value = prodcutInfo[key];
        if (Array.isArray(value)) {
          // Append each item of the array separately
          value.forEach((item, index) => {
            formData.append(`${key}[${index}]`, item);
          });
        } else {
          // Append other fields directly
          formData.append(key, value);
        }
      });
    
      // Send the FormData object
    await axios.post(`${serverUrl}admin/product/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(response=>{

        setLodingShow(false)
          setshowSucc(true)
          
 

      }).catch(error=>{
        console.log(error)
      })


    } catch (error) {
      console.log(error);
    }
    






  };

  if (checkAdmin) {


    return (
      <div className="px-5">
        <DashbordManu />

        {
          showSucc  ?   <div className="fixed  flex justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[200px] bg-blue-200">
                <p>Product Uploder Seccesfully</p>
        </div> : null
        }

      

        {
          LoadingShow ? <div className="fixed top-0 left-0 w-full h-screen bg-blue-200">
          < Loader />
          </div> : null
        }

        


        <div className="w-full h-fit py-2  pb-[100px]">
          <form
            className="flex flex-col justify-center items-center gap-2"
            onSubmit={AddProductHandle}
          >
            {/* Product Id  */}
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product_id"
              >
                Product Id
              </label>
              <input
                required
                onChange={HanldeInput}
                value={prodcutInfo.product_id}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Product id"
                type="text"
                id="product_id"
              />
            </div>
            {/* Product Id  */}

            {/* Product Name  */}
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product_name"
              >
                Product Name
              </label>
              <input
                required
                onChange={HanldeInput}
                value={prodcutInfo.product_name}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Product Name"
                type="text"
                id="product_name"
              />
            </div>
            {/* Product Name  */}

            {/* Product Price  */}
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product_price"
              >
                Product Price
              </label>
              <input
                required
                onChange={HanldeInput}
                value={prodcutInfo.product_price}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Product Price"
                type="number"
                id="product_price"
              />
            </div>
            {/* Product Price  */}

            {/* Product cataoris  */}
            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product_catagoris"
              >
                Product Catagoris
              </label>
              <input
                required
                onChange={HanldeInput}
                value={prodcutInfo.product_catagoris}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="expm : Man,t-shirt,shirt"
                type="text"
                id="product_catagoris"
              />
            </div>
            {/* Product catagoris  */}


            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product_size"
              >
                Product Size
              </label>
              <input
                required
                onChange={HanldeInput}
                value={prodcutInfo.product_size}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="expm: m,xl,xxl"
                type="text"
                id="product_size"
              />
            </div>

            {/* proudct color  */}

            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product_color"
              >
                Product Color
              </label>
              <input
                required
                onChange={HanldeInput}
                value={prodcutInfo.product_color}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="expm: black,red,white"
                type="text"
                id="product_color"
              />
            </div>
            {/* proudct color  */}

            {/* proudct Stock  */}

            <div className="w-full h-fit flex flex-col justify-center items-center">
              <label
                className="w-[80%] h-fit text-center text-[20px] "
                htmlFor="product_stock"
              >
                Product Stock
              </label>
              <input
                required
                onChange={HanldeInput}
                value={prodcutInfo.product_stock}
                className="w-[80%] h-10 rounded-md px-2"
                placeholder="Produt Stock"
                type="number"
                id="product_stock"
              />
            </div>
            {/* proudct Stock  */}

            {/* proudct Image  */}

            <div className="w-full h-fit flex flex-col justify-center items-center">
              <p>Upload Image</p>
              <label
                className="w-[50%] h-[50px] bg-purple-300 flex justify-center items-center text-[20px] rounded-md "
                htmlFor="product_image"
              >
                <FaCloudArrowUp className="h-[50px] w-[50px]" />
              </label>
              <input
                required
                onChange={HanldeInput}
                className="hidden"
                type="file"
                id="product_image"
                ref={inputREfarance}
          
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
