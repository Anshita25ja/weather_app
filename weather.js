// let city=document.getElementById("city").value;
// console.log(city)
let getdata=()=>{
    let city=document.getElementById("city").value;
console.log(city)
    let weather= document.querySelector(".weather");
    let btn=document.querySelector(".btn");
    let result=document.getElementById("result");
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a89a9088447149cc65b994aaab3c1d5`
    
     ).then((response)=>{
 response.json().then((data)=>{
//     console.log(data.weather[0].main);
//     console.log(data.weather[0].description);
//     console.log(data.weather[0].icon);
// console.log(data.name)
// console.log(data.main)
// console.log(data)


//  console.log(data.main.temp)
 let celsius=data.main.temp-273.15;
 celsius=celsius.toFixed(2);
result.innerHTML=`<h2 class="name">${data.name}</h2>
<h4>${data.weather[0].main}</h4>

<h4>${data.weather[0].description}</h4>
<img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png" class="img">
<h1>${celsius}&#176</h1>
<div class="temp min_temp">
<h4>min</h4>
<h4>${data.main.temp_min}</h4>
</div>
<div class="temp max_temp">
<h4>max</h4>
<h4>${data.main.temp_max}</h4>
</div>
`;

 }
 ).catch(()=>{
    // alert("city is not found");
    result.innerHTML="check again";
 })

})}
