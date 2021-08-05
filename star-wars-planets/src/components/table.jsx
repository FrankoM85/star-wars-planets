import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SimpleModal from './residents';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});


export default function BasicTable({ data }) {
  const classes = useStyles();

  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Planet Name</TableCell>
            <TableCell align="right">Diameter (km)</TableCell>
            <TableCell align="right">Cliamte</TableCell>
            <TableCell align="right">Terrain</TableCell>
            <TableCell align="right">Surface Water (%)</TableCell>
            <TableCell align="right">Population</TableCell>
            <TableCell align="right">Residents</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((planets, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">{planets.name}</TableCell>
              <TableCell align="right">{planets.diameter}</TableCell>
              <TableCell align="right">{planets.climate}</TableCell>
              <TableCell align="right">{planets.terrain}</TableCell>
              <TableCell align="right">{planets.surface_water}</TableCell>
              <TableCell align="right"><NumberFormat value={planets.population} thousandSeparator={true} displayType={'text'}/></TableCell>
              <TableCell align="right"><SimpleModal data={planets} /></TableCell>
              <TableCell align="right"><Button variant="contained" color="secondary">Vote</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
