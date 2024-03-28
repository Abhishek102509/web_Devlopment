import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

 function SearchBox(){
    let [city,setCity]=useState("");
     const API_URL = "https://api.openweathermap.org/data/2.5/weather"
     const API_KEY = "6cfbe918a2c04251c6d395d56a70ac26";
      
     let getWeatherInfo = async() => {
        let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse =  await response.json()
       
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].main,
            
           };
           console.log(result);
           return result;
    //    }   
    //    catch(err) {
    //        throw err;
    //    }

     };



    let handleChange =(event)=>{
        setCity(event.target.value)

    };
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();

    };

   return(
    <div>
        <h3>Search for The Weather</h3>
        <form onSubmit={handleSubmit} >
        <TextField id="city" 
        label="City Name" 
        variant="outlined"
         required
          value={city}
          onChange={handleChange}
         />
        <br /> <br /><br />
        <Button variant="contained" type="submit" >
        Send
      </Button>

        </form>
    </div>
   )

 }
 export default SearchBox;