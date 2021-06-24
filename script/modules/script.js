$(document).ready(function(){

    const loadProductsStripes=(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                const getManProducts=data.filter(e=>e.category==="electronics")
                const getWomanProducts=data.filter(e=>e.category==="women's clothing" )
                console.log(getManProducts,getWomanProducts)

                const buildProductStripes=((products,container)=>{
                  if(data.length > 0){
                    var cont="";
  
                    products.forEach((u)=>{
                      cont +=`<div id='product-element ' class='product-element ' data-id="${u.id}">`
                      cont +=`<img src='${u.image}'>`
                      cont +=`<div class='productName'>${u.title}</div>`
                      cont +=`<div class='productPrice'>$${u.price}</div>`
                      cont +=`</div>`
  
                      document.getElementById(container).innerHTML=cont
  
                    })
                  }else{
                    console.log("something went wrong")
                  }
                })

                buildProductStripes(getWomanProducts,"prod-cont")
                buildProductStripes(getManProducts,"prod-cont-2")

              //builds products cards

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
              .then(()=>{
                //init slick stripes
                $('#prod-cont , #prod-cont-2').slick({
                    infinite: true,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    responsive: [
                      {
                        breakpoint: 1400,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1,
                          infinite: true,
                        }
                      },{
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1,
                        }
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                      }
                    ]
                  });
                  
            })
            
    })

    var initLoader=(()=>{
      setTimeout(()=>{
        $("#loader").css("display","none")
      },3000)
    })      

    var initNavbarToggler=(()=>{
      $("#menu-toggler").click(function(){
        $("#menu-cont").slideToggle()
      })
    })

    initNavbarToggler()
    initLoader()
    loadProductsStripes()
  })
