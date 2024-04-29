
import React, { useState } from "react"
import ProductData from "./ProductData.jsx"
import { AiFillCloseCircle } from "react-icons/ai";


function Products(){
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);
    const detailPage = (Products) => 
    {
        setDetail([{...Products}])
        setClose(true)
    }
  return (
    <>
    {
        close ? 
        <div className="detail_container">
    <div className="detail_contant">
    <button className="close" onClick={() => setClose(false)}><AiFillCloseCircle /></button>
    {
        detail.map((x) => 
        {
           return(
            <>
                <div className="detail_info">
                <div className="img-box">
                    <img src={x.img} alt={x.Title}></img>
                </div>
                <div className="product_detail">
                <h2>{x.Title}</h2>
                <h3>${x.price}</h3>
                <p>{x.Des}</p>
                <button>Add To Cart</button>

                </div>
                    
                </div>
            </>

           ) 
        }
        
        
        )
    }

    </div>
    </div> : null
    }
    
    <div className="container">
    {
        ProductData.map((curElm) => 
        { 
            return(
                <>
                    <div className="box">
                    <div className="contant">
                    <div className="img-box">
                    <img src={curElm.img} alt={curElm.Title}></img>
                    </div>
                    <div className="deatil">
                    <div className="info">
                    <h3>{curElm.Title}</h3>
                    <p>${curElm.price}</p>
                    </div>
                    <button onClick={() => detailPage (curElm)}>View</button>

                    </div>

                    </div>

                    </div>
                </>
            )
        })};

    </div>
    </>
  )
  
}

export default Products
