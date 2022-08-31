var today = new Date();
var colorCode = document.querySelector(".colorCode"); //DOM selector method 
var taskInput= document.getElementById('task');
var submitBtn = document.getElementById('submitBtn');
var hour = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']; // hour variable 

// Date and Time 
$("#currentDay").text(moment(today).format('MMM Do YYYY, h:mm:ss a'))

//when click submit button, save the task to the local storage 
submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    var task = document.getElementById('task').value;
    localStorage.setItem('task',JSON.stringify(task)) //setItem(keyName, keyValue), keyName should be the timeblock, and keyValue should be the task 
    renderLastSavedValue();        
})

function renderLastSavedValue(){
    var savedTask = JSON.parse(localStorage.getItem('task'));
    taskInput.textContent = savedTask;
}

renderLastSavedValue(); //why do we need this function here? why do we need to call the function ?

// can't get the user input after refresh the page

// colorCode 
var currentHour = (new Date()).getHours();
$('.colorCode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('background-color','Blue'); // future
    }else if(val < currentHour && val > currentHour-6){
      $(this).css('background-color','Red'); // past
    }else if(val === currentHour){
      $(this).css('background-color','Green'); // present 
    }else{
      $(this).css('background-color','White');
    }
  });


  

// client-side means the action takes place on the user's (the client's) computer
// server-side means that the action takes place on a web server 
// localStorage is a property that allow JavaScript and apps to save key-value pairs in a web browser with no expiration date. 