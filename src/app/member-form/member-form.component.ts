
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/service/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor(private Ms: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  // injection de dependance
  form !: FormGroup;
  ngOnInit(): void {
    //get id of the route
    const idcourant = this.activatedRoute.snapshot.params['id']

    //verify if there is edit on the link
    if (!!idcourant) {

      this.Ms.getMemberByID(idcourant).subscribe((x)=>{this.initForm2(x)})

    }
    else{
    this.intiForm();
  }
  }
  intiForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      createDate: new FormControl(null, [Validators.required]),
    })
  }
  initForm2(x: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(x.cin, [Validators.required]),
      name: new FormControl(x.name, [Validators.required]),
      cv: new FormControl(x.cv, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      createDate: new FormControl(null, [Validators.required]),
    })
  }
  onSub(): void {
    //get the data from  member-form.html
    console.log(this.form.value);
    const MemberToSave = this.form.value;
    // appler la fornction du service ONSAVE(MmeberToSave)
    this.Ms.ONSAVE(MemberToSave).subscribe(() => {
      //redirection
      this.router.navigate(['/members'])
    })



  }

}


