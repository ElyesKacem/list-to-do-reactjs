import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Note() {
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
          // textDecoration:'underline',
          fontSize:'large',
          marginRight:3
          // backgroundColor:'#b45c18',
          // color:'white'
        },
      }}
    >
      {/* <Paper elevation={0} /> */}
      
      
        <textarea type="text" />
      
      {/* <Paper elevation={3} /> */}
    </Box>
  );
}
