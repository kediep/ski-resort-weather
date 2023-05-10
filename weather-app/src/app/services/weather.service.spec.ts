import { TestBed } from "@angular/core/testing";
import { WeatherService } from "./weather.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherData } from '../models/weather.model';
import { environment } from "src/environments/environment";

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should create a service', () => {
    expect(service).toBeTruthy();
  })

  it('should make a GET request', () => {
    let dummyPosts: WeatherData = {
      forecast: [],
      basicInfo: {
        region: '',
        name: '',
        url: '',
        topLiftElevation: '',
        midLiftElevation: '',
        botLiftElevation: '',
        lat: '',
        lon: ''
      }
    }
    service.getWeatherData('Breckenridge').subscribe({
      next: (response) => {
        dummyPosts = response;
      }
    });
    let url: string = environment.weatherApiBaseUrl + 'Breckenridge' + '/hourly?units=i&el=top&c=false';
    const request = httpTestingController.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  })

})