import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab: any[]= GLOBAL.DB.members;

  ONSAVE(MemberToSave:any): Observable<any>
  {
    //generer une requette http vers ke back end
     return this.httpCLient.post('linktorestAPI',MemberToSave)
  }

  constructor(private httpCLient:HttpClient) { }
}
