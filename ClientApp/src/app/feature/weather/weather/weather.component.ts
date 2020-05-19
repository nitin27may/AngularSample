import { Component, OnInit } from "@angular/core";
import { WeatherService } from "./weather.service";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  public forecasts: any;

  public users: any;
  ColumnMode = ColumnMode;
  columns = [
    { prop: "date", name: "Date", pipe: { transform: this.datePipe } },
    { prop: "temperatureC", name: "Temperature (C)" },
    { prop: "temperatureF", name: "Temperature (F)" },
    { prop: "summary", name: "Summary" },
  ];

  userColumns = [
    { prop: "name", name: "Name" },
    { prop: "username", name: "User Name" },
    { prop: "email", name: "Email" },
    { prop: "website", name: "Website" },
  ];
  name: string;
  constructor(
    private weatherService: WeatherService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getWeatherInfo();
    this.getUser();
    this.translate.use("fr");
  }

  private getWeatherInfo() {
    this.weatherService.GetWeathers().subscribe(
      (result: WeatherForecast[]) => {
        this.forecasts = result;
      },
      (error) => console.error(error)
    );
  }

  private getUser() {
    this.weatherService.GetUsers().subscribe(
      (result: WeatherForecast[]) => {
        this.users = result;
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
