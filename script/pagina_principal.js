$(document).ready(function(){
    console.log("hola mundo");
    MenuShowProducts();
})

$("#backHome").click(function(){
    $("#indexcarousel").show(1200);

})

function MenuShowProducts(){
    $("#faldas").click(function(e){
        e.preventDefault();
        $("#indexcarousel").hide(1200);
    })
    $("#sacos").click(function(e){
        e.preventDefault();
        $("#indexcarousel").hide(1200);
    })
    $("#pantalones").click(function(e){
        e.preventDefault();
        $("#indexcarousel").hide(1200);
    })
    $("#blusas").click(function(e){
        e.preventDefault();
        $("#indexcarousel").hide(1200);
        $("#showallb").show(1000);
    })
    $("#conjuntos").click(function(e){
        e.preventDefault();
        $("#indexcarousel").hide(1200);
    })
    $("#promo").click(function(e){
        e.preventDefault();
        $("#indexcarousel").hide(1200);
    })

}
