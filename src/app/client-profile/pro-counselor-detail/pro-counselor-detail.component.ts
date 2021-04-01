
import { ProcounselorService } from './../procounselor.service';
import { Post } from './../post.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Appointment } from './../appointment.model';
import { Schedule } from './../schedule.model';

@Component({
  selector: 'pro-counselor-detail',
  templateUrl: './pro-counselor-detail.component.html',
  styleUrls: ['./pro-counselor-detail.component.css']
})
export class ProCounselorDetailComponent implements OnInit {

  @Input() proCounselor!: Post;

  selectedDateTime!: string;
  sessionSelected!: Appointment[];
  submitted = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm){
    this.submitted = true;

    console.log(form.value.selectedAppointment)
    this.sessionSelected = form.value.selectedAppointment;
    //Uploading data to firebase 
    this.http
    .post(
      'https://rutherapy-a6a5f-default-rtdb.firebaseio.com/client.json',
      this.sessionSelected
    )
    .subscribe(response => {
      console.log(response);
    });
    this.selectedDateTime = form.value.selectedAppointment;
  }

}
