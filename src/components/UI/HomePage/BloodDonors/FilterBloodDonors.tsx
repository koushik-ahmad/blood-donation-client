"use client";
import { BloodTypes } from "@/constants";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FilterBloodDonors = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialSearchParams = {
    bloodType: searchParams.get("bloodType") || "",
    searchTerm: searchParams.get("searchTerm") || "",
    availability: searchParams.get("availability") || "",
  };
  const [filters, setFilters] = useState(initialSearchParams);

  const handleSearchChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));

    // Create a URLSearchParams object from the current URL's search params
    const params = new URLSearchParams(searchParams);

    // Update the relevant search parameter
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    // Update the URL without causing a scroll to top
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <Grid container spacing={3} sx={{ mt: ".3rem", mb: ".3rem" }}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Search"
          type="search"
          name="searchTerm"
          placeholder="Search Blood Donors"
          value={filters.searchTerm}
          onChange={handleSearchChange}
          size="small"
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2} justifyContent="end">
          <Grid item xs={6} md={4}>
            <FormControl size="small" fullWidth>
              <InputLabel>Blood Type</InputLabel>
              <Select
                name="bloodType"
                value={filters.bloodType}
                onChange={handleSearchChange}
                label="Blood Type"
              >
                <MenuItem value="">
                  <em>Any</em>
                </MenuItem>
                {BloodTypes.map((bloodType) => (
                  <MenuItem key={bloodType} value={bloodType}>
                    {bloodType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <FormControl size="small" fullWidth>
              <InputLabel>Availability</InputLabel>
              <Select
                name="availability"
                value={filters.availability}
                onChange={handleSearchChange}
                label="Availability"
              >
                <MenuItem value="">
                  <em>Any</em>
                </MenuItem>
                <MenuItem value="true">Available</MenuItem>
                <MenuItem value="false">Not Available</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterBloodDonors;
