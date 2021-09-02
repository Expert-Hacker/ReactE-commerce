import React, { Component, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import shop3 from '../../src/images/shop3.png';
import fashion2 from '../../src/images/shopboy1.png'
import "../../src/homePage.css";
import Header from "./Header";
function HomePage() {
  const [btnname,sertbtnname]=useState("")
  let clickedButton;
  // localStorage.removeItem("whichBtn")
  let viewDetails_btn;
  let whichCategpry;
  let details;
  let item_length;
  let row;
  let j;
  let rowCount;
  let index;
  let items=4;//items in each row
  let incre=0;
  let category;
  let url;
  let selected_val;
  let row1Incre;
  let row2Incre;
  let row3Incre;
  let row4Incre;
  let row5Incre;
  let fetchedData;
  const [initUrl, setUrl]=useState(null)
  
  /* ---------------------------- DYNAMIC CATEGORY ---------------------------- */
  const [urll,setUrll]=useState("https://fakestoreapi.com/products")

  function changeCategory()
  {
    console.log('jewl')
    selected_val =document.getElementById('select_id').value;

  if(selected_val=="all")
  { 
    document.getElementById('products_id').innerHTML="";
    setUrll(`https://fakestoreapi.com/products`);
  }
  else if(selected_val=="electronics")
  {
    document.getElementById('products_id').innerHTML="";
    setUrll("https://fakestoreapi.com/products/category/electronics");
  }
  else if(selected_val=="jewelery")
  {
    document.getElementById('products_id').innerHTML="";
    setUrll(`https://fakestoreapi.com/products/category/jewelery`);
  }
  else if(selected_val=="mensclothing")
  {
    document.getElementById('products_id').innerHTML="";
   setUrll(`https://fakestoreapi.com/products/category/men's clothing`);
  }
  else if(selected_val=="womensclothing")
  {
    document.getElementById('products_id').innerHTML="";
    setUrll(`https://fakestoreapi.com/products/category/women's clothing`);
  }
  }
 
  console.log(urll)
    fetch(urll).then(function (res){
      return res.json();
    
    }).then(function (data){
        console.log(data);
        console.log(typeof(data))
        
         fetchedData=JSON.stringify(data)
     localStorage.setItem('fetchedData',fetchedData)
        item_length=data.length;
        console.log(data.length);
        // row=item_length/items;
        // row=2;
        console.log(row); 
        // prepare();
        rowCount=0;
        if(data.length==6)
        {
          row=2;
          items=4;
          incre=2;
          row1Incre=4;
          row2Incre=6;
       
        }
        else if(data.length==20)
        {
          row=5;
          console.log("20 datas")
          items=4;
           row1Incre=4;
           row2Incre=8;
           row3Incre=12;
           row4Incre=16;
           row5Incre=20;
           console.log(row2Incre)
           console.log(row3Incre)
           console.log(row4Incre)

        }
        else if(data.length==4)
        {
          row=1;
          row1Incre=4;
        }

        for(let i=0;i<row;i++)
        {
          
          let products_id=document.getElementById('products_id')
          let div=document.createElement('div');
          let rowClass= `row${i+1}`;
          div.setAttribute('class',`row ${rowClass}`)
          div.setAttribute('id',`rowid${i+1}`)
          products_id.appendChild(div)//creating row named div tag
          if(rowClass=="row1")
          {
            for(j=0;j<row1Incre;j++)
            {
               
                // let item_div=document.createElement('div');
                // item_div.setAttribute('class','col-sm text-center shadow-lg my-3 mx-0 bg-white')
                
                // div.appendChild(item_div)

                // let img=document.createElement('img');
                // img.src=data[j].image;
                // img.alt="image";
                // img.style.height="300px";
                // img.style.width="300px";
                // // img.style.padding="10px"
                // img.setAttribute('class','')
                // item_div.appendChild(img)
                // let price=document.createElement('h4')
                // price.innerHTML=`Rs. ${data[j].price}`

                // let p= document.createElement('p')
                // p.setAttribute('class','mb-0 mt-2')
                // p.innerText=data[j].title;

                // item_div.appendChild(p)
                // item_div.appendChild(price)
                //  // creating button
                // viewDetails_btn=document.createElement('a');
                // //  viewDetails_btn.style.padding="2px 10px 2px 10px";
                //  viewDetails_btn.setAttribute('class','btn btn-primary mb-3')
                //  viewDetails_btn.href=`/products-details/${j+1}`
                 
                
                //  viewDetails_btn.innerHTML="VIEW DETAILS";
                // viewDetails_btn.setAttribute('id',`btn${j+1}`);                 
                //  item_div.appendChild(viewDetails_btn)
              
                /* -------------------------------- new code -------------------------------- */
                let item_div=document.createElement('div');
                item_div.setAttribute('class','col-sm text-center shadow-lg my-3 mx-0 bg-white')
                
                div.appendChild(item_div)

                let img=document.createElement('img');
                img.src=data[j].image;
                img.alt="image";
                img.style.height="300px";
                img.style.width="300px";
                // img.style.padding="10px"
                img.setAttribute('class','')
                item_div.appendChild(img)
                let price=document.createElement('h4')
                price.innerHTML=`Rs. ${data[j].price}`
                let p= document.createElement('p')
                p.setAttribute('class','mb-0 mt-2')
                p.innerText=data[j].title;

                item_div.appendChild(p)
                item_div.appendChild(price)
                 // creating button by using <a> tag - Method 1
                //  let viewDetails_btn=document.createElement('a')
                //  viewDetails_btn.setAttribute('class','btn btn-primary mb-3')
                //  viewDetails_btn.innerHTML="VIEW DETAILS";
                //   viewDetails_btn.setAttribute('id',`btn${j+1}`)
                //   viewDetails_btn.href=`/products-details/${j+1}`;
                //  item_div.appendChild(viewDetails_btn)

                // creating button by using <Link> tag Method 2
                let brnTag=document.createElement('p');
                let a = `<Link to='/product-details/${j+1}' className="btn btn-primary mb-3" id="btn${j+1}">view</Link>`;
                brnTag.innerHTML=a;
                item_div.appendChild(brnTag)
                
            }
          
          }
          else if(rowClass=="row2")
          {
            for(j=4;j<row2Incre;j++)
            {
               
                let item_div=document.createElement('div');
                item_div.setAttribute('class','col-sm text-center shadow-lg my-3 mx-0 bg-white')
                
                div.appendChild(item_div)

                let img=document.createElement('img');
                img.src=data[j].image;
                img.alt="image";
                img.style.height="300px";
                img.style.width="300px";
                // img.style.padding="10px"
                img.setAttribute('class','')
                item_div.appendChild(img)
                let price=document.createElement('h4')
                price.innerHTML=`Rs. ${data[j].price}`
                let p= document.createElement('p')
                p.setAttribute('class','mb-0 mt-2')
                p.innerText=data[j].title;

                item_div.appendChild(p)
                item_div.appendChild(price)
                 // creating button
                 let viewDetails_btn=document.createElement('a')
                 viewDetails_btn.setAttribute('class','btn btn-primary mb-3')
                 viewDetails_btn.innerHTML="VIEW DETAILS";
                  viewDetails_btn.setAttribute('id',`btn${j+1}`)
                  viewDetails_btn.href=`/products-details/${j+1}`
                 item_div.appendChild(viewDetails_btn)

                  //for button click
                  let btn1= document.getElementById('btn2').addEventListener('click',(e)=>{
                    e.preventDefault();
                   console.log(`button2:${e.target.id}`)
                   sertbtnname(e.target.id)
                 })
            }
          }
          if(rowClass=="row3")
          {
            for(j=8;j<12;j++)
            {
               
                let item_div=document.createElement('div');
                item_div.setAttribute('class','col-sm text-center shadow-lg my-3 mx-0 bg-white')
                
                div.appendChild(item_div)

                let img=document.createElement('img');
                img.src=data[j].image;
                img.alt="image";
                img.style.height="300px";
                img.style.width="300px";
                // img.style.padding="10px"
                img.setAttribute('class','')
                item_div.appendChild(img)
                let price=document.createElement('h4')
                price.innerHTML=`Rs. ${data[j].price}`
                let p= document.createElement('p')
                p.setAttribute('class','mb-0 mt-2')
                p.innerText=data[j].title;

                item_div.appendChild(p)
                item_div.appendChild(price)
                 // creating button
                 let viewDetails_btn=document.createElement('a')
                 viewDetails_btn.setAttribute('class','btn btn-primary mb-3')
                 viewDetails_btn.innerHTML="VIEW DETAILS";
                            viewDetails_btn.setAttribute('id',`btn${j+1}`)
                            viewDetails_btn.href=`/products-details/${j+1}`
                 item_div.appendChild(viewDetails_btn)
            }
          }
          else if(rowClass=="row4")
          {
            for(j=12;j<row4Incre;j++)
            {
               
                let item_div=document.createElement('div');
                item_div.setAttribute('class','col-sm text-center shadow-lg my-3 mx-0 bg-white')
                
                div.appendChild(item_div)

                let img=document.createElement('img');
                img.src=data[j].image;
                img.alt="image";
                img.style.height="300px";
                img.style.width="300px";
                // img.style.padding="10px"
                img.setAttribute('class','')
                item_div.appendChild(img)
                let price=document.createElement('h4')
                price.innerHTML=`Rs. ${data[j].price}`
                let p= document.createElement('p')
                p.setAttribute('class','mb-0 mt-2')
                p.innerText=data[j].title;

                item_div.appendChild(p)
                item_div.appendChild(price)
                 // creating button
                 let viewDetails_btn=document.createElement('a')
                 viewDetails_btn.setAttribute('class','btn btn-primary mb-3')
                 viewDetails_btn.innerHTML="VIEW DETAILS";
                            viewDetails_btn.setAttribute('id',`btn${j+1}`)
                            viewDetails_btn.href=`/products-details/${j+1}`
                 item_div.appendChild(viewDetails_btn)
            }   
          }
          else if(rowClass=="row5")
          {
            for(j=16;j<row5Incre;j++)
            {
               
                let item_div=document.createElement('div');
                item_div.setAttribute('class','col-sm text-center shadow-lg my-3 mx-0 bg-white')
                
                div.appendChild(item_div)

                let img=document.createElement('img');
                img.src=data[j].image;
                img.alt="image";
                img.style.height="300px";
                img.style.width="300px";
                // img.style.padding="10px"
                img.setAttribute('class','')
                item_div.appendChild(img)
                let price=document.createElement('h4')
                price.innerHTML=`Rs. ${data[j].price}`
                let p= document.createElement('p')
                p.setAttribute('class','mb-0 mt-2')
                p.innerText=data[j].title;

                item_div.appendChild(p)
                item_div.appendChild(price)

                // creating button
                let viewDetails_btn=document.createElement('a')
                viewDetails_btn.setAttribute('class','btn btn-primary mb-3')
                viewDetails_btn.innerHTML="VIEW DETAILS";
                viewDetails_btn.setAttribute('id',`btn${j+1}`)    
                viewDetails_btn.href=`/products-details/${j+1}`         
                item_div.appendChild(viewDetails_btn)
            }
          }
        } 
        
    }) 
   
    // window.onload = function() {

    //   setInterval(
        function prepare()
        {
          if(urll=="https://fakestoreapi.com/products")
          {
            
            let btn1= document.getElementById('btn1');
            let btn2= document.getElementById('btn2');
            let btn3= document.getElementById('btn3');
            let btn4= document.getElementById('btn4');
            let btn5= document.getElementById('btn5');
            let btn6= document.getElementById('btn6');
            let btn7= document.getElementById('btn7');
            let btn8= document.getElementById('btn8');
            let btn9= document.getElementById('btn9');
            let btn10= document.getElementById('btn10');
            let btn11= document.getElementById('btn11');
            let btn12= document.getElementById('btn12');
            let btn13= document.getElementById('btn13');
            let btn14= document.getElementById('btn14');
            let btn15= document.getElementById('btn15');
            let btn16= document.getElementById('btn16');
            let btn17= document.getElementById('btn17');
            let btn18= document.getElementById('btn18');
            // let btn19= document.getElementById('btn19');
            // let btn20= document.getElementById('btn20');

            btn1.addEventListener('click',()=>{
              // console.log(`btn1 is:clicked${?e.target.id}`)
              // localStorage.removeItem("whichBtn")
              console.log("btn1 clicked")
              localStorage.setItem('whichBtn',"btn1")
            })
            btn2.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              // localStorage.removeItem("whichBtn")
              localStorage.setItem('whichBtn',"btn2")
            })
            btn3.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn3")
            })
            btn4.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn4")
            })
            btn5.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn5")
            })
            btn6.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn6")
            })
            btn7.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn7")
            })
            btn8.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn8")
            })
            btn9.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn8")
            })
            btn10.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn10")
            })
            btn11.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn11")
            })
            btn12.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn12")
            })
            btn13.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn13") 
            })
            btn14.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn14")
            })
            btn15.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn15")
            })
            btn16.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn16")
            })
            btn17.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn17")
            })
            btn18.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn18")
            })
            // btn19.addEventListener('click',()=>{
            //   console.log(`btn1 is:clicked`)
            //   localStorage.setItem('whichBtn',"btn19")
            // })
            // btn20.addEventListener('click',()=>{
            //   console.log(`btn1 is:clicked`)
            //   localStorage.setItem('whichBtn',"btn20")
            // })
          }
          else if(selected_val=="electronics")
          {
            console.log('keertyhn')
            let btn1= document.getElementById('btn1');
            let btn2= document.getElementById('btn2');
            let btn3= document.getElementById('btn3');
            let btn4= document.getElementById('btn4');
            let btn5= document.getElementById('btn5');
            let btn6= document.getElementById('btn6');

            btn1.addEventListener('click',(e)=>{
              console.log(`btn1 is:clicked${e.target.id}`)
              localStorage.setItem('whichBtn',"btn1")
            })
            btn2.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn2")
            })
            btn3.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn3")
            })
            btn4.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn4")
            })
            btn5.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn5")
            })
            btn6.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn6")
            })
          }
          else if(selected_val=="jewelery")
          {
            let btn1= document.getElementById('btn1');
            let btn2= document.getElementById('btn2');
            let btn3= document.getElementById('btn3');
            let btn4= document.getElementById('btn4');

            btn1.addEventListener('click',(e)=>{
              console.log(`btn1 is:clicked${e.target.id}`)
              localStorage.setItem('whichBtn',"btn1")
            })
            btn2.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn2")
            })
            btn3.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn3")
            })
            btn4.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn4")
            })
          }
          else if(selected_val=="mensclothing")
          {
            let btn1= document.getElementById('btn1');
            let btn2= document.getElementById('btn2');
            let btn3= document.getElementById('btn3');
            let btn4= document.getElementById('btn4');

            btn1.addEventListener('click',(e)=>{
              console.log(`btn1 is:clicked${e.target.id}`)
              localStorage.setItem('whichBtn',"btn1")
            })
            btn2.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn2")
            })
            btn3.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn3")
            })
            btn4.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn4")
            })

          }
          else if(selected_val=="womensclothing")
          {
            let btn1= document.getElementById('btn1');
            let btn2= document.getElementById('btn2');
            let btn3= document.getElementById('btn3');
            let btn4= document.getElementById('btn4');
            let btn5= document.getElementById('btn5');
            let btn6= document.getElementById('btn6');

            btn1.addEventListener('click',(e)=>{
              console.log(`btn1 is:clicked${e.target.id}`)
              localStorage.setItem('whichBtn',"btn1")
            })
            btn2.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn2")
            })
            btn3.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn3")
            })
            btn4.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn4")
            })
            btn5.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn5")
            })
            btn6.addEventListener('click',()=>{
              console.log(`btn1 is:clicked`)
              localStorage.setItem('whichBtn',"btn6")
            })
          }
        
          // btn1.addEventListener('click',(e)=>{
          // console.log(`btn1 is:clicked`)
          // console.log(e.target.id)
          // })
         
      }


 return (<>
 {/* <Header/> */}
    <div className="home_cont ">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Buy any product with 34% Offer</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
        <div className="imageSec">
          <div className="container container_top">
            <div className="left">
              
                  <h1 className="display-2 fw-bold">SHOP69 EXCLUSIVE PRODUCTS!</h1>
                  <a href="#container_id">EXPLORE NOW!</a>
                  <h5 className="mt-2 text-secondary">Happiness is not in money, but in shopping</h5>
            </div> 
            <div className="right">
                  <img src={shop3}  alt="aaa" />
                  {/* <h1 className="display-2">SHOP69 EXCLUSIVE PRODUCTS!</h1> */}
            </div>
          </div>
        </div>
       
        <div className="explore">
          {/* <button>EXPLORE NOW 🎊</button> */}
        </div>
        <div class="scroll-downs">
  <div class="mousey">
    <div class="scroller"></div>
  </div>
</div>
        <div class="container" id="container_id">
          <div className="controls">
              <h1 className="text-center my-4 products_tit">PRODUCTS</h1>
              <div className="labels_select">
              <label>Category:</label>
              <select onChange={changeCategory} name="select" id="select_id">
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="mensclothing">Men's clothing</option>
              <option value="womensclothing">Women's clothing</option>
              </select>
              </div>
          </div>
          
          <hr />
          <div id="products_id">

          </div>
          
              {/* <div class="row">
                  <div class="col-sm bg-danger text-center">
                      <img src={initUrl} alt="" height="300" width="300" className="text-center" />
                  </div>
                  <div class="col-sm bg-danger text-center">
                      <img src={initUrl} alt="" height="300" width="300" className="text-center"  />
                  </div>
                  <div class="col-sm bg-danger text-center">
                      <img src={initUrl} alt="" height="300" width="300" className="text-center"/>
                  </div>
                  <div class="col-sm bg-danger text-center">
                      <img src={initUrl} alt="" height="300" width="300" className="text-center"/>
                  </div>   
              </div> */}
             

        </div>

        <div className="backtotop">
                <a href="#container_id"><i class="fas fa-2x fa-arrow-up"></i></a>
            </div>
         
    </div>
    </>
  );
}
export default HomePage;
