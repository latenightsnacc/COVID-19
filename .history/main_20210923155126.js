var stats;

fetch("https://covid-19-data.p.rapidapi.com/country?name=nigeria", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "20f562cd91mshacb02bfa3cee355p154503jsn2ab2060b5724"
	}
})
.then(response => {
    response.json()
	// console.log(response.json());
    // stats = response.json().
}).then(function(data) {
    stats = data.results;
})
.catch(err => {
	console.error(err);
});;

