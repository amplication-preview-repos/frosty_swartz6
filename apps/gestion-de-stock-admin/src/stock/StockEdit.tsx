import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ProduitTitle } from "../produit/ProduitTitle";

export const StockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="produit.id" reference="Produit" label="Produit">
          <SelectInput optionText={ProduitTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantité" source="quantit" />
      </SimpleForm>
    </Edit>
  );
};
