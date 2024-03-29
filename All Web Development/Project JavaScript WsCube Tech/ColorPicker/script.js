const getColor = () =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    //convert hexDecNum
    const hexDecNum = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor=hexDecNum;
   document.getElementById("color-code").innerHTML = hexDecNum;
};

document.getElementById("btn").addEventListener("click",getColor);