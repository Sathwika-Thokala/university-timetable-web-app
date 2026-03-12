function loadTimetable(){

let branch=document.getElementById("branch").value;
let sem=document.getElementById("semester").value;

fetch("data/timetable.json")

.then(response=>response.json())

.then(data=>{

let result=data[branch][sem];

document.getElementById("timetableDisplay").innerHTML=result;

});

}
