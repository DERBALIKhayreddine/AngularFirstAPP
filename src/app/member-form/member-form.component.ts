import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/service/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor(private Ms :MemberService){// injection de dependance

  }
  form !: FormGroup ;
  ngOnInit ():void{
    this.intiForm();

  }
  intiForm():void
  {
    this.form= new FormGroup({
      cin: new FormControl(null,[Validators.required]) ,
      name: new FormControl(null,[Validators.required]),
      cv: new FormControl(null,[Validators.required]),
      type : new FormControl(null,[Validators.required]),
      createDate: new FormControl(null,[Validators.required]),
  })
  }
  onSub():void{
    //get the data from  member-form.html
    console.log(this.form.value);
    const MemberToSave=this.form.value;
    // appler la fornction du service ONSAVE(MmeberToSave)
   // this.Ms.ONSAVE(MemberToSave)
  }

}


