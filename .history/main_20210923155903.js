let confirmed = document.getElementById('confirmed');
var stats;

fetch("https://covid-19-data.p.rapidapi.com/country?name=nigeria", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "20f562cd91mshacb02bfa3cee355p154503jsn2ab2060b5724"
	}
})
.then(response => {
    if(response.ok){
        return response.json();
    }
    
	// console.log(response.json());
    // response.json()
})
.then(data => {
    console.log(data)
    confirmed.innerHTML = data;
})
.catch(err => {
	console.error(err);
});;

