import { SyntheticEvent, useState } from "react";
import Today from "../components/Today";
import { Card, Divider, Grid2, Tab, Tabs } from "@mui/material";
import Details from "../components/Details";
import useIsMobileDevice from "../hooks/useIsMobileDevice";
import TabPanel from "../components/TabPanel";
import useGet from "../hooks/useGet";
import { getCurrentByLanAndLon } from "../services/api";
import Lsi from "../components/Lsi";

function Home() {
  const { data, loading, error } = useGet(getCurrentByLanAndLon, {
    lat: 50.075539,
    lon: 14.4378,
  });
  const isMobileDevice: boolean = useIsMobileDevice();
  const [tab, setTab] = useState<number>(0);
  function handleChangeTab(event: SyntheticEvent, newValue: number): void {
    setTab(newValue);
  }
  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>Error: {error}</p>}
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
            <Grid2 size={12}>
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
              <TabPanel value={tab} index={0}>
                <Details data={data.current} />
              </TabPanel>
              <TabPanel value={tab} index={1}>
                <p>Next days</p>
              </TabPanel>
            </Grid2>
          ) : (
            <Grid2 container size={12} spacing="8px">
              <Grid2 size={7}>
                <Details data={data.current} />
              </Grid2>
              <Divider orientation="vertical" flexItem />
              <Grid2 size={4}>
                <Card>Next days</Card>
              </Grid2>
            </Grid2>
          )}
        </Grid2>
      )}
    </>
  );
}

export default Home;
