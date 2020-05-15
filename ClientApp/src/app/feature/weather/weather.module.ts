import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { WeatherRoutingModule } from "./weather-routing.module";

import { CoreModule } from "../../../app/core/core.module";
import { SharedModule } from "../../../app/shared/shared.module";

import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from "./weather/weather.service";
import { WeatherComponent } from "./weather/weather.component";

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    NgxDatatableModule,
    WeatherRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    SharedModule.forRoot(),
  ],
  providers: [WeatherService],
  bootstrap: [],
})
export class WeatherModule {}
