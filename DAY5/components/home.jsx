import React from "react";
import aj from '../src/assets/ajyajaya.jpg'
import '../components/navbar.css'
const Jayaanth = (props) => {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>

                <h1 style={{
                    width: "300px",
                    border: "15px solid black",
                    padding: "100px",
                    margin: "20px",
                    // marginLeft:"350px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center"
                }}>This is my Home page {props.Name}</h1>
            </div>
            <img src={aj} alt="" />
        </>
    )
}
export default Jayaanth;