import React,{useEffect, useState} from 'react';
import "../../src/ProductDetails.css";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
function ProductDetails(props) {
  let data;
  let url;
  let category;
  let { setTxt } = props;
 
  const {abc} = props;

  const [initData,setData]=useState("");
  const[display,setDisplay]=useState(false)
  
  const[error,showError]=useState(false);
  const[initData1,setInitData1]=useState({products:[]})
  const[getcate,setGetcate]=useState("")
  const[btnName,setName]=useState("ADD TO CART")
  var baseUrl = (window.location).href;
  let getId = baseUrl.substring(baseUrl.lastIndexOf('/') + 1);
  
  


  useEffect(() => {
    async function  fetchOneData()
    {
      try
      {
        await fetch(`https://fakestoreapi.com/products/${getId}`).then(function (res){
          return res.json();
        }).then(function (data){
          setData(data);
          setGetcate(data.category)
          fetchRestData(data.category)
          setDisplay(true)
         
        })
        console.log(initData)
      }
      catch(err)
      {
        console.log("something went wrong")
        showError(true)
      }
    }   
  fetchOneData() 

  async function fetchRestData(getcate)
  {
    try {
       category=getcate;
       console.log(`category 2nd: ${category}`)
    if(category=="electronics")
    {
 
     url="https://fakestoreapi.com/products/category/electronics";
    }
    else if(category=="jewelery")
    {
     
    url=`https://fakestoreapi.com/products/category/jewelery`;
    }
    else if(category=="men's clothing")
    {
  
      url=`https://fakestoreapi.com/products/category/men's clothing`;
    }
    else if(category=="women's clothing")
    {
      
      url=`https://fakestoreapi.com/products/category/women's clothing`;
    }
        await fetch(url).then(function(res){
          console.log(`goy url; ${url}`)
          return res.json();
        }).then(function (data1){
          setInitData1({products:data1})
        })
        
    } catch (error) {
      console.log("something went wrong 2nd")
      showError(true)
    }
  }

  }, [initData])


    return (
    
      <div>
          {error ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>OOPS..Something went wrong</strong>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>:""}
          {display ?
         <div>
             <div className="container1" id="cont11">
       
        <div className="left1 text-center" id="left1_id">
          <img className="product_img"
            src={initData.image}
            style={{ height: "500px", width: "500px" }}
            className="img-fluid "
            alt="image" id={getId}
          />
        </div>
        <div className="right1">
          <div className="details mx-5 ">
            <div className="title">
            <div class="scroll-downs">
      <div class="mousey">
        <div class="scroller"></div>
      </div>
    </div>
              <h4 className="item_title my-5 fw-bold " id="item_title_id">
                <i class="fas fa-angle-double-right"></i> {`${initData.title}`}
              </h4>
            </div>
            <div className="price d-flex justify-content-between">
              <h2>{`Rs.${initData.price}`}</h2>
              <p className="m-auto saved_price">{`You saved ${initData.price - 7}`}</p>
            </div>
            <div className="desc mt-2">
              <p>{initData.description}</p>
            </div>
            <div className="ratings d-flex ">
              <p className="">Ratings: </p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
            </div>
            <div className="btn">
            <button
        className="btn btn-success" type="button" id="cartBtn" onClick={()=>{
          // setTxt((prev) => prev + 1);
          
          console.log("cart btn clicked")
          
          // if(localStorage.getItem('cartDetails')==null)
          if(JSON.parse(localStorage.getItem('cartDetails')==null))
        {
          localStorage.setItem('cartDetails',JSON.stringify([]))
        }
        let old_data=JSON.parse(localStorage.getItem('cartDetails'))
        old_data.push(initData);
        localStorage.setItem('cartDetails',JSON.stringify(old_data))

        setTxt(JSON.parse(localStorage.getItem('cartDetails')).length)
          abc(baseUrl.substring(baseUrl.lastIndexOf('/') + 1))
        }}>{btnName}</button>
            </div>
          </div>
        </div>
      </div>
         </div> : ""}
       { display? 
         <div className="relaetd_items text-center container" id="relaetd_items_id">
          <h1 className="related_item mb-2">Related Items</h1>
          <hr />
            <div className="row desktop">
             { 
              initData1.products.map((item,index)=>
              {
                if(getId!=item.id)
                {
                  return <div className="col-sm  justify-content-between position-relative d-flex flex-column align-items-center text-center">
                
                    <img src={item.image} id={`thummbnail_id${item.id}`} alt="" height="300" width="300" className="text-center thumbnail" />
                  <h4>{item.title}</h4>
                  <p>Rs.{item.price}</p>
                  <li className="btn  mb-5 btn-primary"><Link className="text-white" to={`/products-details/${item.id}`}>VIEW DETAILS</Link></li>
                  </div>
                }
              } 
            )}
            </div>
       
            <div className="backtotop">
                <a href="#cont11"><i class="fas fa-2x fa-arrow-up"></i></a>
            </div>
          </div>
      : <div className="spinner_cont"><CircularProgress className="spinnerEle" color="secondary" /></div>}
    </div>
            
     )
    
    
  


}

export default ProductDetails
