import React from 'react'
import { useEffect,useState } from 'react';

function MainPage() {

    const url = "https://api.escuelajs.co/api/v1/categories/4/products";  
    const [shoedata,setShoedata] = useState([]);

    const getData = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setShoedata(data);
    }

    useEffect (() => {
        getData();
    })

  return (
    <div className='mainpage-div'>
        {
            shoedata.map((dataObj) => {
                return(
                    <div className='prod-list-div'>
                            <div>
                                <img style={{width:200,height:200}} src={dataObj.images[0]}/>
                                <div><h3>{dataObj.title}</h3></div>
                                <div>${dataObj.price}</div>
                                
                                <button className='addtocartbtn' value={dataObj.id}>Add to Cart</button>
                            </div>
                        </div>
                )
            })
        }
    </div>
  )
}

export default MainPage