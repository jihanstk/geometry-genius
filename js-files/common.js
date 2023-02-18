
function getValueFromId(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = parseFloat(inputElement.value);
    return inputValue;
}


function getInnrTextById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;

}
let serialNon = 0;
function setValueInAreaCalcultion(CalculationName,calculation){
    const tableContainer = document.getElementById("table-container");

    const newTableRow = document.createElement("tr");
    newTableRow.innerHTML = `
    <td>${serialNon = serialNon + 1}.${CalculationName}</td>

    <td>${calculation} cm<sup>2</sup></td>
    <td> <button class="btn btn-success w-50 button-cal">Covert to m<sup>2</sup></button></td>
    `
    tableContainer.appendChild(newTableRow);
}


// function random_bg_color() {
//     const x = Math.floor(Math.random() * 256);
//     const y = Math.floor(Math.random() * 256);
//     const z = Math.floor(Math.random() * 256);
//     const cardColor = "rgb(" + x + "," + y + "," + z + ")";
  
//    document.getElementsById("card1").style.backgroundColor = cardColor;
//     }













