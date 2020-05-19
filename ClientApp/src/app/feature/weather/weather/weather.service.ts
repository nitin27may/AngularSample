import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { environment } from "../../../../environments/environment";

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {}

  GetWeathers() {
    return this.http.get<WeatherForecast[]>(
      environment.apiEndpoint + "weatherforecast"
    );
  }

  GetUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
