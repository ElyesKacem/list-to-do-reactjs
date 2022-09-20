import logo from './logo.svg';
import './App.css';
import Note from './components/note/note';
import axios from "axios";
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import UndoIcon from '@mui/icons-material/Undo';
import DoneIcon from '@mui/icons-material/Done';


function App() {


  const [data, setData] = useState([]);
  const [textColor, setTextColor] = useState('black');
  const [taskBackgroundColor, setTaskBackgroundColor] = useState('white');
  const [textValue, setTextValue] = useState('');

  useEffect(()=>{
console.log(taskBackgroundColor);
  },[taskBackgroundColor]);

  useEffect(() => {
    axios.get("http://localhost:5050/api/getall").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    const toSave = { textValue, textColor, taskBackgroundColor };
    
  }

const changeColorSubmit = (e) =>{
  // e.preventDefault();
  setTextColor('white');
  setTaskBackgroundColor(e.target.style.backgroundColor);
  // console.log(taskBackgroundColor);
}


  return (
    <div style={{ height: "100vh" }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>

          <form onSubmit={handleSubmit}>





            <div className='addTask'>
              <h1 style={{ color: 'white' }}>What do you want to do ?</h1>

              <Button variant="contained" color="success" style={{ borderRadius: 30, textTransform: 'none', marginBottom: 20 }} startIcon={<BorderColorIcon />}>
                Add task
              </Button>





              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 328,
                    height: 328,
                    textAlign: 'left',
                    padding: 4,
                    borderRadius: 4,
                    resize: 'none',
                    backgroundColor:taskBackgroundColor,
                    color:textColor,
                  },
                }}
              >
                {/* <Paper elevation={0} /> */}


                <textarea type="text" onChange={(e) => setTextValue(e.target.value)} />

                {/* <Paper elevation={3} /> */}
              </Box>


              <div>
                <Button style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', margin: 10, backgroundColor: 'white' }} variant="contained" onClick={changeColorSubmit}></Button>
                <Button style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', margin: 10, backgroundColor: '#135714' }} variant="contained" onClick={changeColorSubmit}></Button>
                <Button style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', margin: 10, backgroundColor: '#67160e' }} variant="contained" onClick={changeColorSubmit}></Button>
                <Button style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', margin: 10, backgroundColor: '#b45c18' }} variant="contained" onClick={changeColorSubmit}></Button>
                <Button style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', margin: 10, backgroundColor: '#cca529' }} variant="contained" onClick={changeColorSubmit}></Button>

              </div>
            </div>
          </form>
        </Grid>
        <Grid item xs={3}>
          <div className='task-list'>
            <h2>To do</h2>

            {data.map(d => (
              <div >

              <Note />
              <div>
              <Button variant="contained" color="success" style={{ marginRight:30, textTransform: 'none', marginBottom: 20 }} startIcon={<DoneIcon />}>Done</Button>
              <Button variant="contained" color="warning" style={{ marginRight:30, textTransform: 'none', marginBottom: 20 }} startIcon={<UpdateIcon />}>Update</Button>
              <Button variant="contained" color="primary" style={{ marginRight:30, textTransform: 'none', marginBottom: 20 }}  startIcon={<DeleteIcon />}>Delete</Button>
            
              </div>


            </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='task-list done'>
            <h2>Done</h2>
            {data.map(d => (
              <div>

                <Note />
                <div>
                <Button variant="contained" color="success" style={{ marginRight:30, textTransform: 'none', marginBottom: 20 }} startIcon={<UndoIcon />}>Undo</Button>
                <Button variant="contained" color="warning" style={{ marginRight:30, textTransform: 'none', marginBottom: 20 }} startIcon={<UpdateIcon />}>Update</Button>
                <Button variant="contained" color="primary" style={{ marginRight:30, textTransform: 'none', marginBottom: 20 }}  startIcon={<DeleteIcon />}>Delete</Button>
              
                </div>


              </div>
              
              
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
