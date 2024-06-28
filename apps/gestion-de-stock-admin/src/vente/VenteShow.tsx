import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VENTE_TITLE_FIELD } from "./VenteTitle";
import { PRODUIT_TITLE_FIELD } from "../produit/ProduitTitle";

export const VenteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Produit" source="produit.id" reference="Produit">
          <TextField source={PRODUIT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantité" source="quantit" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Facture"
          target="venteId"
          label="Factures"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="montantTotale" source="montantTotale" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Vente" source="vente.id" reference="Vente">
              <TextField source={VENTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
