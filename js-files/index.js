// let serialNon = 0;
document.getElementById("first-btn").addEventListener("click",function(){
    const tringle = document.getElementById("Triangle").innerText;
    const base = getValueFromId("triangle-base");
    const height = getValueFromId("triangle-height");

    if(!isNaN(base) && !isNaN(height)){
        const calculation = 0.5 * base * height;
        setValueInAreaCalcultion(tringle,calculation);
    }else{
        alert("enter proper number");

    }
    
});

























