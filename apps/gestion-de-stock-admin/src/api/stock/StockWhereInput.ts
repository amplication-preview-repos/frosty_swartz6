import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProduitWhereUniqueInput } from "../produit/ProduitWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StockWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  produit?: ProduitWhereUniqueInput;
  quantit?: IntNullableFilter;
};
