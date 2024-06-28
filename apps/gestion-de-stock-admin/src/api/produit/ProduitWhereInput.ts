import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";
import { VenteListRelationFilter } from "../vente/VenteListRelationFilter";

export type ProduitWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  nom?: StringNullableFilter;
  prix?: FloatNullableFilter;
  quantit?: IntNullableFilter;
  stocks?: StockListRelationFilter;
  ventes?: VenteListRelationFilter;
};
