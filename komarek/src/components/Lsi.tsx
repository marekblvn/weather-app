import { useLsi } from "../contexts/LsiContext";

interface LsiObject {
  en: string;
  cs: string;
}

interface Props {
  lsi: LsiObject;
}

function Lsi({ lsi }: Props) {
  const { language } = useLsi();
  return lsi[language];
}

export default Lsi;
