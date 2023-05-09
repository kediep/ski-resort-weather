import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule, FormsModule, AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  // it('should get resort name', () => {
  //   expect(app.resortName).toBe('Breckenridge');
  // });

  // it('should get location', () => {
  //   expect(app.getLocation()).toBe('Breckenridge');
  // });

  // it('should get whether it is daytime', () => {
  //   let currentHour = Number(new Date().toLocaleTimeString([], {hour: '2-digit', hour12: false}));
  //   if (currentHour <= 6 || currentHour >= 20) {
  //     expect(app.isDayTime()).toBeFalse();
  //   } else {
  //     expect(app.isDayTime()).toBeTrue();
  //   }
  // });

  // it('should get the summary', () => {
  //   expect(app.getSummary() == 'some clouds' || app.getSummary() == 'snow showers' || app.getSummary() == 'clear').toBeTrue();
  // });


});
