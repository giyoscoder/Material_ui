import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
