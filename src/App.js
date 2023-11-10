import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";

const App = () => {
  const [mode, setMode] = React.useState("light");
  const darkTeme = createTheme({
    palette: {
      mode: localStorage.getItem("mode") == null ? 'light' : localStorage.getItem("mode"),
    },
  });
  return (
    <ThemeProvider theme={darkTeme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* Navbar */}
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
