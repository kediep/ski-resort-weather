import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [WeatherService, { provide: ComponentFixtureAutoDetect, useValue: true}]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
  });

  it('should have default resort loaded', () => {
    expect(component.resortName).toContain('Breckenridge');
  });

  it('should have the right background picture depending on time', () => {
    if (component.isDayTime()) {
      expect(fixture.nativeElement.querySelector('img').src).toContain('daytime.png');
    } else {
      expect(fixture.nativeElement.querySelector('img').src).toContain('nighttime.png');
    }
  })

});
