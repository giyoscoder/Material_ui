import React from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Typography,
  Box,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
  DateRange,
} from "@mui/icons-material";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
}));

const Add = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { sm: "calc(50%)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400}  bgcolor={'background.default'} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create post
          </Typography>
          <UserBox>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0h8k13ZL0pN2LZbNEfMxtLIUvdJjiPEwXQ&usqp=CAU"></Avatar>
            <Typography variant="span" fontWeight={500}>
              Jone Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind!"
            variant="standard"
          />

          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label='outlined primary button group'>
            <Button>Post</Button>
            <Button sx={{width: '100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;
