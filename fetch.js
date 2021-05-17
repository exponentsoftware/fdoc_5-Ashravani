const fetch=require("node-fetch");
fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>console.log(data))
.then
(res=>
    {res.data.sort((a,b)=>a.area-b.area).reverse().slice(0,10).
    map(res=>
        (console.log("country:"+res.name+" area:"+res.area+")))})
.catch(err=> {(console.log('Error:',err.message));
})
