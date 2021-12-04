import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

import { StyledText } from "styles/common";
import { StyledCard, StyledHeading } from "styles/company/About";
import * as colorCodes from "constants/colorCodes";

function createData(key: string, value: string) {
  return { key, value };
}

const rows = [
  createData("Name", "ABC Company"),
  createData("Foundnation", "2018/06/08"),
  createData("Capital", "20,000,000"),
  createData("CEO", "John Smith"),
  createData("Service", "Branding, Design, Event, Media, Outsourcing, etc."),
  createData("Email", "email@example.com"),
];

const About: React.FC = () => {
  return (
    <StyledCard backgroundColor={colorCodes.SNOW}>
      <StyledHeading>
        <StyledText variant="h4" fontWeight="bold" gutterBottom>
          About
        </StyledText>
      </StyledHeading>
      <TableContainer>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.key}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledCard>
  );
};

export default About;
