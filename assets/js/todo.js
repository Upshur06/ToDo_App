// Check off specific todos by clicking
$("ul").on("click","li", function(){
    $(this).toggleClass("turnGray");
});

// alert("Hello from app.js");

// Click on "x" to delete Todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(2000,function(){
  });
  event.stopPropgation();
});

$("input[type=text]").on("keypress",function(event){
  if(event.which === 13){
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li>" + "<span>X</span> " + todoText + "</li>");
  }
})
