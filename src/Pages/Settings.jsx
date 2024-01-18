import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";

const Settings = () => {
  return (
    <div>
      <Navbar />
      <Box height={60}></Box>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className="text-3xl">SETTINGS</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Settings;
