import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUIT_TITLE_FIELD } from "./ProduitTitle";

export const ProduitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="nom" source="nom" />
        <TextField label="prix" source="prix" />
        <TextField label="quantité" source="quantit" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Stock" target="produitId" label="Stocks">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Produit"
              source="produit.id"
              reference="Produit"
            >
              <TextField source={PRODUIT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantité" source="quantit" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Vente" target="produitId" label="Ventes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Produit"
              source="produit.id"
              reference="Produit"
            >
              <TextField source={PRODUIT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="quantité" source="quantit" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
