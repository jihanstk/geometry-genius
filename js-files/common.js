
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
















