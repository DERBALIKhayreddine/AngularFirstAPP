import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class MemberComponent {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createDate'];
dataSource:any[]=[
{
  id:'1',
  cin:'12345678',
  name:'Khayri',
  type:'king',
  cv:'lien',
  createDate:'30/01/2024'
},
{
  id:'2',
  cin:'12345679',
  name:'Nour',
  type:'X',
  cv:'lien',
  createDate:'30/01/2024'

},
{
  id:'3',
  cin:'12345670',
  name:'Islem',
  type:'X',
  cv:'lien',
  createDate:'30/01/2024'

}
]

}
