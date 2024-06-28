import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VENTE_TITLE_FIELD } from "../vente/VenteTitle";

export const FactureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Factures"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
