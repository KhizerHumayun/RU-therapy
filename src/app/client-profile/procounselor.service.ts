import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})

export class ProcounselorService {
  counselorDataChanged = new Subject<Post[]>();

  private counselorsData: Post[] = [];
  
  constructor(private http: HttpClient) { }

  
  //This sets the data from the database in counselorsData variable of type Post[](which is our data type)
  setCounselorData(counselorData: Post[]) {
    this.counselorsData = counselorData;
    this.counselorDataChanged.next(this.counselorsData.slice());
  }

  //To access the counselorsData through other components, simply call getCounselorData using this service
  getCounselorData() {
    return this.counselorsData.slice();
  }


  getCounselorId(index: number){
    return this.counselorsData[index];
  }


  // getProCounselors(): Observable<Procounselor[]> 
  // {
  //   return of(PROCOUNSELORS);
  // }
}
