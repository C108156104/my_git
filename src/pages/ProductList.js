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

const ProductList = () => {
  const classes = useStyles();
  const [productList, setProductList] = useState();
  const [keyword, setKeyword] = useState();
  let newProduct = {};
  const search = () => {
    fetch('http://localhost/php/searchProduct.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword })
    })
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => {
        setProductList(err);
      });
  };

  const insert = () => {
    fetch('http://localhost/php/insertProduct.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct)
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

  const deleteProduct = (e) => {
    fetch('http://localhost/php/deleteProduct.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ProdID: e.currentTarget.value })
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
  if (productList) {
    const arr = productList.product;
    if (arr) {
      list = (arr.map((product) => (
        <TableRow key={product.ProdID}>
          <TableCell>{product.ProdName}</TableCell>
          <TableCell>{product.ProdID}</TableCell>
          <TableCell>{product.UnitPrice}</TableCell>
          <TableCell>{product.Cost}</TableCell>
          <TableCell>
            <Button
              size="large"
              variant="contained"
              value={product.ProdID}
              onClick={deleteProduct}
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

  const AddNewProduct = (e) => {
    newProduct = {
      ...newProduct,
      [e.target.name]: e.target.value
    };
    console.log(newProduct);
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <Helmet>
        <title>Products | Material Kit</title>
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
                          搜尋產品(Search)
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
                          <TableCell>產品名稱(ProductName)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="ProdName"
                          onChange={AddNewProduct}
                          value={newProduct.ProdName}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>產品代號(ProductID)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="ProdID"
                          onChange={AddNewProduct}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>單價(UnitPrice)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="UnitPrice"
                          onChange={AddNewProduct}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>成本(Cost)</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="Cost"
                          onChange={AddNewProduct}
                        />
                      </Grid>
                      <Grid item container justify="center">
                        <Button
                          size="large"
                          variant="contained"
                          onClick={insert}
                          color="secondary"
                        >
                          新增產品(Add)
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
                    <TableCell>產品名稱(ProductName)</TableCell>
                    <TableCell>產品代號(ProductID)</TableCell>
                    <TableCell>單價(UnitPrice)</TableCell>
                    <TableCell>成本(Cost)</TableCell>
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

export default ProductList;
