import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const DonorCard = ({ donor }: any) => {
  const avatar = "https://i.ibb.co/Zh440ym/images-1.png";

  return (
    <Card sx={{ maxWidth: 350, maxHeight: 500, border:"2px solid #bdbdbd" }}>
      <CardMedia
        component="img"
        alt="Donor Image"
        height="120"
        image={donor?.profilePicture ? donor.profilePicture : avatar}
        style={{ objectFit: "cover", height: 200, }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="p">
          Name: {donor?.name}
        </Typography>
        <Typography gutterBottom component="p">
          Email: {donor?.email}
        </Typography>
        <Typography gutterBottom component="p">
          Blood Group: {donor?.bloodType}
        </Typography>
        <Typography gutterBottom component="p">
          Location: {donor?.location}
        </Typography>
        <Typography gutterBottom component="p">
          Status: {donor?.status}
        </Typography>
         {/* <Typography gutterBottom component="p" color={donor.availability ? "green" : "red"}>
          Blood: {donor.availability ? "Available" : "Not Available"}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button color="error" size="small" component={Link} href={`/donors/${donor.id}`}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default DonorCard;