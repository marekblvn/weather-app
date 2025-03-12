import {
  Box,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MaxTempIcon from "../assets/icons/temperature-up.svg";
import MinTempIcon from "../assets/icons/temperature-down.svg";
import HumidityIcon from "../assets/icons/humidity.svg";
import RainIcon from "../assets/icons/rain.svg";
import SnowIcon from "../assets/icons/snow.svg";
import Lsi from "./Lsi";
import { getLocaleDayShort } from "../utils/locales";

interface Forecast {
  forecastday: Array<Record<string, any>>;
}

interface Props {
  readonly data?: Forecast;
}

function NextDays({ data = { forecastday: [] } }: Props) {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const { forecastday } = data;

  function renderRows(dataArray: Array<Record<string, any>>) {
    return dataArray.slice(1).map((entry) => {
      const date = new Date(entry.date);
      const { day } = entry;
      const {
        maxtemp_c,
        mintemp_c,
        avghumidity,
        daily_chance_of_rain,
        daily_chance_of_snow,
        condition,
      } = day;
      const { icon } = condition;
      return (
        <TableRow key={entry.date_epoch}>
          <TableCell align="center">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              rowGap="2px"
            >
              <img
                src={icon}
                alt=""
                width={isDesktop ? "32px" : "22px"}
                height={isDesktop ? "32px" : "22px"}
              />
              <Typography
                fontWeight={700}
                variant={isDesktop ? "subtitle1" : "caption"}
              >
                {getLocaleDayShort(date.getDay())}
              </Typography>
            </Box>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
            >{`${maxtemp_c.toFixed(0)} °C`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
            >{`${mintemp_c.toFixed(0)} °C`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
            >{`${avghumidity}%`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
            >{`${daily_chance_of_rain}%`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
            >{`${daily_chance_of_snow}%`}</Typography>
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <TableContainer
      component="div"
      sx={{
        padding: 0,
        justifyContent: "space-between",
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ maxHeight: "32px" }}>
            <TableCell align="center"></TableCell>
            <TableCell align="center">
              <Tooltip
                placement="top"
                title={
                  <Lsi
                    lsi={{ en: "Max temperature", cs: "Maximální teplota" }}
                  />
                }
              >
                <img
                  src={MaxTempIcon}
                  alt=""
                  width={isDesktop ? "32px" : "20px"}
                  height={isDesktop ? "32px" : "20px"}
                />
              </Tooltip>
            </TableCell>
            <TableCell align="center">
              <Tooltip
                placement="top"
                title={
                  <Lsi
                    lsi={{ en: "Min temperature", cs: "Minimální teplota" }}
                  />
                }
              >
                <img
                  src={MinTempIcon}
                  alt=""
                  width={isDesktop ? "32px" : "20px"}
                  height={isDesktop ? "32px" : "20px"}
                />
              </Tooltip>
            </TableCell>
            <TableCell align="center">
              <Tooltip
                placement="top"
                title={<Lsi lsi={{ en: "Humidity", cs: "Vlhkost" }} />}
              >
                <img
                  src={HumidityIcon}
                  alt=""
                  width={isDesktop ? "32px" : "20px"}
                  height={isDesktop ? "32px" : "20px"}
                />
              </Tooltip>
            </TableCell>
            <TableCell align="center">
              <Tooltip
                placement="top"
                title={
                  <Lsi
                    lsi={{
                      en: "Chance of rain",
                      cs: "Pravděpodobnost deště",
                    }}
                  />
                }
              >
                <img
                  src={RainIcon}
                  alt=""
                  width={isDesktop ? "32px" : "20px"}
                  height={isDesktop ? "32px" : "20px"}
                />
              </Tooltip>
            </TableCell>
            <TableCell align="center">
              <Tooltip
                placement="top"
                title={
                  <Lsi
                    lsi={{
                      en: "Chance of snow",
                      cs: "Pravděpodobnost sněžení",
                    }}
                  />
                }
              >
                <img
                  src={SnowIcon}
                  alt=""
                  width={isDesktop ? "32px" : "20px"}
                  height={isDesktop ? "32px" : "20px"}
                />
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows(forecastday)}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default NextDays;
