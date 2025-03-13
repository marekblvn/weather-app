import {
  Box,
  Container,
  Paper,
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
import DayIcon from "@mui/icons-material/Today";
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
        <TableRow
          key={entry.date_epoch}
          sx={{
            height: { xs: "32px", md: "56px" },
            "& td": { border: 0 },
          }}
        >
          <TableCell
            align="center"
            sx={{ position: "sticky", left: 0, backgroundColor: "#e3d0d0" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              rowGap="2px"
              width="100%"
              height="100%"
            >
              <img
                src={icon}
                alt=""
                width={isDesktop ? "32px" : "24px"}
                height={isDesktop ? "32px" : "24px"}
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
              fontSize={isDesktop ? "14px" : "11px"}
            >{`${maxtemp_c.toFixed(0)}${isDesktop ? " " : ""}°C`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
              fontSize={isDesktop ? "14px" : "11px"}
            >{`${mintemp_c.toFixed(0)}${isDesktop ? " " : ""}°C`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
              fontSize={isDesktop ? "14px" : "11px"}
            >{`${avghumidity}%`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
              fontSize={isDesktop ? "14px" : "11px"}
            >{`${daily_chance_of_rain}%`}</Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant={isDesktop ? "subtitle1" : "caption"}
              textAlign="center"
              fontSize={isDesktop ? "14px" : "11px"}
            >{`${daily_chance_of_snow}%`}</Typography>
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <TableContainer
      sx={{
        padding: 0,
        justifyContent: "space-between",
        borderRadius: "16px",
        maxWidth: "1536px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: { xs: "0", sm: "24px", md: "32px" },
        scrollbarWidth: "100px",
      }}
      component={Paper}
    >
      <Table size="small" sx={{ "& table": { border: 0 } }}>
        <TableHead>
          <TableRow
            sx={{ height: { xs: "32px", md: "50px" }, "& td": { border: 0 } }}
          >
            <TableCell
              align="center"
              sx={{
                position: "sticky",
                left: 0,
                backgroundColor: "#d0b0b0",
              }}
            >
              <Box width="100%" height="100%">
                <DayIcon
                  sx={{
                    paddingTop: "2px",
                    width: isDesktop ? "32px" : "20px",
                    height: isDesktop ? "32px" : "20px",
                  }}
                  style={{ color: "#905656" }}
                />
              </Box>
            </TableCell>
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
