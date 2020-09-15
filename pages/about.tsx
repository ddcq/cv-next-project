import React, { ReactElement } from 'react'
import { Grid, Table, TableBody, TableRow, TableCell, List, ListItem, Avatar, Text } from 'react-md';

export default function Route1(): ReactElement {
  return (
    <Grid columns={1}>

      <Text type="headline-6">Carrière professionnelle</Text>
      <Text type="overline">Les entreprises qui m'ont fait confiance avant vous</Text>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ width: 200 }}> <img width="100%" src="/adex.png" /></TableCell>
            <TableCell style={{ width: 250 }}>Septembre 2001 - Décembre 2005</TableCell>
            <TableCell style={{ fontSize: "xx-large" }}>Adex</TableCell>
            <TableCell>Aubay</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img width="100%" src="/altelios.png" /></TableCell>
            <TableCell>Janvier 2006 - Décembre 2013</TableCell>
            <TableCell style={{ fontSize: "xx-large" }}>Logysil</TableCell>
            <TableCell>Altelios Technology</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img width="100%" src="/sqli.png" /></TableCell>
            <TableCell>Décembre 2013 - Janvier 2016</TableCell>
            <TableCell style={{ fontSize: "xx-large" }}>SQLI Entreprise</TableCell>
            <TableCell>SQLI Group</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img width="100%" src="/texa.png" /></TableCell>
            <TableCell>Février 2016 - Juin 2017</TableCell>
            <TableCell style={{ fontSize: "xx-large" }}>Texa Services</TableCell>
            <TableCell>Texa Groupe</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><img width="100%" src="/evenium.png" /></TableCell>
            <TableCell>Juin 2017 - Aujourd'hui</TableCell>
            <TableCell style={{ fontSize: "xx-large" }}>Evenium</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h3>Formation</h3>
      <List>
        <ListItem leftAddon={
          <Avatar><img src="/dessgla.png" width="30px" /></Avatar>
        }>
          <b>2001 - Master 2 Génie des Logiciels Applicatifs</b> UPMC
        </ListItem>
        <ListItem leftAddon={
          <Avatar><img src="/scort.png" width="40px" /></Avatar>
        }>
          <b>2001 - Scort Ic Scripting</b>
        </ListItem>
        <ListItem leftAddon={
          <Avatar><img src="/teradata.png" width="40px" /></Avatar>
        }>
          <b>2003 - Teradata Basic, Physical Implementation, SQL, Utilitaires</b>
        </ListItem>
        <ListItem leftAddon={
          <Avatar><img src="/scrum.png" width="40px" /></Avatar>
        }>
          <b>2013 - Scrum Master Certification</b> SCRUM ALLIANCE, INC.
				</ListItem>
        <ListItem leftAddon={
          <Avatar><img src="/orsys.jpg" width="40px" /></Avatar>
        }>
          <b>2017 - Formation ReactJS, maîtriser le framework JavaScript de Facebook</b> ORSYS FORMATION
        </ListItem>
      </List>
    </Grid>
  )
}
