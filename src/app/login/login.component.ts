import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/service/AuthService (2) (1)';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthSer:  AuthService, private router: Router,){}

  signin():void
  {
    this.AuthSer.doGoogleLogin().then(()=>{
     // redirect to
      this.router.navigate(['/members'])
    })

  }
}
