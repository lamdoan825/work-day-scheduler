// Display date and time
var day = moment().format("llll");
$("#currentDay").append(day);

$(document).ready(function () {
  // click listener 
  $(".saveBtn").on("click", function () {
    // Use JQuery to grab values of description
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
  })

  // Use localstorage to get item
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  
  function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();
    
  }  
  timeTracker();
    // Create an if statement to check time for background color
    
})
