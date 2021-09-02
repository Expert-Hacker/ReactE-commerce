import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "../../src/homePage.css";
import shop3 from "../../src/images/shop3.png";
import { Offline, Online, Detector } from "react-detect-offline";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
function HomePage() {
  const[category,setcategory]=useState("https://fakestoreapi.com/products");
  const[items, setItems]=useState({myItems:[]})
  const[error,showError]=useState(false);
  const[loading, setLoading]=useState(true)
  const [progress, setProgress] = React.useState(0);
  let timeTakentoload;
  let poor;
  useEffect(() => {
    function fetchData()
    {
        try {
          

          fetch(category).then(function (res){
            let loadedTime=  new Date().getTime();
            return res.json();
          }).then(function (data){
          setItems({myItems:data});
          setLoading(false)

          })
        } catch (error) {
           showError(true)
        }
    }
  fetchData()
  }, [category])

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

    const classes = useStyles();
  
  function changeCategory(e)
  {
      let selelcted_val= document.getElementById('select_id').value;
      if(selelcted_val=="all")
  { 

    setcategory(`https://fakestoreapi.com/products`);
  }
  else if(selelcted_val=="electronics")
  {
   console.log(selelcted_val)
   setcategory("https://fakestoreapi.com/products/category/electronics");
  }
  else if(selelcted_val=="jewelery")
  {
   
  setcategory(`https://fakestoreapi.com/products/category/jewelery`);
  }
  else if(selelcted_val=="mensclothing")
  {

    setcategory(`https://fakestoreapi.com/products/category/men's clothing`);
  }
  else if(selelcted_val=="womensclothing")
  {
    
    setcategory(`https://fakestoreapi.com/products/category/women's clothing`);
  }
  }
  
  


  return (
          <>
           
          {error ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>OOPS..Something went wrong</strong>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>:""}
            <Detector
              render={({ online }) => (
              <div >
                <div className="className="position-sticky>
                    {loading&&online ? <LinearProgress color="secondary"  /> : ""}
                </div>
               
                <div className={online ? "d-none" : "bg-danger alert alert-dismissible fade show"} >
                    <strong className=" text-white text-center" id="networkStatus">You are currently {online ? "" : "offline"}</strong>
                    {Offline ? <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button> : ""}
                </div>
              </div>
            )}
          />
         
      <div className="home_cont ">
          <div className="imageSec">
            <div className="container container_top">
              <div className="left">
                <h1 className="display-2 fw-bold">SHOP69 EXCLUSIVE PRODUCTS!</h1>
                <a href="#container_id">EXPLORE NOW!</a>
                <h5 className="mt-2 text-secondary">Happiness is not in money, but in shopping</h5>
              </div>
              <div className="right">
                <img src={shop3} alt="aaa" />
                {/* <h1 className="display-2">SHOP69 EXCLUSIVE PRODUCTS!</h1> */}
              </div>
            </div>
          </div>

        
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
          <div className="container" id="container_id">
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
          <div className="row ">
           {
              items.myItems.map((itm,index)=>( 
                    <div className="col-sm  justify-content-between position-relative d-flex flex-column align-items-center text-center">
                        <img src={itm.image} id={`thummbnail_id${itm.id}`} alt="" height="300" width="300" className="text-center thumbnail" />
                         
                        <h4>{itm.title}</h4>
                        <p>Rs.{itm.price}</p>
                        <li className="btn  mb-5 btn-primary"><Link className="text-white" to={`/products-details/${itm.id}`}>VIEW DETAILS</Link></li>
                    </div>
              ))   
           }
            </div>
        </div>

        <div className="backtotop">
          <a href="#container_id">
            <i className="fas fa-2x fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;
