"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/icons/logo2.png";
import { useState } from "react";
import { logoutUser } from "@/services/actions/logoutUser";
import useUserInfo from "@/hooks/useUserInfo";

const Navbar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogOut = () => {
    logoutUser(router);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Link href="/">
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
      </Box>
      <Divider />
      <List>
        <ListItem component={Link} href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} href="/donors">
          <ListItemText primary="Donors" />
        </ListItem>
        <ListItem component={Link} href="/about">
          <ListItemText primary="About Us" />
        </ListItem>

        {userInfo?.userId && (
          <ListItem component={Link} href="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        )}

        {userInfo?.userId ? (
          <ListItem onClick={handleLogOut}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <ListItem component={Link} href="/login">
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "lightBlue", position: "sticky", top: 0, zIndex: 999 }}>
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: 60,
                height: 60,
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </Box>
            <Box>
              <Typography
                variant="h4"
                component={Link}
                href="/"
                fontWeight={600}
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "24px",
                    lg: "32px",
                  },
                }}
              >
                <Box component="span" color="red">
                  BlOOD
                </Box>{" "}
                CARE
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-between"
            gap={4}
            sx={{
              display: { xs: "none", md: "flex" },
              marginRight: {
                lg: 5,
              },
            }}
          >
            <Typography component={Link} href="/">
              Home
            </Typography>
            <Typography component={Link} href="/donors">
              Donors
            </Typography>
            <Typography component={Link} href="/about">
              About Us
            </Typography>
            {userInfo?.userId && (
              <Typography component={Link} href="/dashboard">
                Dashboard
              </Typography>
            )}
          </Stack>

          {userInfo?.userId ? (
            <Stack
              direction="row"
              justifyContent="space-between"
              gap={4}
              sx={{
                display: { xs: "none", md: "flex" },
                marginRight: {
                  lg: 5,
                },
              }}
            >
              <Button
                onClick={handleLogOut}
                color="error"
                sx={{ boxShadow: 0 }}
              >
                Logout
              </Button>
            </Stack>
          ) : (
            <Button
              component={Link}
              href="/login"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Login
            </Button>
          )}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
