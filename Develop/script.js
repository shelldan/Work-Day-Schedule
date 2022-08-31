var today = new Date();
var colorCode = document.querySelector(".colorCode"); //DOM selector method 
//var taskInput= document.querySelector('.task');
var submitBtn = document.querySelector('.submitBtn');
var hour = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']; // hour variable 
var currentHour = (new Date()).getHours();

//console.log(taskInput)

// Date and Time 
$("#currentDay").text(moment(today).format('MMM Do YYYY, h:mm:ss a'))

//when click submit button, save the task to the local storage 
// submitBtn.addEventListener('click',function(event){
//     event.preventDefault();
//     var task = document.getElementById('task').value;
//     localStorage.setItem('task',JSON.stringify(task)) //setItem(keyName, keyValue), keyName should be the timeblock, and keyValue should be the task 
//     renderLastSavedValue();        
// })

// function renderLastSavedValue(){
//     var savedTask = JSON.parse(localStorage.getItem('task'));
//     taskInput.textContent = savedTask;
// }

// renderLastSavedValue(); //why do we need this function here? why do we need to call the function ?


$(document).ready(function(){

  $('.submitBtn').each(function(){
    $(this).click(function(){
      var keyValue = ($(this).parent().prev().prev().children().html() + ' to do');
      var keyName = ($(this).parent().prev().children().val());
      localStorage.setItem(keyValue,keyName);

      var savedKeyName = localStorage.getItem(keyValue)
      //console.log(savedKeyName)
      ($(this).parent().prev().children.val()) = savedKeyName
      
    });
  });

  // colorCode - this function controls the colorCode of each time-block 
  $('.hour').each(function(){
    //console.log($(this).prop('id')) // this referring to the .hour class in the label element 
    var hourValue = parseInt($(this).prop('id'));
    //var color = $(this).parent().next().children().html();
    if (currentHour > hourValue){
        $(this).parent().next().children().addClass('past') //
    } else if (currentHour < hourValue) {
        $(this).parent().next().children().addClass('future') //
    } else if (currentHour = hourValue) {
        $(this).parent().next().children().addClass('present') //
    }
  });
})
  



// let text = document.querySelector('.hour').parentElement.nextElementSibling.firstElementChild.innerHTML
// console.log(text)

// client-side means the action takes place on the user's (the client's) computer
// server-side means that the action takes place on a web server 
// localStorage is a property that allow JavaScript and apps to save key-value pairs in a web browser with no expiration date. 