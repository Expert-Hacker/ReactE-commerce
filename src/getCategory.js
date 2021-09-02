function getcategory(cate)
{
    let res;
 
    if(cate=="electronics")
    {
 
     res="https://fakestoreapi.com/products/category/electronics";
    }
    else if(cate=="jewelery")
    {
     
    res=`https://fakestoreapi.com/products/category/jewelery`;
    }
    else if(cate=="mensclothing")
    {
  
      res=`https://fakestoreapi.com/products/category/men's clothing`;
    }
    else if(cate=="womensclothing")
    {
      
      res=`https://fakestoreapi.com/products/category/women's clothing`;
    }
    return res
    
}
