import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  
  }

  weatherData?: WeatherData;
  resortName: string = 'Breckenridge'

  ngOnInit(): void {
    this.getWeatherData(this.resortName);
  }

  onSubmit() {
    this.getWeatherData(this.resortName);
  }


  isDayTime() {
    const weatherTime = this.weatherData?.forecast[this.weatherData?.forecast.length - 1].time;
    const time = Number(weatherTime?.replace(/[^0-9\.]+/g, ""));
    const meridiem = weatherTime?.slice(-2);
    return (meridiem === "AM" && time > 6) || (meridiem === "PM" && time < 8);
  }

  getLocation() {
    return this.weatherData?.basicInfo.name;
  }

  getSummary() {
    return this.weatherData?.forecast[this.weatherData?.forecast.length - 1].summary ?? '';
  }

  getTemperature() {
    return this.weatherData?.forecast[this.weatherData?.forecast.length - 1].maxTemp ?? '';
  }

  getWindSpeed() {
    return this.weatherData?.forecast[this.weatherData?.forecast.length - 1].windSpeed ?? '';
  }

  getWindDirection() {
    return this.weatherData?.forecast[this.weatherData?.forecast.length - 1].windDirection ?? '';
  }

  getRain() {
    return this.weatherData?.forecast[this.weatherData?.forecast.length - 1].rain ?? '';
  }

  getHumidity() {
    return this.weatherData?.forecast[this.weatherData?.forecast.length - 1].humidity ?? '';
  }

  private getWeatherData(resortName: string) {
    this.weatherService.getWeatherData(resortName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    });
  }

}
