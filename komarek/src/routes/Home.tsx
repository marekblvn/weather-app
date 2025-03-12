import { SyntheticEvent, useEffect, useState } from "react";
import { Divider, Grid2, Tab, Tabs } from "@mui/material";
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

function Home() {
  const { data, loading, error } = useGet(getForecast, {
    days: 8,
  });

  const isMobileDevice: boolean = useIsMobileDevice();
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

  function handleChangeTab(event: SyntheticEvent, newValue: number): void {
    setTab(newValue);
  }
  return (
    <>
      {loading && <FullPagePending />}
      {data && (
        <Grid2 container>
          <Grid2 size={12}>
            <Today
              locationData={data.location}
              temp={data.current.temp_c}
              icon={data.current.condition.icon}
              lastUpdated={data.current.last_updated}
            />
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
            <Grid2 container size={12} spacing="8px">
              <Grid2
                size={{ xs: 6, sm: 5, md: 7 }}
                marginTop="64.5px"
                height="100%"
                flexGrow={1}
              >
                <Details data={data.current} />
              </Grid2>
              <Divider orientation="vertical" flexItem />
              <Grid2 size={4} flexGrow={1} container>
                <NextDays data={data.forecast} />
              </Grid2>
            </Grid2>
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
