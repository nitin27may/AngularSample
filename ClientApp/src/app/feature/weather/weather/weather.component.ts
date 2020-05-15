import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather.service";
import { ColumnMode } from "@swimlane/ngx-datatable";
@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  public forecasts: any;
  ColumnMode = ColumnMode;
  columns = [
    { prop: "date", name: "Date", pipe: { transform: this.datePipe } },
    { prop: "temperatureC", name: "Temperature (C)" },
    { prop: "temperatureF", name: "Temperature (F)" },
    { prop: "summary", name: "Summary" },
  ];
  name: string;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherInfo();
  }

  private getWeatherInfo() {
    this.weatherService.GetWeathers().subscribe(
      (result: WeatherForecast[]) => {
        this.forecasts = result;
      },
      (error) => console.error(error)
    );
  }
  datePipe(value: any, ...args: any[]) {
    return new Date(value).toLocaleString("en-CA");
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
