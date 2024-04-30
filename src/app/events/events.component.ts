import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { EventsModel } from 'src/models/Event';
import { EventServiceService } from 'src/service/event-service.service';
import { CreateEventComponent } from './event-componnets/create-event/create-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  EventsM : EventsModel[] =[]
  constructor(private eventservice :EventServiceService ,private dialog:MatDialog){}

  ngOnInit(): void {
    this.getAllEvents()

  }
  displayedColumns: string[] = ['id', 'titre', 'startdate', 'enddate','lieu'];
  dataSource: MatTableDataSource<EventsModel> = new MatTableDataSource(this.EventsM);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllEvents(){
    this.eventservice.getAllEvents().subscribe(res=>{
      this.EventsM=res;
      this.dataSource = new MatTableDataSource<EventsModel>(this.EventsM);
    })

  }

  openDialog(){
    const dialogRef = this.dialog.open(CreateEventComponent,
      {
       width:'500px',
       height:"500px"
   });
  }
}
