import React from "react";
import {
  Box,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Switch,
} from "@mui/material";

interface TableExpandCellProps {
  value: {
    name: {
      name: string;
    };
    sku: string;
    price: number;
  };
}

const TableExpandCell = ({ value }: TableExpandCellProps) => {
  console.log("value", value);
  return (
    <Box>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Typography variant="h6">Basic details</Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={value.name.name}
                  fullWidth
                  label="Product name"
                  name="name"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={value.sku}
                  disabled
                  fullWidth
                  label="SKU"
                  name="sku"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h6">Pricing and stocks</Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={value.price}
                  fullWidth
                  label="Old price"
                  name="old-price"
                  type="number"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={value.price}
                  fullWidth
                  label="New price"
                  name="new-price"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  type="number"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Switch />
                <Typography variant="subtitle2">
                  Keep selling when stock is empty
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
};

export default TableExpandCell;
