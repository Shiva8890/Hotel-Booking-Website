function bookingSuccessfull(){
    alert("succesfull");
}


let url = new URLSearchParams(location.search);
//! HTTP request for hotel details
let sendHttpRequestHotel = () => {
    let xhr = new XMLHttpRequest();
 
    xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
 
          let result = JSON.parse(this.responseText).data[0];
 
          document.getElementById("Pname").innerText = result.name;
          document.getElementById("Pranking").innerText = result.ranking;
          document.getElementById("Paddress").innerText = result.address;
         
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
          let image = document.getElementById("payimg");
          let result = JSON.parse(this.responseText).data;
                
             let img = document.createElement("img");
             img.src = result[0].images.medium.url;
             image.appendChild(img);
                  
       }
    });
    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "photos/list?lang=en_US&location_id=" + url.get('id'));
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "8280a48779msh4a285499a38ea63p129dd2jsn574cb7f9e919");
 
    xhr.send();
 }

 
 sendHttpRequestHotel();
 sendHttpRequestPhoto();