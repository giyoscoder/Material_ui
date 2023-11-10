import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={450}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} total={24}>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0h8k13ZL0pN2LZbNEfMxtLIUvdJjiPEwXQ&usqp=CAU" />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeUQdIHIXpWTrCzJIiJMNqhpoMS0RmNOKsslnQ5CMkguyK8rohmAVKcmQ-Y1SRPSw0pg&usqp=CAU" />
          <Avatar />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNV5zTzZZgGzfZE0WIBSDiYxCp7sh1824Nw&usqp=CAU" />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGgoJx_RB_PRW0FV-xuuu5RYJm4i8cCDNDKIe6aqNXU0w2VZHso2o7yi0h70zZotY9ro&usqp=CAU" />
          <Avatar src="https://img.freepik.com/free-photo/artist-white_1368-3546.jpg" />
          <Avatar sx={{ backgroundColor: "orange" }}>NG</Avatar>
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg"
              alt="image"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg"
              alt="image"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg"
              alt="image"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Comments
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
