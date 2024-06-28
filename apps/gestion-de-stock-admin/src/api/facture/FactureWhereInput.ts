import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { VenteWhereUniqueInput } from "../vente/VenteWhereUniqueInput";

export type FactureWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  montantTotale?: FloatNullableFilter;
  vente?: VenteWhereUniqueInput;
};
