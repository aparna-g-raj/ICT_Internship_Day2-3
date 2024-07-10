import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Add = ({person}) => {
  //const [count,setCount]=useState(0);
  //let valueAdd=()=>{
    //setCount(count+1)
  //}

  const [form, setForm]=useState(
    {
      fname:person.fname,
      department:person.department,
      semester:person.semester
    })
  function valueCap(e){
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    console.log(form)
  }
  return (
    <Box
      components="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required-Name"
          name="fname"
          value={form.fname}
          onChange={valueCap}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Required-Department"
          name='department'
          value={form.department}
          onChange={valueCap}
        />
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Required-Semester"
          name='semester'
          value={form.semester}
          onChange={valueCap}
        />
        <br></br>
        <Button variant="contained" color="success" onClick={valueAdd}>Register
        </Button>
        <br></br>
        {/* <small>count is {count}</small> */}
       
    </div>
    </Box>
  )

}
export default Add