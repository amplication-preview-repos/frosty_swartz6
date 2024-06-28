import { Produit } from "../produit/Produit";

export type Stock = {
  createdAt: Date;
  date: Date | null;
  id: string;
  produit?: Produit | null;
  quantit: number | null;
  updatedAt: Date;
};
