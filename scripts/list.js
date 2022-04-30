let url = new URLSearchParams(location.search);

//! To populate the HTML with new elements
let listOfHotels = (list) => {
   let listOfHotels = document.getElementById('list-view');

   list.forEach(hotel => {
      let hotelAnchorTag = document.createElement("a");
      hotelAnchorTag.setAttribute("href", `detail.html?id=` + hotel.result_object.location_id);
      listOfHotels.appendChild(hotelAnchorTag);

      let hotelContainer = document.createElement("div");
      hotelContainer.setAttribute("class", "hotels-list");
      hotelAnchorTag.appendChild(hotelContainer);
      hotelContainer.innerHTML = "<img src=" + hotel.result_object.photo.images.small.url + " alt='" + hotel.result_object.name + "' class='hotel-image-small'/>";

      let hotelContent = document.createElement("div");
      hotelContent.setAttribute("class", "hotel-content");
      hotelContainer.appendChild(hotelContent);

      hotelContent.innerHTML = "<h3>" + hotel.result_object.name + "</h3>";
      hotelContent.innerHTML += "<div id='rating'>" + hotel.result_object.rating + " <span class='fa fa-star checked'></span></div>";
      hotelContent.innerHTML += "<p>" + hotel.result_object.address + "</p>";
   });
}

//! HTTP request
let sendHttpRequest = () => {
   let xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
         let result = JSON.parse(this.responseText).data;

         let arr = [];
         list = result.filter((element) => element.result_type == "lodging");

         list.forEach((element) => {
            arr.push([element.result_object.name
               + "<br><a href=\"detail.html?id="
               + element.result_object.location_id
               + "\">Book Hotel</a>", element.result_object.latitude, element.result_object.longitude]);
         });

         listOfHotels(list);

      }
   });

   xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "locations/search?lang=en_US&limit=100&query=" + url.get('city'));
   xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
   xhr.setRequestHeader("x-rapidapi-key", "8280a48779msh4a285499a38ea63p129dd2jsn574cb7f9e919");

   xhr.send();
}

sendHttpRequest();


