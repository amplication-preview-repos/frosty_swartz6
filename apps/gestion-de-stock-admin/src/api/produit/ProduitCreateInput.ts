import { StockCreateNestedManyWithoutProduitsInput } from "./StockCreateNestedManyWithoutProduitsInput";
import { VenteCreateNestedManyWithoutProduitsInput } from "./VenteCreateNestedManyWithoutProduitsInput";

export type ProduitCreateInput = {
  description?: string | null;
  nom?: string | null;
  prix?: number | null;
  quantit?: number | null;
  stocks?: StockCreateNestedManyWithoutProduitsInput;
  ventes?: VenteCreateNestedManyWithoutProduitsInput;
};
