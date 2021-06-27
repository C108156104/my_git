import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const ProductListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button
        variant="contained"
      >
        Add new product
      </Button>
      <Button
        sx={{ mx: 2 }}
        variant="contained"
      >
        Update products
      </Button>
      <Button
        variant="contained"
        color="secondary"
      >
        Delete products
      </Button>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Box>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
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
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Button
          variant="contained"
        >
          Search products
        </Button>
      </Box>
    </Box>
  </Box>
);

export default ProductListToolbar;
