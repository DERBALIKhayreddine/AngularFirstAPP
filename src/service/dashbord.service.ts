import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/models/Article';
import { EventsModel } from 'src/models/Event';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  constructor(private http:HttpClient) {

  }

  getAllMemebers():Observable<Member[]>{
    return this.http.get<Member[]>('http://localhost:3000/members');
  }

  getAllAricles():Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:3000/articles');

  }


  getAllEnvents():Observable<EventsModel[]>{
    return this.http.get<EventsModel[]>('http://localhost:3000/Events');

  }
}
