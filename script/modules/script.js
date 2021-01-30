$(document).ready(function(){

    const buildProductsStripes=(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                console.log(data[1])
                console.log(data.length)
                if(data.length > 0){
                  var cont="";

                  data.forEach((u)=>{
                    cont +=`<div id='product-element ' class='product-element '>`
                    cont +=`<img src='${u.image}'>`
                    cont +=`<div class='productName'>${u.title}</div>`
                    cont +=`<div class='productPrice'>$${u.price}</div>`
                    cont +=`</div>`
                  })
                }else{
                  console.log("something went wrong")
                }
                
                document.getElementById("prod-cont").innerHTML=cont
                document.getElementById("prod-cont-2").innerHTML=cont
              })
              .then(()=>{
                
                $('#prod-cont , #prod-cont-2').slick({
                    infinite: true,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    responsive: [
                      {
                        breakpoint: 1400,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          infinite: true,
                        }
                      },{
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                        }
                      },
                      {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
                        }
                      },
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2
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
    buildProductsStripes()
  })
