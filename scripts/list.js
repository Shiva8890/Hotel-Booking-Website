// const data = null;

function getData(){

const xhr = new XMLHttpRequest()
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

xhr.open("GET", "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km");
// xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
// xhr.setRequestHeader("X-RapidAPI-Key", "8280a48779msh4a285499a38ea63p129dd2jsn574cb7f9e919");

xhr.onload = () =>{

    if(xhr.status == 200){

        let responseObj = xhr.response
        document.getElementById('listofhotels').innerHTML = responseObj
    }
    else {
        console.log('Error')
    }
    
}
xhr.send()

}