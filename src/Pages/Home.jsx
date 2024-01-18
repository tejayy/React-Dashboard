import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1 className="text-3xl">HOME</h1>
      </Box>
    </Box>
  );
};

export default Home;
