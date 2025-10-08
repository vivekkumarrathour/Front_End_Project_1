import {Paper, Card, TextField, Stack, Button} from '@mui/material'
import React, {useState} from 'react'
import UserData from './UserData';

const UserForm = () => {
    const [name, setName] = useState ("");
    const [row, setRow]=useState([]);
    const textValue=(e)=>{
        setName(e.target.value);
        console.log("name"+name);
    }
    

    const rowCreate = (e)=>{
        e.preventDefault();
        setRow((r) => [...r,{name}])
        console.log("data:"+row);
    }
  return (
    <div>
        <Paper>
            <h1> User Profile Registration</h1>
            <Card elevation={4}>
                <form onSubmit={rowCreate}>
                    <Stack spacing = {2} padding = {2}>
                        <TextField
                            label = "Enter Your Name"
                            variant = "outlined"
                            placeholder = "Enter Your Name"
                            value = {name}
                            onChange = {textValue}
                            />
                        
                            <Button onClick={rowCreate}>
                                Submit
                            </Button>
                            <UserData row = {row}/> 
                        
                    </Stack>
                    </form> 

                    <table></table>

            </Card>
        </Paper>
    </div>
  )
}

export default UserForm