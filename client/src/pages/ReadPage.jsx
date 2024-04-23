import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loader from "../Loader/loader.jsx";
import { Link } from "react-router-dom";

const ReadPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get("/api/Read");
            setData(res.data.row);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error here
        }
    };

    const deleteData = async (id) => {
        try {
            await axios.get(`/api/Delete/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting data:", error);
            // Handle error here
        }
    };

    return (
        <div className="container mt-5">
            <Link className="btn btn-sm btn-success" to="/create">Create</Link>
            <div className="row mt-3">
                {data.length === 0 ? (
                    <Loader />
                ) : (
                    data.map((item, i) => (
                        <div key={i} className="col-md-3 mb-3">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.food_image} alt={item.food_name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.food_name}</h5>
                                    <p className="card-text">Food Code: {item.food_code}</p>
                                    <p className="card-text">Food Category: {item.food_category}</p>
                                    <p className="card-text">Qty: {item.qty}</p>
                                    <p className="card-text">Price: {item.price}</p>
                                </div>
                                <div className="card-body">
                                    <button onClick={() => deleteData(item._id)} className="card-link btn btn-danger btn-sm">Delete</button>
                                    <Link className="card-link btn btn-info btn-sm ml-2" to={`/update/${item._id}`}>Edit</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ReadPage;
