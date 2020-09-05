// Check off specific todos by clicking
$("li").on("click",function(){
    $(this).toggleClass("turnGray");
});

// alert("Hello from app.js");

// Click on "x" to delete Todo
$("span").on("click",function(event){
  $(this).parent().fadeOut(2000,function(){
    $(this).remove();
  });
  event.stopPropgation();
});
