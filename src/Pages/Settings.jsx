import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";

const Settings = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="text-3xl">SETTINGS</h1>
      </Box>
    </Box>
  );
};

export default Settings;
