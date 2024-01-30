import {Component} from '@angular/core';
import { GLOBAL } from '../app-config';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],


})
export class MemberComponent {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createDate','actions'];
dataSource:any[]=GLOBAL.DB.members

}
