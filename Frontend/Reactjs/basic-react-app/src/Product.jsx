import "./Product.css" 
import Price from "./Price";
function Product({title,idx}){
    let oldPrice=["12,499","11,900","1599","1999"] ;
    let newPrice=["8999","7999","899","1799"];
    let Discription =[
        ["8,000 DPI","5Programmable buttons"],
         ["intuitive surface","designed for i pad"],
          ["Designed for i pad","intutitive Surface"],
          ["wairless","optical"]]
    // const list = features.map((feature)=> <li>{feature}</li> );
    // if(price >30000){
        // let style = {backgroundColor :price>30000 ? "blue" : ""};
    return(
        <div className="Product" >    
             <h4>{title}</h4>
             <p>{Discription [idx][0]}</p>
             <p>{Discription [idx][1]}</p>
             <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>

            {/* <h3>{title}</h3> */}
            {/* <h3>Price :{price}</h3> */}
            {/* <p>{list}</p> */}
            {/* {price> 30000 ? <p>discount of 5%</p>:null} */}
        
        </div>
    )
    // }
    // else{
    //     return(
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h3>Price :{price}</h3>
    //             {/* <p>{list}</p> */}
                
            
    //         </div>
    //     )

    // }
}
export default Product;

