import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RightNote(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 328,
          height: 328,
          textAlign:'left',
          padding:4,
          borderRadius:4,
          resize:'none',
          // backgroundColor:'#b45c18',
          // color:'white'
        },
      }}
    >
      {/* <Paper elevation={0} /> */}
      
      
        <textarea type="text" value={props.value} />
      
      {/* <Paper elevation={3} /> */}
    </Box>
  );
}
