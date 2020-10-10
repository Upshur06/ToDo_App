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

// press enter and the list and text will append to the li in list-container
$("input[type=text]").on("keypress",function(event){
  if(event.which === 13){
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li>" + "<span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})

$(".fa-plus").on("click",function(){
  $("input[type=text]").fadeToggle();
  $("input[type=date]").fadeToggle();
});



// list to be append based on Date
// list display time as well
// list to be sectioned based on specific day
// if list the list isn't complete by the specific day or time it goes into the pass due section
