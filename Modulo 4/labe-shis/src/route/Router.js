import { ListTripsPage } from "../pages/ListTripsPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";

import { HomePage } from "../pages/HomePage";
import { AreaAdmin } from "../pages/AreaAdmin";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { AdminHomePage } from "../pages/AdminHomePage";
import { CreateTripPage } from "../pages/CreateTripPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/login"}>
          <AreaAdmin />
        </Route>

        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/tripdetails"}>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
