import { SyntheticEvent, useEffect, useState } from "react";
import {
  Container,
  Grid2,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import Today from "../components/Today";
import Details from "../components/Details";
import useIsMobileDevice from "../hooks/useIsMobileDevice";
import TabPanel from "../components/TabPanel";
import useGet from "../hooks/useGet";
import { getForecast } from "../services/api";
import Lsi from "../components/Lsi";
import NextDays from "../components/NextDays";
import ErrorSnackbar from "../components/ErrorSnackbar";
import FullPagePending from "../components/FullPagePending";
import HourlyTemperature from "../components/HourlyTemperature";

function Home() {
  const { data, loading, error } = useGet(getForecast, {
    days: 8,
  });

  const isMobileDevice: boolean = useIsMobileDevice();
  const isDesktop: boolean = useMediaQuery("(min-width: 770px)");
  const [tab, setTab] = useState<number>(0);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      setShowSnackbar(true);
    }
  }, [error]);

  function handleCloseSnackbar() {
    setShowSnackbar(false);
  }

  function handleChangeTab(_: SyntheticEvent, newValue: number): void {
    setTab(newValue);
  }

  if (loading) return <FullPagePending />;

  const todayHourly = data?.forecast.forecastday[0].hour;

  return (
    <>
      {data && (
        <Grid2 container>
          <Grid2 size={12}>
            <Today
              locationData={data.location}
              temp={data.current.temp_c}
              icon={data.current.condition.icon}
              lastUpdated={data.current.last_updated}
            />
            <HourlyTemperature temperatureData={todayHourly} />
          </Grid2>
          {isMobileDevice ? (
            <Grid2 size={12} flexGrow={1}>
              <Tabs
                value={tab}
                onChange={handleChangeTab}
                selectionFollowsFocus
                centered
                variant="fullWidth"
              >
                <Tab
                  label={<Lsi lsi={{ en: "Today", cs: "Dnes" }} />}
                  value={0}
                />
                <Tab
                  label={<Lsi lsi={{ en: "Next Days", cs: "Další dny" }} />}
                  value={1}
                />
              </Tabs>
              <Grid2 size={12} flexGrow={1}>
                <TabPanel value={tab} index={0}>
                  <Details data={data.current} />
                </TabPanel>
              </Grid2>
              <Grid2 size={12} flexGrow={1}>
                <TabPanel value={tab} index={1}>
                  <NextDays data={data.forecast} />
                </TabPanel>
              </Grid2>
            </Grid2>
          ) : (
            <Container
              maxWidth={false}
              sx={{
                display: "grid",
                gridTemplateColumns: "auto",
                gridTemplateRows: "auto",
              }}
            >
              <Details data={data.current} />
              <NextDays data={data.forecast} />
            </Container>
          )}
        </Grid2>
      )}
      <ErrorSnackbar
        open={showSnackbar}
        onClose={handleCloseSnackbar}
        error={error}
      />
    </>
  );
}

export default Home;
