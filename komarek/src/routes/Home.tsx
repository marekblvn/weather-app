import { Grid2, useMediaQuery, Tabs, Tab, Card } from "@mui/material";

function Home() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Card component="div" style={{ backgroundColor: "transparent" }}>
          Today
        </Card>
      </Grid2>
      {isMobile ? (
        <Grid2 size={12}>
          <Tabs centered selectionFollowsFocus variant="fullWidth">
            <Tab label="Today" />
            <Tab label="Next days" />
          </Tabs>
        </Grid2>
      ) : (
        <Grid2 container spacing={8} flexGrow={1}>
          <Grid2 size={7}>
            <Card>Details</Card>
          </Grid2>
          <Grid2 size={5}>
            <Card>Next days</Card>
          </Grid2>
        </Grid2>
      )}
    </Grid2>
  );
}

export default Home;
