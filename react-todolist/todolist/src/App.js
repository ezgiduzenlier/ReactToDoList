import './App.css';
import React  from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function App() {

  const [status, setStatus] = React.useState('');
  const handleChange = (event) => {
    setStatus(event.target.value);
  }

  return (
    <div className="App">
    <Stack spacing={2} direction="row" className='addButton'>
    <Button variant="contained">Add To Do</Button>
    </Stack>

      <Box className="boxInput" >
        <FormControl className="fromInput" >
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
         <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={status}
           label="Status"
           onChange={handleChange}
         >
         <MenuItem value={10}>Completed</MenuItem>
         <MenuItem value={20}>Incomplete</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}

export default App;
