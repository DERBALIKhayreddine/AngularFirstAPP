import {Component} from '@angular/core';
import { GLOBAL } from '../app-config';
import { MemberService } from 'src/service/member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],


})
export class MemberComponent {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createDate','actions'];
  constructor (private MS: MemberService){}
  dataSource:any[]= this.MS.tab


Delete(id:string):void
{
 this.MS.ONDELETE(id).subscribe(()=>{
  this.dataSource= this.MS.tab
 })
}


}
