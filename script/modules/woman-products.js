$(document).ready(function(){
    var loadProductsGrid=(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                if(data.length > 0){
                  var cont="";

                  data.forEach((u)=>{
                    cont +=`<div id='product-element ' class='product-element col-xl-3 col-lg-4 col-6 '>`
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
              .then(()=>{
                $("#product-grid").css("display","block")
                $("#productsLoader").css("display","none")
              })
    })

    var initNavbarToggler=(()=>{
      $("#menu-toggler").click(function(){
        $("#menu-cont").slideToggle()
      })
    })

    var initFiltersToggler=(()=>{
      console.log("yo!")

      $("#filterToggler-btn , #closeFilters-btn").click(function(){
        $("#product-filters").fadeToggle(200) 
      })
    })

    initFiltersToggler()
    initNavbarToggler()
    loadProductsGrid()
})
