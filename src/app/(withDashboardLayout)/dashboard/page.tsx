import Donors from "@/app/(withCommonLayout)/donors/page";
import { Typography } from "@mui/material";

const DashboardHomePage = () => {
  return (
    <div>
      <Typography
          variant="h4"
          textAlign="center"
          mt={10}
        >
          Dashboard analytics coming soon...
      </Typography>
       <Donors />
    </div>
  );
};

export default DashboardHomePage;
