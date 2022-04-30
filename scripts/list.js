let url = new URLSearchParams(location.search);

//! To populate the HTML with new elements
let loh = (list) => {
   let loh = document.getElementById('list-view');

   list.forEach(hotel => {
      let hat = document.createElement("a");
      hat.setAttribute("href", `detail.html?id=` + hotel.result_object.location_id);
      loh.appendChild(hat);

      let hc = document.createElement("div");
      hc.setAttribute("class", "hotels-list");
      hat.appendChild(hc);
      hc.innerHTML = "<img src=" + hotel.result_object.photo.images.small.url + " alt='" + hotel.result_object.name + "' class='hotel-image-small'/>";

      let hContent = document.createElement("div");
      hContent.setAttribute("class", "hotel-content");
      hc.appendChild(hContent);

      hContent.innerHTML = "<h3>" + hotel.result_object.name + "</h3>";
      hContent.innerHTML += "<div id='rating'>" + hotel.result_object.rating + " <span class='fa fa-star checked'></span></div>";
      hContent.innerHTML += "<p>" + hotel.result_object.address + "</p>";
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

         loh(list);

      }
   });

   xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "locations/search?lang=en_US&limit=100&query=" + url.get('city'));
   xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
   xhr.setRequestHeader("x-rapidapi-key", "8280a48779msh4a285499a38ea63p129dd2jsn574cb7f9e919");

   xhr.send();
}

sendHttpRequest();


