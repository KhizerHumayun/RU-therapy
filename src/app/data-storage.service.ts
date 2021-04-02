import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Post } from './client-profile/post.model';
import { ProcounselorService } from './client-profile/procounselor.service';
import { Appointment } from './client-profile/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private procounselorService: ProcounselorService) { }

    
  fetchCounselorData(){
   return this.http
    .get<{ [key: string]: Post}>('https://rutherapy-a6a5f-default-rtdb.firebaseio.com/counselor.json')
    .pipe(
      map(responseData => {
        const postsArray: Post[] = [];
        for ( const key in responseData){
          if (responseData.hasOwnProperty(key)){
          postsArray.push({ ...responseData[key], id: key})
      }
    }
    return postsArray;
    })); 
  }

  fetchAppointmentData(){
    return this.http
     .get<{ [key: string]: Appointment}>('https://rutherapy-a6a5f-default-rtdb.firebaseio.com/client.json')
     .pipe(
       map(responseData => {
         const appointmentArray: Appointment[] = [];
         for ( const key in responseData){
           if (responseData.hasOwnProperty(key)){
            appointmentArray.push({ ...responseData[key], id: key})
       }
     }
     return appointmentArray;
     }));
   }

}
