import { Component } from '@angular/core';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  public title: string = "Are you sure?";
  public content: string = "Are you sure you want to delete this item?";
  public cancel: string = "Cancel";
  public Delete: string = "Delete";


}
