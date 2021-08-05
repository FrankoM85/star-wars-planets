import React, { useState, useEffect } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const Resident = ({ residentInfo }) => {
  const [resident, setResident] = useState([]); //a resident már object {}

  useEffect(() => {
    fetch(residentInfo) //residentInfo még url
      .then((response) => {
        if (response.status !== 200) return;
        return response.json();
      })
      .then((json) => setResident(json)); //a responban kapott adat egy resident nevű object-be kerül {}
  }, [residentInfo]);

  return (
    <TableRow>
      <TableCell align="center">{resident.name}</TableCell>
      <TableCell align="center">{resident.height}</TableCell>
      <TableCell align="center">{resident.mass}</TableCell>
      <TableCell align="center">{resident.hair_color}</TableCell>
      <TableCell align="center">{resident.skin_color}</TableCell>
      <TableCell align="center">{resident.eye_color}</TableCell>
      <TableCell align="center">{resident.birth_year}</TableCell>
      <TableCell align="center">{resident.gender}</TableCell>
    </TableRow>
  );
};

export default Resident;