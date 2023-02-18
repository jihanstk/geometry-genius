// let serialNon = 0;
document.getElementById("first-btn").addEventListener("click",function(){
    const tringle = document.getElementById("Triangle").innerText;
    const base = getValueFromId("triangle-base");
    const height = getValueFromId("triangle-height");

    if(!isNaN(base) && !isNaN(height)){
        const calculation = 0.5 * base * height;
        setValueInAreaCalcultion(tringle,calculation.toFixed(2));
    }else{
        alert("enter proper number");

    }
    
});

document.getElementById("second-bnt").addEventListener("click",function(){
    const rectangle = document.getElementById("rectangle").innerText;
    const width = getValueFromId("rectangle-width");
    const lenght = getValueFromId("rectangle-length");

    if(!isNaN(width) && !isNaN(lenght)){
        const calculation =  width * lenght;
        setValueInAreaCalcultion(rectangle,calculation.toFixed(2));
    }else{
        alert("enter proper number");

    }
    
});

document.getElementById("third-btn").addEventListener("click",function(){
    const parallelogram = document.getElementById("parallelogram").innerText;
    const base = getInnrTextById("base-Parallelogram");
    const height = getInnrTextById("height-Parallelogram");
 
    

    if(!isNaN(base) && !isNaN(height)){
        const calculation =  base * height;
        setValueInAreaCalcultion(parallelogram,calculation.toFixed(2));
    }else{
        alert("enter proper number");

    }
    
});

document.getElementById("fourth-btn").addEventListener("click",function(){
    const rhombus = document.getElementById("rhombus").innerText;
    const d1 = getInnrTextById("rhombus-d1");
    const d2 = getInnrTextById("rhombus-d2");
    
    

    if(!isNaN(d1) && !isNaN(d2)){
        const calculation = 0.5 * d1 * d2;
        setValueInAreaCalcultion(rhombus,calculation.toFixed(2));
    }else{
        alert("enter proper number");

    }
    
});


























