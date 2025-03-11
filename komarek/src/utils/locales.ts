import daysShort from "../assets/locales/days-short.json";
import months from "../assets/locales/months.json";

const browserLang = navigator.language.slice(0, 2);

export function getLocaleDayShort(day: number): string {
  const lang = browserLang === "cs" ? "cs" : "en";
  return daysShort[lang][day];
}

export function getLocaleMonth(month: number): string {
  const lang = browserLang === "cs" ? "cs" : "en";
  return months[lang][month];
}

export function getLocaleDateFormat(date: Date) {
  const lang = browserLang === "cs" ? "cs" : "en";
  const localeDay = daysShort[lang][date.getDay()];
  const dayOfMonth = date.getDate();
  const localeMonth = months[lang][date.getMonth()];
  if (lang === "cs") {
    return `${localeDay}, ${dayOfMonth}. ${localeMonth}`;
  } else {
    return `${localeDay}, ${localeMonth} ${dayOfMonth}`;
  }
}
