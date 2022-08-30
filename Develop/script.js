const today = new Date();
const editBtnEl = $('.edit_btn')
const colorCode = document.getElementsByClassName(".colorCode");
const editContentEl = $(".edit_cont")
const enterTaskEl_9 = document.getElementById('enterTask-9')
const enterTaskEl_10 = document.getElementById('enterTask-10')

const submitBtn_9 = document.getElementById('submitBtn-9')
const submitBtn_10 = document.getElementById('submitBtn-10')

// Date and Time 
$("#currentDay").text(moment(today).format('MMM Do YYYY, h:mm:ss a'))

// submit button, not finish it yet 


// submitBtn_9.addEventListener('click',function(e){
//   e.preventDefault();
//   var savedTask = JSON.parse(localStorage.getItem("savedTask"));
//   var currentInput = enterTaskEl_9.value.trim();
//   var currentTask = {
//     task: currentInput,
//     time: '9am'
//   };

//   savedTask.push(currentTask);
//   localStorage.setItem('savedTask', JSON.stringify(savedTask));
// });


enterTaskEl_9.value = getSavedValue("txt_1");    // set the value to this input

/* Here you can add more inputs to set value. if it's saved */

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e){
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}

submitBtn_9.addEventListener('keyup',saveValue(this))


// submitBtn_10.addEventListener('click',function(e){
//   e.preventDefault();
//   localStorage.setItem('task',enterTaskEl_10.value);
//   localStorage.setItem('time','10am')
//   // enterTaskEl.value = ''
// });




// edit content, not finish it yet 
// function set(){
//     var sendJSON = JSON.stringify(allMovie);
//     localStorage.setItem('allMovie',sendJSON)
// }


// function get(){
//     var getJSON = localStorage.getItem('allMovie');
//     if (getJSON) {
//         allMovie = JSON.parse(getJSON)
//     }
// }



// colorcode 
// var currentHour = (new Date()).getHours();
// $('.colorcode')
//   .each(function(){
//     var val = parseInt($(this).prop('id'));
//     if(val > currentHour && val < currentHour + 6){
//       $(this).css('background-color','Blue');
//     }else if(val < currentHour && val > currentHour-6){
//       $(this).css('background-color','Red');
//     }else if(val === currentHour){
//       $(this).css('background-color','Green');
//     }else{
//       $(this).css('background-color','White');
//     }
//   });



// client-side means the action takes place on the user's (the client's) computer
// server-side means that the action takes place on a web server 
// localStorage is a property that allow JavaScript and apps to save key-value pairs in a web browser with no expiration date. 