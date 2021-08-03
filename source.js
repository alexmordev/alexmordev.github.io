$("#btn_first").click(function(){
    $("h1:first").html("Change");
})
$(document).ready(function(){
    console.log("buen dia")
});

$("#btn_last").click(function(){
    $("h1:last").html("also change");
})