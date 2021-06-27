import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  Container,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Grid
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Search as SearchIcon } from 'react-feather';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const OrdList = () => {
  const classes = useStyles();
  const [ordList, setOrdList] = useState();
  const [keyword, setKeyword] = useState();
  let newOrd = {};
  const search = () => {
    fetch('http://localhost/php/searchOrderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword })
    })
      .then((res) => res.json())
      .then((data) => {
        setOrdList(data);
      })
      .catch((err) => {
        setOrdList(err);
      });
  };

  const insert = () => {
    fetch('http://localhost/php/insertOrderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrd)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        search();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteOrderdetail = (e) => {
    fetch('http://localhost/php/deleteOrderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seq: e.currentTarget.value })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        search();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let list = (<></>);
  if (ordList) {
    const arr = ordList.orderdetail;
    if (arr) {
      list = (arr.map((orderdetail) => (
        <TableRow key={orderdetail.OrderId}>
          <TableCell>{orderdetail.seq}</TableCell>
          <TableCell>{orderdetail.OrderId}</TableCell>
          <TableCell>{orderdetail.ProdId}</TableCell>
          <TableCell>{orderdetail.Qty}</TableCell>
          <TableCell>{orderdetail.Discount}</TableCell>
          <TableCell>
            <Button
              size="large"
              variant="contained"
              value={orderdetail.seq}
              onClick={deleteOrderdetail}
              color="secondary"
            >
              刪除(Delete)
            </Button>
          </TableCell>

        </TableRow>
      ))
      );
    }
  }

  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const AddnewOrd = (e) => {
    newOrd = {
      ...newOrd,
      [e.target.name]: e.target.value
    };
    console.log(newOrd);
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <Helmet>
        <title>Orderdetail | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box>
              <Box>
                <Card>
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item>
                        <TextField
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SvgIcon
                                  fontSize="small"
                                  color="action"
                                >
                                  <SearchIcon />
                                </SvgIcon>
                              </InputAdornment>
                            )
                          }}
                          variant="outlined"
                          onChange={changeKeyword}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          size="large"
                          variant="contained"
                          onClick={search}
                          color="secondary"
                        >
                          搜尋訂單(Search)
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Box>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item>
                        <TableRow>
                          <TableCell>序號(seq)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="seq"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>訂單編號(OrderId)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="OrderId"
                          onChange={AddnewOrd}
                          value={newOrd.ProdName}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>產品代號(ProdId)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="ProdId"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>數量(Qty)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="Qty"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>折扣(Discount)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="Discount"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item container justify="center">
                        <Button
                          size="large"
                          variant="contained"
                          onClick={insert}
                          color="secondary"
                        >
                          新增訂單(Add)
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: 3 }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>序號(seq)</TableCell>
                    <TableCell>訂單編號(OrderId)</TableCell>
                    <TableCell>產品代號(ProdId)</TableCell>
                    <TableCell>數量(Qty)</TableCell>
                    <TableCell>折扣(Discount)</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OrdList;
