 // Check if the user has selected 12-hour format
//  if (document.getElementById('format12').checked) {
//     hours = (hours % 12) || 12; // Convert to 12-hour format
// }


    //adding the current time to the date
    var hrs = document.getElementById('hrs');
    var mins = document.getElementById('mins');
    var sec = document.getElementById('sec');
    // var timeFormat = '24'; // Default to 24-hour format

    

setInterval(() => {



    let currentTime = new Date();
    // let currentTime = new Date;

    hrs.innerHTML = (currentTime.getHours()<10?"0"+ currentTime.getHours() : currentTime.getHours())
    mins.innerHTML = (currentTime.getMinutes()<10?"0"+ currentTime.getMinutes() : currentTime.getMinutes())
    sec.innerHTML = (currentTime.getSeconds()<10?"0"+ currentTime.getSeconds() : currentTime.getSeconds())

    // hrs.innerHTML = (currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours());
    // mins.innerHTML = (currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes());
    // sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds());
}, 1000); 



var index = 0;

function changecolors() {
        //applying the allay of an object
    let colors = [ "orange", "yellow", "pink", "white"]

        document.getElementsByTagName("body")[0].style.background = colors[index++]
        
        if (index > colors.length -1) {
                index = 0
        }
}








