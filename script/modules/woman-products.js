$(document).ready(function(){
    var loadProductsGrid=(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            //builds products grid
            .then(data=>{
                if(data.length > 0){
                  var cont="";
                  console.log(data)
                  console.log(data[0].id)
                  data.forEach((u)=>{
                    cont +=`<div id='product-element ' class='product-element col-xl-3 col-lg-4 col-6 ' data-id="${u.id}">`
                    cont +=`<img src='${u.image}'>`
                    cont +=`<div class='productName'>${u.title}</div>`
                    cont +=`<div class='productPrice'>$${u.price}</div>`
                    cont +=`</div>`
                  })
                }else{
                  console.log("something went wrong")
                }
                document.getElementById("prod-cont-woman").innerHTML=cont
                //builds product cards        
                $(".product-element , #close-card-btn , #cards-dark-bg").click(function(){
                  $("#productCard").fadeToggle()
                  $("body").toggleClass('modal-open');
                  
                })          

                $(".product-element").click(function(){
                  var dataId = $(this).attr("data-id");

                  $(".product-image").html(`<img src="${data[dataId-1].image}">`)
                  $(".product-category").html(data[dataId-1].category)
                  $(".product-name").html(data[dataId-1].title)
                  $(".product-price").html("$"+data[dataId-1].price)
                  $(".product-description").html(data[dataId-1].description)
                })                  
              })
              //turns off loader after request is done 
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
      $("#filterToggler-btn , #closeFilters-btn").click(function(){
        $("#product-filters").fadeToggle(200) 
      })
    })

    initFiltersToggler()
    initNavbarToggler()
    loadProductsGrid()
})
