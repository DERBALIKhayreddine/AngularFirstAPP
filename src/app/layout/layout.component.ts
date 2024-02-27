import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/AuthService (2) (1)';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private AuthSer:  AuthService, private router: Router,){}

  logout():void{
    this.AuthSer.doLogout().then(()=>{
      this.router.navigate(['/login'])
    })
  }

}
