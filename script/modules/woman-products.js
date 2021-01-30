$(document).ready(function(){
    var buildProductsGrid=(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                if(data.length > 0){
                  var cont="";

                  data.forEach((u)=>{
                    cont +=`<div id='product-element ' class='product-element col-xl-3 col-md-4 col-6 '>`
                    cont +=`<img src='${u.image}'>`
                    cont +=`<div class='productName'>${u.title}</div>`
                    cont +=`<div class='productPrice'>$${u.price}</div>`
                    cont +=`</div>`
                  })
                }else{
                  console.log("something went wrong")
                }

                document.getElementById("prod-cont-woman").innerHTML=cont
              })
    })

    buildProductsGrid()
})
