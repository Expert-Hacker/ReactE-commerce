import React from 'react'
import { useState, useEffect } from 'react'
import '../../src/cart-details.css'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
function CartDetails(props) {
  let ele1;
  let {cno}=props;
  const[ele, setEle]=useState('');
  let[qty, setQty]=useState(1)
  // let [totalPrice.setTotalPrice]=useState()
  let[data,setData]=useState([])

const incrementQty = (index) =>{
    setQty(qty++)
    console.log(index)
}
const decrementQty = (index) =>{
  setQty(qty--)
  console.log(index)
}

  useEffect(() => {
    try
    {
      let id=props.id
      data=JSON.parse(localStorage.getItem('cartDetails'))
      setData(data)
      // setEle(ele1)
    }
    catch(err)
    {
      console.log("Something went wrong while fetching Cart items")
    }
 
  }, [ele])

  if(JSON.parse(localStorage.getItem('cartDetails')).length>=1)
  {  
  return (
    <div>
       <div className="desk_cont overflow-auto shadow-sm">
      {data.map((item,index)=>(
      <div className="cart_cont   desktop text-dark" key={index}>
            <div className="innerDiv row m-auto  mt-4  d-flex  container">
              {/* <div className="split1"> */}
                  <div className="d-flex justify-content-around align-items-center flex-column col-sm d-flex id">
                      <label htmlFor="id" className="text-danger fw-bold m-auto">ID</label>
                      <p className="m-auto" id="id">{item.id}</p>
                  </div>
                  <div className="d-flex  col-sm  thumbnail">
                      <img src={item.image} className="mt-1 mb-1" alt="image" height="100px" width="80px"/>
                  </div>
                  <div className="d-flex align-items-center flex-column col-sm  quantity">
                      <label htmlFor="title" className="text-danger fw-bold m-auto">Title</label>
                      <p className="m-auto" id="title">{item.title}</p>
                  </div>
                  <div className="d-flex align-items-center col-sm  flex-column unitPrice">
                      <label htmlFor="unitprice" className="text-danger fw-bold m-auto">Unit Price</label>
                      <p className="m-auto unitprice" id="unitprice">Rs. {item.price}</p>
                  </div>
                  <div className="d-flex align-items-center col-sm  flex-column unitPrice">
                      <label htmlFor="unitprice" className="text-danger fw-bold m-auto">Quantity</label>
                      <div className="btns_mob m-auto d-flex flex-row mx-4">
                              <button className="btn btn-outline-primary mx-1" onClick={()=>decrementQty(index)}>-</button>
                              <button className="btn disabled btn-dark mx-1">{qty}</button>
                              <button className="btn btn-outline-primary mx-1" onClick={()=>incrementQty(index)}>+</button>
                      </div>
                  </div>
                  <div className="d-flex align-items-center flex-column col-sm  total">
                      <label htmlFor="total" className="text-danger fw-bold m-auto">Total</label>
                      <p className="m-auto total" id="total">N/A</p>
                  </div>
                  <div className="d-flex align-items-center  col-sm  rmBtn">
                  <Tooltip title="Delete item">
                      <i className="far fa-2x m-auto fa-trash-alt" id={index} onClick={(btn)=>{
                        btn.preventDefault();
                        console.log('index'+index)
                      let arr= JSON.parse(localStorage.getItem('cartDetails'))
                      if(JSON.parse(localStorage.getItem('cartDetails')).length>1)
                        {
                          ele1 = arr.splice(index-1,1)
                        }
                        else
                        {
                          ele1 = arr.splice(index+1,1)
                        } 
                      console.log(ele1)
                      // arr.splice(btn.target.id,1)
                      localStorage.setItem('cartDetails',JSON.stringify(ele1))
                      cno(JSON.parse(localStorage.getItem('cartDetails')).length)
                        // setEle(ele1)
                      }}></i></Tooltip>
                      
                  </div>
                  <hr className="text-center"/>
                  </div>
                  
            </div>
       ))
      }
      </div>
      <button className="btn btn-warning checkoutBtn w-25">CHECKOUT</button>
       {/* ------------------------------- FOR MOBILE -------------------------------  */}
       <div className="mob_cont">
       {
         JSON.parse(localStorage.getItem('cartDetails')).map((item,index)=>(
        
           <div className="main_cont overflow-auto  bg-white"  key={index}>
              <div className="container justify-content-between d-flex ">
                  <div className="img_mob mr-2">
                      <img src={item.image} className="mt-1 mb-1" alt="image" height="100px" width="80px"/>
                  </div>
                  <div className="tit_pr_tot">
                      <div className="tit">
                          <p className="m-0 fw-bold" id="title">{item.title}</p>
                      </div>
                      <div className="d-flex flex-row justify-content-between ">
                          <p className="pri">Rs. {item.price}</p>
                              <Tooltip title="Delete">
                              <i className="far h4 m-auto fa-trash-alt" onClick={(btn)=>{
                                btn.preventDefault();
                                console.log('index'+index)
                              let arr= JSON.parse(localStorage.getItem('cartDetails'))
                              if(JSON.parse(localStorage.getItem('cartDetails')).length>1)
                                {
                                  ele1 = arr.splice(index-1,1)
                                }
                                else
                                {
                                  ele1 = arr.splice(index+1,1)
                                } 
                              console.log(ele1)
                              // arr.splice(btn.target.id,1)
                              localStorage.setItem('cartDetails',JSON.stringify(ele1))
                              cno(JSON.parse(localStorage.getItem('cartDetails')).length)
                                // setEle(ele1)
                              
                              }}/>
                            </Tooltip>
                          </div>
                      <div className="tot d-flex justify-content-between">
                          <p className="tota" id="total">Total: 1200</p>
                          <div className="btns_mob mx-4">
                              <button className="btn btn-outline-primary mx-1" onClick={()=>decrementQty(index)}>-</button>
                              <button className="btn disabled btn-primary mx-1">{qty}</button>
                              <button className="btn btn-outline-primary mx-1" onClick={()=>incrementQty(index)}>+</button>
                          </div>
                          <div className="rmBtns">     
                          </div>
                      </div>
                      <hr />
                  </div>
                  
              </div>
           
           </div>
         ))
       }
       </div>
     </div> 
    
  
      
  )
  
}

else
{
  return (
    <div className="no_items">
      <div className="no_items_bg text-center">
          <h2 className="display-5 fw-bold">Cart is Empty</h2>
          <i className="fas fa-5x fa-cat"></i>
        
      </div>
    </div>
  )
}
}

export default CartDetails
