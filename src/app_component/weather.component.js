import React from "react";



const Weather = () => {
	return (
		<div className="container">
		 <div className="cards">
           <h1>New York</h1>

           <h5 className="py-4">
             <i className="wi wi-day-sunny display-1"/>
           </h5>

           <h1 className="py-2">25&deg;</h1>

      
       {/** showing max and min temparature **/}

       {minmaxTemp(24, 19)}



		 </div>
		 </div>


   );
};


function minmaxTemp(min, max) {
	return (
		<h3>
		  <span className="px-4">{min}&deg;</span>
		  
		  <span className="px-4">{max}&deg;</span>

		</h3>
		);

}



export default Weather;