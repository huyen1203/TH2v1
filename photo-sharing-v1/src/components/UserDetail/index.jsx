import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Box,
  Link as MuiLink
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import users from "../../modelData/models";
import "./styles.css";

function UserDetail() {
    const {userId} = useParams();
    const user = users.userModel(userId);

    if (!user) {
      return <Typography color="error">Không tìm thấy người dùng.</Typography>;
    }
    return (
      <Card elevation={4} sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
         
          <Box>
            <Typography variant="h5">
              {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user.occupation} • {user.location}
            </Typography>
          </Box>
        </Stack>

        <Typography variant="body1" sx={{ mt: 2 }}>
          {user.description}
        </Typography>

        <Box mt={3}>
          <MuiLink
            component={Link}
            to={`/photos/${userId}`}
            underline="hover"
            color="primary"
            fontWeight="bold"
          >
             Xem ảnh chi tiết
          </MuiLink>
        </Box>
      </CardContent>
    </Card>
    );
}

export default UserDetail;
