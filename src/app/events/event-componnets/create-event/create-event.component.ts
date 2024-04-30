import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EventServiceService } from 'src/service/event-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  EventForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateEventComponent>,
    private es: EventServiceService
  ) { }

  ngOnInit(): void {
    this.EventForm = this.formBuilder.group({
      titre: ['', Validators.required],
      startdate: [null, Validators.required],
      enddate: [null, Validators.required],
      lieu: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.EventForm.valid) {
      const formData = this.EventForm.value;
      this.es.createEvent(formData).subscribe(() => {
        console.log('Event added successfully.');
        this.dialogRef.close();
      }, error => {
        console.error('Error adding Event:', error);
      });
    }
  }
}




