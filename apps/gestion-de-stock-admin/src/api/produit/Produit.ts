import { Stock } from "../stock/Stock";
import { Vente } from "../vente/Vente";

export type Produit = {
  createdAt: Date;
  description: string | null;
  id: string;
  nom: string | null;
  prix: number | null;
  quantit: number | null;
  stocks?: Array<Stock>;
  updatedAt: Date;
  ventes?: Array<Vente>;
};
