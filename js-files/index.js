// let serialNon = 0;
document.getElementById("first-btn").addEventListener("click",function(){
    const tringle = document.getElementById("Triangle").innerText;
    const base = getValueFromId("triangle-base");
    const height = getValueFromId("triangle-height");

    if(!isNaN(base) && !isNaN(height) && base>0 && height>0){
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

    if(!isNaN(width) && !isNaN(lenght)&& width>0 && lenght>0){
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
 
    

    if(!isNaN(base) && !isNaN(height) && base >0 && height > 0){
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
    
    

    if(!isNaN(d1) && !isNaN(d2) && d1>0  && d2>0){
        const calculation = 0.5 * d1 * d2;
        setValueInAreaCalcultion(rhombus,calculation.toFixed(2));
    }else{
        alert("enter proper number");

    }
    
});
document.getElementById("fifth-btn").addEventListener("click",function(){
    const pentagon = document.getElementById("pentagon").innerText;
    const p = getInnrTextById("pentagon-p");
    const b = getInnrTextById("pentagon-b");
    
    

    if(!isNaN(p) && !isNaN(b) && p>0 && b>0){
        const calculation = 0.5 * p * b;
        setValueInAreaCalcultion(pentagon,calculation.toFixed(2));
    }else{
        alert("enter proper number");

    }
    
});
document.getElementById("sixth-btn").addEventListener("click",function(){
    const Ellipse = document.getElementById("Ellipse").innerText;
    const a = getInnrTextById("Ellipse-a");
    const b = getInnrTextById("Ellipse-b");
    
    

    if(!isNaN(a) && !isNaN(b) && a>0 && b>0){
        const calculation = 3.14 * a * b;
        setValueInAreaCalcultion(Ellipse,calculation.toFixed(2));
    }else{
        alert("enter proper number");

    }
    
});





const card = document.getElementById("card-1",);
card.addEventListener("mouseenter",function(){
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    let cardColor = "rgb(" + x + "," + y + "," + z + ")";

const setBackgroundColor = () => {
  card.style.color="black"
  card.style.backgroundColor = cardColor;
  card.style.color = randomColor;
};

setBackgroundColor();
  
  
})
const secondCard = document.getElementById("card-2",);
secondCard.addEventListener("mouseenter",function(){
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    let cardColor = "rgb(" + x + "," + y + "," + z + ")";

const setBackgroundColor = () => {
    secondCard.style.color="black"
    secondCard.style.backgroundColor = cardColor;
    secondCard.style.color = randomColor;
};

setBackgroundColor();
  
  
})


























