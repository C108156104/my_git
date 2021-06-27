import { useContext } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { currentUser } from 'src/components/DashboardSidebar';

const AccountProfileDetails = (props) => {
  const user = useContext(currentUser);

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={user.EmpName}
                variant="outlined"
                disabled="true"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={user.Phone}
                variant="outlined"
                disabled="true"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Department ID"
                name="deptId"
                value={user.DeptId}
                variant="outlined"
                disabled="true"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={user.JobTitle}
                variant="outlined"
                disabled="true"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                name="city"
                value={user.City}
                variant="outlined"
                disabled="true"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={user.Address}
                variant="outlined"
                disabled="true"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
