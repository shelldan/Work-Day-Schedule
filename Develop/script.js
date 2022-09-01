var today = new Date();
var currentHour = (new Date()).getHours();

// Date and Time 
$("#currentDay").text(moment(today).format('MMM Do YYYY, h:mm:ss a'))

$(document).ready(function(){

  $('.submitBtn').each(function(){
    $(this).click(function(){
      var keyValue = ($(this).parent().prev().prev().children().html() + ' to do');
      var keyName = ($(this).parent().prev().children().val());
      localStorage.setItem(keyValue,keyName);

    });
  });

  // colorCode - this function controls the colorCode of each time-block 
  $('.hour').each(function(){
    //console.log($(this).prop('id')) // this referring to the .hour class in the label element 
    var hourValue = parseInt($(this).prop('id'));
    //var textareaColor = $(this).parent().next().children().html();
    var textareaColor = ($(this).parent().next().children())
    if (currentHour > hourValue){
        textareaColor.addClass('past') //
    } else if (currentHour < hourValue) {
        textareaColor.addClass('past').addClass('future') //
    } else if (currentHour = hourValue) {
      textareaColor.addClass('past').addClass('present') //
    }
  });
})


// why couldn't work? not even the console.log? because sometime the element is too nested

$('.task').each(function(){

  //console.log($(this).attr('id'))
  var savedKeyValue = ($(this).attr('id'))
  //console.log(savedKeyValue)

  var savedKeyName = localStorage.getItem(savedKeyValue)
  //console.log(savedKeyName)
  var textareaInput = ($(this).children())
  //console.log(textareaInput)
  $(textareaInput).val(savedKeyName)

})








// let text = document.querySelector('.hour').parentElement.nextElementSibling.firstElementChild.innerHTML
// console.log(text)

// client-side means the action takes place on the user's (the client's) computer
// server-side means that the action takes place on a web server 
// localStorage is a property that allow JavaScript and apps to save key-value pairs in a web browser with no expiration date.

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