const endDate = "04 January 2024 03:47 PM";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000; // convert ms to sec

    if(diff < 0) return;

    //convert into day
    const day = Math.floor(diff/3600/24);
    inputs[0].value = day;

    //convert into Hours
    const Hours = Math.floor((diff/3600) % 24);
    inputs[1].value = Hours;

    //convert into Minutes
    const Minutes = Math.floor((diff/60) % 60);
    inputs[2].value = Minutes;

    //convert into Seconds
    const Seconds = Math.floor(diff% 60);
    inputs[3].value = Seconds;
}

clock();

setInterval(
    ()=> {
        clock();
    },
    1000
);