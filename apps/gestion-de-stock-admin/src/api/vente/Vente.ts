import { Facture } from "../facture/Facture";
import { Produit } from "../produit/Produit";

export type Vente = {
  createdAt: Date;
  date: Date | null;
  factures?: Array<Facture>;
  id: string;
  produit?: Produit | null;
  quantit: number | null;
  updatedAt: Date;
};
