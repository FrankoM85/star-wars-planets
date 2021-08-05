import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Resident from './resident';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal( {data} ) {
  
  let residentBtn;
  let residents = data.residents;
  console.log(residents) 

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Height</TableCell>
            <TableCell align="center">Mass</TableCell>
            <TableCell align="center">Hair color</TableCell>
            <TableCell align="center">Skin color</TableCell>
            <TableCell align="center">Eye color</TableCell>
            <TableCell align="center">Birth Year</TableCell>
            <TableCell align="center">Gender</TableCell>
            <button className="closeBtn" onClick={handleClose}>X</button>
          </TableRow>
        </TableHead>
        <TableBody>
              {residents.map((resident, index) => (
                <Resident key={index} residentInfo={resident} />
              ))}
        </TableBody>
      </Table>
      <button className="closeBtn" onClick={handleClose}>Close</button>
    </TableContainer>
  );
  
  if (residents.length === 0) {
    residentBtn = 'No known residents';
  } else {
    residentBtn = (
      <button type="button" className="residentBtn" onClick={handleOpen}>
      {residents.length} Residents
    </button>
    );
  }

  return (
    <div>
      {residentBtn}
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
