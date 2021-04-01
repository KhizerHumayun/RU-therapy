import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataStorageService } from './../../data-storage.service';
import { Appointment } from './../appointment.model';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  appointment!: Appointment[];

  constructor(private dataStorageService: DataStorageService, private http: HttpClient ) {}

  ngOnInit()  {
      this.dataStorageService.fetchAppointmentData().subscribe(data => {
      this.appointment = data;
    });  
  }

}
