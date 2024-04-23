import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";

const UpdatePage = () => {
    let navigate=useNavigate();
    let {id}= useParams();

    const [Existing,SetExisting]=useState(null)

    const ExistingInfo=async (id)=>{
        let res=await axios.get(`/api/ReadByID/${id}`)
        SetExisting(res.data['row'][0])
    }

    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);


    const UpdateData=async (event)=>{

        event.preventDefault();
        let formData=new FormData(event.target);
        let food_name=formData.get("food_name");
        let food_code=formData.get("food_code");
        let food_image=formData.get("food_image");
        let food_category=formData.get("food_category");
        let qty=formData.get("qty");
        let price=formData.get("price");


        await axios.post(`/api/Update/${id}`,{
            food_name:food_name,
            food_code:food_code,
            food_image:food_image,
            food_category:food_category,
            qty:parseFloat(qty),
            price:parseFloat(price)
        })

        navigate("/");


    }



    return (
        <div className="container mt-5">
            <form onSubmit={UpdateData}>
                <div className="row">

                    <div className="col-md-3">
                        <label>Food Name</label>
                        <input defaultValue={Existing!==null?(Existing['food_name']):("")} className="form-control form-control-sm" name="food_name" type="text"
                               placeholder="food_name"/>
                    </div>
                    <div className="col-md-3">
                        <label>Food Code</label>
                        <input defaultValue={Existing!==null?(Existing['food_code']):("")} className="form-control form-control-sm" name="food_code" type="text"
                               placeholder="food_code"/>
                    </div>

                    <div className="col-md-3">
                        <label>Food Image</label>
                        <input defaultValue={Existing!==null?(Existing['food_image']):("")} className="form-control form-control-sm" name="food_image" type="text"
                               placeholder="food_image"/>
                    </div>

                    <div className="col-md-3">
                        <label>Food Category</label>
                        <input defaultValue={Existing!==null?(Existing['food_category']):("")} className="form-control form-control-sm" name="food_category" type="text"
                               placeholder="food_category"/>
                    </div>

                    <div className="col-md-3">
                        <label>Qty</label>
                        <input defaultValue={Existing!==null?(Existing['qty']):("")} className="form-control form-control-sm" name="qty" type="text" placeholder="qty"/>
                    </div>


                    <div className="col-md-3">
                        <label>Price</label>
                        <input defaultValue={Existing!==null?(Existing['price']):("")} className="form-control form-control-sm" name="price" type="text"
                               placeholder="price"/>
                    </div>

                </div>
                <button type="submit" className="btn btn-sm mt-3 btn-success">Update</button>

            </form>
        </div>


    );
};

export default UpdatePage;