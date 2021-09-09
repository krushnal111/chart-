import React, { useState } from "react";
import Chart from "./Chart";
import {TableContainer,TableHead,TableBody,TableCell,TableRow,Table,TextField,Button} from "@material-ui/core";

const TableChart = () => {
  const [subData, setSubData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData(subData) {
    setFinalData((finalData) => [...finalData, subData]);
    setSubData('');
    document.mydata.reset()
  }
  return (
    <div>
      <form name="myData">
       
        <TableContainer style={{ display: "flex", justifyContent: "left" }}>
          <Table style={{ width: "50%", justifyContent: "center" }} size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TextField value={subData["name"]} onChange={(e) =>setSubData({ ...subData, name: e.target.value })} label="Name" margin="normal" variant="outlined" color="secondary"/>
                </TableCell>
                <TableCell>
                  <TextField value={subData["number"]} onChange={(e) => setSubData({ ...subData, number: e.target.value })} label="Number" margin="normal" variant="outlined" color="secondary"/>
                </TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => submitData(subData)} color="primary">
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalData.map((data) => (
                <TableRow>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      <br />
      <Chart data={finalData} />
    </div>
  );
};
export default TableChart;