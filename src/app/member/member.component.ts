import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberService } from 'src/service/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createDate', 'actions'];
  dataSource: any[] = this.MS.tab;

  constructor(private MS: MemberService, private dialog: MatDialog) {}

  onDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((x) => {
      if (x) {
        this.MS.ONDELETE(id).subscribe(() => {
          this.dataSource = this.MS.tab;
        });
      }
    });
  }
}
