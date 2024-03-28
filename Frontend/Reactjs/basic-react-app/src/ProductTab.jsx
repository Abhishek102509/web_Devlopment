import Product from "./Product.jsx"


function ProductTab(){
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "Center",
        alignItems : "Center"
    }
    // let features=["aman","ram","rahul"]
    // <li>aman</li>,<li>ram</li>,<li>rahul</li>
//     let features2={a : "first",b:"Second"}

    return(
        <div style ={styles}>
         
        <Product title="Logitech Mx Master" idx={0}/>
        <Product title="Apple Pencill (5th Gen)"idx={1}/>
        <Product title= "Zebronics Zeb-Transformer"idx={2} />
        <Product title="Watch"idx ={3} />
        </div>
    )
}
export default ProductTab;