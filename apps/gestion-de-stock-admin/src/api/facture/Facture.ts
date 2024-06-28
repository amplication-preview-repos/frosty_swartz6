import { Vente } from "../vente/Vente";

export type Facture = {
  createdAt: Date;
  date: Date | null;
  id: string;
  montantTotale: number | null;
  updatedAt: Date;
  vente?: Vente | null;
};
