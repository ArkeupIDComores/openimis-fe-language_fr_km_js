import messages_km from "./translations/km.json";
import flatten from "flat";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'fr_KM', messages: flatten(messages_km) }],
}

export const LanguageKmModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}
