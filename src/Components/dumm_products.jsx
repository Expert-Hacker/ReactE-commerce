import React, { useEffect, useState } from "react";
import "../../src/ProductDetails.css";
import Header from "./Header";
import App from "../App";
function ProductDetails(props) {
  const { setText } = props;
  const[flag,setFlag]=useState(true)
  const[badgeNo,setBadgeno]=useState(10)
 const[btnName,setname]=useState("ADD TO CART")
  const[state,setstate]=useState({data:""})
const[url,setUrll]=useState("")
const[row,setRow]=useState("");
const[item,setItem]=useState(0)
let btnFlag=false;
  let id;
  let data;
  let category;
  
  let length;
  let retrivedData;
  const [title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const[cid,setid]=useState(null)

  function getData() {
    retrivedData = JSON.parse(localStorage.getItem("fetchedData"));
    console.log(retrivedData);
    setimage(retrivedData[0].image);
    id = window.location.href.slice(39);

    //setting image URL
    setimage(retrivedData[id - 1].image);
    //setting Item title
    setTitle(retrivedData[id - 1].title);
    //setting price
    setPrice(retrivedData[id - 1].price);
    //set decsroption
    setDesc(retrivedData[id - 1].description);
    setid(retrivedData[id-1].id);
    /* --------------------------- RELATED ITEMS CODE --------------------------- */
    category = retrivedData[id - 1].category;

    if (category == "electronics") 
    { 
       setRow(1);
       setItem(6);
      setUrll("https://fakestoreapi.com/products/category/electronics");
    } else if (category == "jewelery") 
    {
        setRow(1)
        setItem(4)
      setUrll(`https://fakestoreapi.com/products/category/jewelery`);
    } 
    else if (category == "men's clothing")
    { 
        setItem(3)
        setRow(1)
      setUrll(`https://fakestoreapi.com/products/category/men's clothing`);
    }
    else if (category == "women's clothing") 
    {
        setItem(6)
        setRow(1)
      setUrll(`https://fakestoreapi.com/products/category/women's clothing`);
    }
  }
/* ------------------------------- USE EFFECT ------------------------------- */
  useEffect(() => {
    getData();
  }, []);
/* ------------------------------- USE EFFECT ------------------------------- */
  fetch(url).then(function(res){
    return res.json();
}).then(function(data){
    console.log(data)
    console.log("row is:"+row)
    //creating rows
   
    for(let i=1;i<=row;i++)
    {
        let relaetd_items_id=document.getElementById("relaetd_items_id");
        console.log("inside for")
        let div1=document.createElement('div');
        div1.setAttribute('class','row');
        
        relaetd_items_id.appendChild(div1)
        for(let j=0;j<item;j++)
        {   
            console.log("item"+item)
            //creating image
            let img=document.createElement('img');
            img.setAttribute('id',`img${id-1}`)
            // img.src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            img.style.height="300px";
            img.style.width="300px";
            img.src=data[j].image;
            let dispkay_image=data[j].image;
            
            if(image!=dispkay_image)
            {
                let subdiv=document.createElement('div');
                subdiv.setAttribute('class','col-sm')
                div1.appendChild(subdiv)
                subdiv.appendChild(img) 
                 //creating price
                let price=document.createElement('h4')
                price.innerHTML=data[j].price;
                subdiv.appendChild(price);
                //creating title
                let p=document.createElement('p');
                p.innerHTML=data[j].title;
                subdiv.appendChild(p)
                //creating button
                // let a=document.createElement('a');
                // a.setAttribute('class','btn btn-primary mb-5');
                // a.innerHTML="VIEW DETAILS"
                // // i.href=`/product-details/${j+1}`;
                // // a.href=`/products-details/${j+1}`
                // subdiv.appendChild(a)
               
            } 
        }
        console.log("loaded..")
        document.getElementById('loading_div_id').style.display='none';
    }
   

})


  return (
    <>
    {/* {flag ? <Header/> : ""} */}
      <div className="container1" id="cont11">
        <div className="loading_div d-flex position-absolute" >
            <h1 className="bg-warning py-2 px-5 rounded" id="loading_div_id"><i class="fas rotate_icon fa-sync"></i> Loading...</h1>
        </div>
        <div className="left1 text-center" id="left1_id">
          <img className="product_img"
            src={image}
            style={{ height: "500px", width: "500px" }}
            className="img-fluid "
            alt="image" id={id-1}
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
                <i class="fas fa-angle-double-right"></i> {`${title}`}
              </h4>
            </div>
            <div className="price d-flex justify-content-between">
              <h2>{`Rs.${price}`}</h2>
              <p className="m-auto saved_price">{`You saved ${price - 7}`}</p>
            </div>
            <div className="desc mt-2">
              <p>{desc}</p>
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
        className="btn btn-success" type="button" id="cartBtn"
        onClick={() => {
        
        if(btnFlag==false)
        {
          setText((prev) => prev + 1);
          setname('ADDED TO CART')
          btnFlag=true;
        }
       
         console.log(btnName)
        
        }}
      >
        {btnName}
      </button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="relaetd_items text-center container" id="relaetd_items_id">
          <h1 className="related_item mb-2">Related Items</h1>
          <hr />
          <div className="backtotop">
                <a href="#cont11"><i class="fas fa-2x fa-arrow-up"></i></a>
            </div>
      </div>
    </>
  );
}

export default ProductDetails;

