import  React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Buttons( {buttonText,onClick,disabled,color,className}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={onClick} disabled={disabled} color={color} className={className}>{buttonText} </Button>
    </Stack>
  );
}