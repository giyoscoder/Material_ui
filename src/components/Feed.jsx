import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  CardActions,
  Collapse,
  Checkbox
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {[0,1,2,3].map(value => <Post/>)}
    </Box>
  );
};

export default Feed;
