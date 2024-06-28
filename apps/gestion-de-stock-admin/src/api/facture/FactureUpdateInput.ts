import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type FactureUpdateInput = {
  date?: Date | null;
  montantTotale?: number | null;
  vente?: VenteWhereUniqueInput | null;
};
