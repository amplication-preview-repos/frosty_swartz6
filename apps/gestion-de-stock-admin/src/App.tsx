import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StockList } from "./stock/StockList";
import { StockCreate } from "./stock/StockCreate";
import { StockEdit } from "./stock/StockEdit";
import { StockShow } from "./stock/StockShow";
import { ProduitList } from "./produit/ProduitList";
import { ProduitCreate } from "./produit/ProduitCreate";
import { ProduitEdit } from "./produit/ProduitEdit";
import { ProduitShow } from "./produit/ProduitShow";
import { FactureList } from "./facture/FactureList";
import { FactureCreate } from "./facture/FactureCreate";
import { FactureEdit } from "./facture/FactureEdit";
import { FactureShow } from "./facture/FactureShow";
import { VenteList } from "./vente/VenteList";
import { VenteCreate } from "./vente/VenteCreate";
import { VenteEdit } from "./vente/VenteEdit";
import { VenteShow } from "./vente/VenteShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GestionDeStock"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Stock"
          list={StockList}
          edit={StockEdit}
          create={StockCreate}
          show={StockShow}
        />
        <Resource
          name="Produit"
          list={ProduitList}
          edit={ProduitEdit}
          create={ProduitCreate}
          show={ProduitShow}
        />
        <Resource
          name="Facture"
          list={FactureList}
          edit={FactureEdit}
          create={FactureCreate}
          show={FactureShow}
        />
        <Resource
          name="Vente"
          list={VenteList}
          edit={VenteEdit}
          create={VenteCreate}
          show={VenteShow}
        />
      </Admin>
    </div>
  );
};

export default App;
