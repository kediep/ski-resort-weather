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

  private weatherData?: WeatherData;
  resortName: string = 'Breckenridge'
  private summary: string = '';
  private temperature: string = '';
  private windSpeed: string = '';
  private windDirection: string = '';
  private rain: string = '';
  private humidity: string = '';

  ngOnInit(): void {
    this.getWeatherData(this.resortName);
  }

  onSubmit() {
    this.getWeatherData(this.resortName);
  }

  isDayTime() {
    const currentHour = Number(new Date().toLocaleTimeString([], {hour: '2-digit', hour12: false}));
    return (currentHour > 6) || (currentHour < 20);
  }

  getLocation() {
    this.setLocation();
    return this.resortName;
  }

  setLocation(): void {
    this.resortName = this.weatherData?.basicInfo.name ?? '';
  }

  getSummary() {
    this.setSummary();
    return this.summary;
  }

  setSummary(): void {
    this.summary = this.weatherData?.forecast[this.weatherData?.forecast.length - 1].summary ?? '';
  }

  getTemperature() {
    this.setTemperature();
    return this.temperature;
  }

  setTemperature() {
    this.temperature = this.weatherData?.forecast[this.weatherData?.forecast.length - 1].maxTemp ?? '';
  }

  getWindSpeed() {
    this.setWindSpeed();
    return this.windSpeed;
  }

  setWindSpeed() {
    this.windSpeed = this.weatherData?.forecast[this.weatherData?.forecast.length - 1].windSpeed ?? '';
  }
  

  getWindDirection() {
    this.setWindDirection();
    return this.windDirection;
  }

  setWindDirection() {
    this.windDirection = this.weatherData?.forecast[this.weatherData?.forecast.length - 1].windDirection ?? '';
  }

  getRain() {
    this.setRain();
    return this.rain;
  }

  setRain() {
    this.rain = this.weatherData?.forecast[this.weatherData?.forecast.length - 1].rain ?? '';
  }

  getHumidity() {
    this.setHumidity();
    return this.humidity;
  }

  setHumidity() {
    this.humidity = this.weatherData?.forecast[this.weatherData?.forecast.length - 1].humidity ?? '';
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
