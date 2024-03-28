import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from '../SearchBox'
import InfoBox from "../InfoBox";


// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchBox/>
    <InfoBox/>
    <WeatherApp/>

     {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
     <Button variant="text">Text</Button>
     <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
      
    </>
  )
}

export default App
