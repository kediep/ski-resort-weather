import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let weatherComponent: WeatherComponent;
  let logo: HTMLElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      declarations: [AppComponent, WeatherComponent],
      providers: [WeatherService, { provide: ComponentFixtureAutoDetect, useValue: true}]
    })
    fixture = TestBed.createComponent(AppComponent);
    weatherComponent = fixture.nativeElement.querySelector('app-weather');
    logo = fixture.nativeElement.querySelector('img');
  });
  
  it('should load in weather component', () => {
    expect(weatherComponent).toBeTruthy();
  });

  it('should have a footer logo', () => {
    expect(logo).toBeTruthy();
  });
});
