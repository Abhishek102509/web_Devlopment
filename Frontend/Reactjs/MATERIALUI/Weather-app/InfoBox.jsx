import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }) {
    
    let IMG_URL = "https://images.unsplash.com/photo-1599117583064-48d912976a91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjBkYXl8ZW58MHx8MHx8fDA%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90fGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            
            <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ? RAIN_URL : info.temp>15 ?
          HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         {info.humidity > 80
          ? <ThunderstormIcon /> : info.temp>15 ?
          <WbSunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}&deg;C</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempmax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>

        </div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}