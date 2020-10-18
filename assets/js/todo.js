
let $today = new Date();
let $day = $today.getDate();
let $month = $today.getMonth()+1;
let $year = $today.getFullYear();

let $todayDate = `${$month}-${$day}-${$year}`;

console.log("todayDate: " + typeof $day);

// Check off specific todos by clicking
$("ul").on("click","li", function(){
    $(this).toggleClass("turnGray");
});

// Click on "x" to delete Todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(2000,function(){
  });
  event.stopPropgation();
});

// press enter and the list and text will append to the li in list-container
$("#btn").on("click", function(){

  listDate();
  // listText();



})

function listDate(){
  let listDate = $("input[type=date]").val().split("-");
  let todoDate = `${listDate[1]}-${listDate[2]}-${listDate[0]}`;

  console.log((Number(listDate[2]) - $day));
  console.log((Number(listDate[1]) - $month));

  if(Number(listDate[1]) == $month && Number(listDate[0]) == $year && Number(listDate[2]) < $day){
    console.log("pastdue");
  } else if(Number(listDate[1]) < $month && Number(listDate[0]) == $year || Number(listDate[0]) < $year){
    console.log("Also pastdue");
  } else if((Number(listDate[1]) - $month) >= 2 && Number(listDate[0]) == $year){
    console.log("this Year")
  } else if(Number(listDate[1]) == $month && Number(listDate[0]) == $year && (Number(listDate[2]) - $day) < 2){
    console.log("next day")
  } else if(Number(listDate[1]) == $month && Number(listDate[0]) == $year && (Number(listDate[2]) - $day) >= 1 || Number(listDate[2]) >= 31){
    console.log("coming up")
  } else if(Number(listDate[0]) == $year && (Number(listDate[1]) - $month) <= 2 || (Number(listDate[1]) - $month) > 0){
    console.log("next Month");
  } else if(Number(listDate[0]) == $year && (Number(listDate[1]) - $month) <= 3 || Number(listDate[1]) >= 12  || (Number(listDate[1]) - $month) > 0){
    console.log("this Year");
  }

  // else if(todoDate === $todayDate){
  //   console.log("sameday");
  // }


  $("#btn-container").append("<ul>" + todoDate + "</ul>");
  }

function listText(){
  let todoText = $("input[type=text]").val();
  console.log(todoText);
      $("ul").append("<li>" + "<span><i class='fa fa-trash'></i></span> " + todoText + "           " + listTime() + "</li>");
}

function listTime(){
  let todoTime = $("input[type=time]").val();
    let [h,m] = todoTime.split(':');

    let time = ( h >= 12 ? (h%12+12*(h%12==0))+":"+m + ' PM' : (h%12+12*(h%12==0))+":"+m + ' AM');

    // $("time").css("color", "red");
    console.log(time);
    return time;
}


// $("input[type=date]").on("keypress", function(event){
//   if(event.which === 13){
//     let todoDate = $(this).val();
//     $(this).val("");
//     $("ul").prepend("<li>" + todoDate + "</li>");
//   }
// })

$(".fa-plus").on("click",function(){
  $("input[type=text]").fadeToggle();
  $("input[type=date]").fadeToggle();
});



// list to be append based on Date
// list display time as well
// list to be sectioned based on specific day
// if list the list isn't complete by the specific day or time it goes into the pass due section
