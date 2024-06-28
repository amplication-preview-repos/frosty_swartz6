import { StockUpdateManyWithoutProduitsInput } from "./StockUpdateManyWithoutProduitsInput";
import { VenteUpdateManyWithoutProduitsInput } from "./VenteUpdateManyWithoutProduitsInput";

export type ProduitUpdateInput = {
  description?: string | null;
  nom?: string | null;
  prix?: number | null;
  quantit?: number | null;
  stocks?: StockUpdateManyWithoutProduitsInput;
  ventes?: VenteUpdateManyWithoutProduitsInput;
};
