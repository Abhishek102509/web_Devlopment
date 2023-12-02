// ek rectangle banao and jab mouse center par ho to rectangle center par ho,jab mouse left jaana shuru ho rectangle bhi left jana shuru hojaaye,par jaise jaise mouse left jaaye rectangle ki speed left me jaate jaate slow hojaaye same happens with right side as well

// var rect =document.querySelector("#rect");
// rect.addEventListener("mousemove",(detail)=>{
//     console.log(detail);
// });
window.addEventListener("mousemove",function(details){
    // console.log(details.clientX );
    gsap.to('#rect',{
        left: details.clientX + "px",
     ease: Power3 
    })
});