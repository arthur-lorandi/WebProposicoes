const addPropButton = document.getElementById("addPropButton");

addPropButton.addEventListener("click", () => {
    //--------testing button--------
    document.getElementById("p1").append("13");
    //--------testing button--------
    const truthTable = document.getElementById("truthTable");
    const prop = document.getElementById("propTextInput");
    
    const tableRows = truthTable.getElementsByClassName("tr");
    console.log(tableRows);
});