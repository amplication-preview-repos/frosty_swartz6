import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FactureListRelationFilter } from "../facture/FactureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VenteWhereInput = {
  date?: DateTimeNullableFilter;
  factures?: FactureListRelationFilter;
  id?: StringFilter;
  produit?: ProduitWhereUniqueInput;
  quantit?: IntNullableFilter;
};
