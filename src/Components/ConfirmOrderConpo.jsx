import React from "react";

export const ConfirmOrderConpo = () => {

    const  HandleConfirmOrder = (e)=>{
            e.preventDefault()
    }
  return (
    <div className="w-full h-fit px-5 py-5 ">
      <div className="h-fit w-full  flex  flex-col justify-center items-center gap-2 ">
        <h3 className="text-center text-[25px]">Confirm Your Order</h3>
        <h3 className="text-center text-[20px]">MD Gaffar Sheikh</h3>

        <p>
            Phone Number : 01719081533
        </p>

        <form onSubmit={HandleConfirmOrder} className=" h-[250px] w-full  flex gap-4 flex-col justify-center items-center">
          <label htmlFor="textArea">Enter Your Address</label>

            <textarea className="h-[80px] w-[90%] rounded-md p-3" name="textArea" id="textArea" placeholder="Example : Distric,Upazila,Vilage 'Sirajganj,Sirajganj Sadar,Janpur' ">

            </textarea>

            <button type="submit" className="h-10 w-[60%] rounded-md bg-green-300">Confirm Your Order</button>


        </form>


      </div>
    </div>
  );
};
