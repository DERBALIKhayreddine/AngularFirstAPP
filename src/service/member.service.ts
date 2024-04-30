import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  tab: any[]= GLOBAL.DB.members;

  ONSAVE(MemberToSave:Member): Observable<Member>
  {
    //generer une requette http vers ke back end
    //return this.httpCLient.post('linktorestAPI',MemberToSave)

    //si on na pas le backend
     const member1={
      ...MemberToSave,
      id: Math.ceil(Math.random()*1000).toString(),
      createDate: new Date().toLocaleDateString()
     }
    this.tab.push(member1)
    return new Observable(observer=>observer.next());
  }

  ONDELETE(id:string): Observable<Member>
  {
    //return this.httpCLient.delete('linktorestAPI')
    this.tab=this.tab.filter(item=>item.id!=id)
    return new Observable(observer=>observer.next());
  }

  getMemberByID(idcourant:string):Observable<Member>
  {
    //return this.httpCLient.get<any>(LinkToRestApi);

    return new Observable(observer=>observer.next(
      this.tab.filter(item=>item.id==idcourant)[0]??null
    ))

  }
  updateMember(id:string, memberupdate:any ):Observable<any>
  {
    const index = this.tab.findIndex(item=>item.id==id);
    this.tab[index]={...memberupdate}
    return new Observable(observer=>observer.next())
  }



  constructor(private httpCLient:HttpClient) { }



}
