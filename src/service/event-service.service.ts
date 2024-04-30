import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsModel } from 'src/models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http:HttpClient) { }
  getAllEvents() :Observable<EventsModel[]>{
    return this.http.get<EventsModel[]>("http://localhost:3000/Events")
  }
  createEvent( data : EventsModel){
    return this.http.post("http://localhost:3000/Events",data)
  }
}
