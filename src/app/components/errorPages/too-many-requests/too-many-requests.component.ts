import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-too-many-requests',
  templateUrl: './too-many-requests.component.html',
  styleUrls: ['./too-many-requests.component.css']
})
export class TooManyRequestsComponent  {

  @Input() error: boolean = false;

}
