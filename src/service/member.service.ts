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
    //return this.httpCLient.post('linktorestAPI',MemberToSave)

    //si on na pas le backend
     const member1={
      ...MemberToSave,
      id: Math.ceil(Math.random()*1000).toString(),
      createDate: new Date().toISOString()
     }
    this.tab.push(member1)
    return new Observable(observer=>observer.next())
  }

  constructor(private httpCLient:HttpClient) { }
}
