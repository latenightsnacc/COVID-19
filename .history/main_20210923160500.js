let confirmed = document.getElementById('confirmed');
let recovered = document.getElementById('recovered');
let critical = document.getElementById('critical');
let deaths= document.getElementById('deaths');


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
    else {
        
    }
})
.then(data => {
    console.log(data)
    confirmed.innerHTML = data[0].confirmed;
    recovered.innerHTML = data[0].recovered;
    critical.innerHTML = data[0].critical;
    deaths.innerHTML = data[0].deaths;
})
.catch(err => {
	console.error(err);
});;

