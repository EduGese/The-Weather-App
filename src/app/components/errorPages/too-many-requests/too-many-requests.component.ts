import { DataService } from 'src/app/services/dataService/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-too-many-requests',
  templateUrl: './too-many-requests.component.html',
  styleUrls: ['./too-many-requests.component.css']
})
export class TooManyRequestsComponent  implements OnInit{
 
 error: boolean = false;

 constructor(private dataService: DataService){}
 
 
  ngOnInit(): void {
    this.dataService.getError().subscribe((error: boolean)=>{
      this.error = error;
    })
  }

 

}
