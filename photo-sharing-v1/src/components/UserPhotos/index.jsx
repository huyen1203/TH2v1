import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Stack,
  Avatar
} from "@mui/material";
import photos from "../../modelData/models";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString("vi-VN");
}

function UserPhotos() {
  const { userId } = useParams();
  const userPhotos = photos.photoOfUserModel(userId);

  if (userPhotos.length === 0) {
    return <Typography>Người dùng chưa có ảnh nào.</Typography>;
  }

  return (
    <Box display="flex" flexDirection="column" gap={4} mt={2}>
      {userPhotos.map((photo) => (
        <Card key={photo._id} elevation={3}>
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`} 
            alt="User Photo"
            sx={{ maxHeight: 400, objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="caption" color="text.secondary">
               Đăng lúc: {formatDate(photo.date_time)}
            </Typography>

            {photo.comments && photo.comments.length > 0 && (
              <Box mt={2}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  💬 Bình luận:
                </Typography>
                {photo.comments.map((comment, index) => (
                  <Box key={index} mb={2}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ width: 24, height: 24 }}>
                        {comment.user.first_name[0]}
                      </Avatar>
                      <Typography variant="body2" fontWeight="bold">
                        {comment.user.first_name} {comment.user.last_name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(comment.date_time)}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ ml: 4 }}>
                      {comment.comment}
                    </Typography>
                    <Divider sx={{ mt: 1 }} />
                  </Box>
                ))}
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default UserPhotos;
