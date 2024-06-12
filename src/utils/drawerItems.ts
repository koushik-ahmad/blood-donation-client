import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

// Function to generate drawer items based on role
export const drawerItems = (role: UserRole): DrawerItem[] => {
  const defaultMenus: DrawerItem[] = [
    {
      title: "Profile",
      path: "profile",
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: "change-password",
      icon: KeyIcon,
    },
  ];

  // Role-specific menu items
  const adminMenus: DrawerItem[] = [
    {
      title: "Dashboard",
      path: "",
      icon: DashboardIcon,
    },
    {
      title: "Donors",
      path: "donors",
      icon: BloodtypeIcon,
    },
  ];

  // User-specific menu items (if any)
  const userMenus: DrawerItem[] = [
    // Define user-specific menu items here
  ];

  // Return menu items based on role
  switch (role) {
    case USER_ROLE.ADMIN:
      return [...adminMenus, ...defaultMenus];

    case USER_ROLE.USER:
      return [...userMenus, ...defaultMenus];

    default:
      return defaultMenus;
  }
};
