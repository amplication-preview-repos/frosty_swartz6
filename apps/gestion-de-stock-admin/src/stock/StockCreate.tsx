import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ProduitTitle } from "../produit/ProduitTitle";

export const StockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="produit.id" reference="Produit" label="Produit">
          <SelectInput optionText={ProduitTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantité" source="quantit" />
      </SimpleForm>
    </Create>
  );
};
