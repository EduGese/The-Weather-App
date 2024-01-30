import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.css'],
})
export class DayCardComponent {
  @Input() forecastDailyData: any;
  @Output() codesEventDay = new EventEmitter<any>();
  currentDate: Date = new Date();
  iconClass: string = '';
  phrase: string = '';

  setIconClass(iconClass: string) {
    this.iconClass = iconClass;
  }

  setPhrase(phrase: string) {
    this.phrase = phrase;
  }

  getIconClass(weatherCode: number, isDay: number) {
    const iconInfo = {
      weatherCode: weatherCode,
      isDay: isDay,
      component: 'day-component',
    };
    this.codesEventDay.emit(iconInfo);
    return this.iconClass;
  }
  
}
