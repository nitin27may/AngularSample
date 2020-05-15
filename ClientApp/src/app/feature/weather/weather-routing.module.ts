import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { AuthGuard } from "../../../app/core/guards";
import { LayoutComponent } from "../../../app/core/layout/layout.component";
import { WeatherComponent } from "./weather/weather.component";

const userRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: WeatherComponent,
        // canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
