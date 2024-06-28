import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type FactureCreateInput = {
  date?: Date | null;
  montantTotale?: number | null;
  vente?: VenteWhereUniqueInput | null;
};
