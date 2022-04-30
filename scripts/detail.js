
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

// function myFunction() {
//     var x = document.getElementById("form1").elements[1].value;
//     document.getElementById("xyz").innerHTML = x;
//   }
 


let url = new URLSearchParams(location.search);
//! HTTP request for hotel details
let sendHttpRequestHotel = () => {
    let xhr = new XMLHttpRequest();
 
    xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
 
          let result = JSON.parse(this.responseText).data[0];
 
          document.getElementById("hotel-name").innerText = result.name;
          
          let bookingFormLink = document.getElementById("form1");
          bookingFormLink.setAttribute("action", `payment.html?id=` + result.location_id)
 
          let amenities = result.amenities;
          let i = 0;
          for (; i < Math.min(amenities.length, 10); i++) {
             let liElement = document.createElement("li");
             liElement.innerText = amenities[i].name;
             document.getElementById("amenities").appendChild(liElement);
          }
 
          let descriptionPara = document.createElement("h6");
          descriptionPara.innerHTML = result.description;
          document.getElementById("description1").appendChild(descriptionPara);
 
          let rating = parseInt(result.rating);
          for (i = 1; i <= rating; i++) {
             document.getElementById(i).classList.add("checked");
          }
       }     
 
    });
 
    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "hotels/get-details?lang=en_US&location_id=" + url.get('id'));
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "8280a48779msh4a285499a38ea63p129dd2jsn574cb7f9e919");
 
    xhr.send();
 }
 
 //! HTTP request for hotel photos
 let sendHttpRequestPhoto = () => {
    let xhr = new XMLHttpRequest();
 
    xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
          let carouselParentElement = document.getElementById("carouselImg");
          let result = JSON.parse(this.responseText).data;
          let size = Math.min(result.length, 5);
          let i = 0;
          for (; i < size; i++) {
             let div = document.createElement("div");
             div.classList.add("carousel-item");
             if (i == 0)
                div.classList.add("active");
                
             let image = document.createElement("img");
             image.setAttribute("class", "carousel-image");
             image.classList.add("d-block");
             image.classList.add("w-100");
             image.src = result[i].images.large.url;
             
             div.appendChild(image);
             carouselParentElement.appendChild(div);
          }         
       }
    });
    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "photos/list?lang=en_US&location_id=" + url.get('id'));
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "8280a48779msh4a285499a38ea63p129dd2jsn574cb7f9e919");
 
    xhr.send();
 }

 
 sendHttpRequestHotel();
 sendHttpRequestPhoto();
