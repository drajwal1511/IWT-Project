class UI{
   constructor(){
        this.displayinweb= document.getElementById('display');
   }
   insert(result){
    let output=`
    <div class="section no-pad-bot" id="index-banner" > 
    <div class="container" >
    <br><br>
    <h3 class="center teal-text darken-4" style="color: white" >${result.city}&nbspWeather</h3>
    <div class="roe center">
    <h4><b style="color: white">${result.condition}</b></h4>
    <img src="${result.icon}" width="100" height="100">
    </div>
    <div class =" row center">
    <h4 class="flow-text" style="color: white ">${result.degCr}\u00B0 C / ${result.degFr}\u00B0 F</h4>
    </div>
    <div class="row center">
    <h4 class=" flow-text" style="color: white">Wind-speed ${result.windSpeed} / Wind-direction  ${result.wind_direction}</h4>
    </div>
    <br><br>
    </div>
    </div>
    `;
    this.displayinweb.innerHTML=output;

    
    
   }
}