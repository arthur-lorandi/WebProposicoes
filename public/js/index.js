const addPropButton = document.getElementById("addPropButton");

addPropButton.addEventListener("click", () => {
    document.getElementById("p1").append("13");
    const truthTable = document.getElementById("truthTable");
    const prop = document.getElementById("propTextInput");
    
    const tableRows = truthTable.getElementsByClassName("tr");
    console.log(tableRows);
});