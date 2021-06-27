import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import { useContext } from 'react';
import { currentUser } from 'src/components/DashboardSidebar';

const AccountProfile = (props) => {
  const user = useContext(currentUser);
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.EmpName}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.JobTitle}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="secondary"
          fullWidth
          variant="contained"
        >
          上傳照片
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
