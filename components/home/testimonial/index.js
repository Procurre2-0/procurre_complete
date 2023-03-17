import React from "react";
import { Container, Grid, IconButton } from "@mui/material";
import BazaarCard from "./components/BazaarCard";
import { H4, Span } from "./components/Typography";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayment, MdSecurity } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
const serviceList = [
  {
    id: "5f9bd366-9583-4e6d-9b11-abe74b9c5d96",
    icon: "TbTruckDelivery",
    title: "Worldwide Delivery",
    description: null,
  },
  {
    id: "121cffea-6972-41f8-8094-98dca22d17bb",
    icon: "MdPayment",
    title: "Safe Payment",
    description: null,
  },
  {
    id: "5b94f5d8-71ec-40a6-b5b8-401286deba24",
    icon: "MdSecurity",
    title: "Shop With Confidence",
    description: null,
  },
  {
    id: "8c4bb18f-d914-4269-9c7c-3c6728ba33e9",
    icon: "fiHeadphoneAlt",
    title: "24/7 Support",
    description: null,
  },
];
const CARD_STYLE = {
  p: "3rem",
  height: "100%",
  display: "flex",
  borderRadius: "8px",
  alignItems: "center",
  flexDirection: "column",
}; // ==================================================

// ==================================================
export default function Testimonials() {
  return (
    <Container
      sx={{
        mb: "70px",
      }}
    >
      <Grid container spacing={3}>
        {serviceList.map((item, i) => {
          {
            {
              /* const Icon = appIcons[item.icon]; */
            }
          }
          return (
            <Grid item lg={3} md={6} xs={12} key={item.id}>
              <BazaarCard hoverEffect sx={CARD_STYLE}>
                <IconButton
                  sx={{
                    width: 64,
                    height: 64,
                    fontSize: "1.75rem",
                    backgroundColor: "grey.200",
                  }}
                >
                  {i == 0 ? (
                    <TbTruckDelivery />
                  ) : i == 1 ? (
                    <MdPayment />
                  ) : i == 2 ? (
                    <MdSecurity />
                  ) : i == 3 ? (
                    <TfiHeadphoneAlt />
                  ) : (
                    ""
                  )}
                </IconButton>

                <H4 mt={2.5} mb={1.25} textAlign="center">
                  {item.title}
                </H4>

                <Span textAlign="center" color="grey.600">
                  We offer competitive prices on our 100 million plus product
                  any range.
                </Span>
              </BazaarCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
