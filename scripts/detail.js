
const PRICE_PER_ROOM = 1000;
function calculatePrice(){

    let numberElement = document.getElementById("number");

    let totalPriceElement = document.getElementById("total");
    let toDateElement = document.getElementById("toDate");
    let fromDateElement = document.getElementById("fromDate");

    let toDateValue = new Date(toDateElement.value);
    let fromDateValue = new Date(fromDateElement.value);

    toDateElement.min = fromDateElement.value;

    let days = (toDateValue - fromDateValue)/(24*60*60*1000);
    
    if(numberElement.value && toDateElement.value && fromDateElement.value)
    totalPriceElement.value = "Rs. " + parseInt(numberElement.value)*PRICE_PER_ROOM*days;
else
    totalPriceElement.value = "Rs.0";   

}

