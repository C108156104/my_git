import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return {
    name, calories, fat, carbs, protein
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductCard() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import PropTypes from 'prop-types';
// import {
//   Avatar,
//   Box,
//   Card,
//   CardContent,
//   Divider,
//   Grid,
//   Typography
// } from '@material-ui/core';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
// import GetAppIcon from '@material-ui/icons/GetApp';

// const ProductCard = ({ product, ...rest }) => (
//   <Card
//     sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100%'
//     }}
//     {...rest}
//   >
//     <CardContent>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           pb: 3
//         }}
//       >
//         <Avatar
//           alt="Product"
//           src={product.media}
//           variant="square"
//         />
//       </Box>
//       <Typography
//         align="center"
//         color="textPrimary"
//         gutterBottom
//         variant="h4"
//       >
//         {product.title}
//       </Typography>
//       <Typography
//         align="center"
//         color="textPrimary"
//         variant="body1"
//       >
//         {product.description}
//       </Typography>
//     </CardContent>
//     <Box sx={{ flexGrow: 1 }} />
//     <Divider />
//     <Box sx={{ p: 2 }}>
//       <Grid
//         container
//         spacing={2}
//         sx={{ justifyContent: 'space-between' }}
//       >
//         <Grid
//           item
//           sx={{
//             alignItems: 'center',
//             display: 'flex'
//           }}
//         >
//           <AccessTimeIcon color="action" />
//           <Typography
//             color="textSecondary"
//             display="inline"
//             sx={{ pl: 1 }}
//             variant="body2"
//           >
//             Updated 2hr ago
//           </Typography>
//         </Grid>
//         <Grid
//           item
//           sx={{
//             alignItems: 'center',
//             display: 'flex'
//           }}
//         >
//           <GetAppIcon color="action" />
//           <Typography
//             color="textSecondary"
//             display="inline"
//             sx={{ pl: 1 }}
//             variant="body2"
//           >
//             {product.totalDownloads}
//             {' '}
//             Downloads
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   </Card>
// );

// ProductCard.propTypes = {
//   product: PropTypes.object.isRequired
// };

// export default ProductCard;
