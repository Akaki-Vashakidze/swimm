import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  userForm = this.formBuilder.group({
    UserName:['',Validators.required],
    FirstName:['',Validators.required],
    LastName:['',Validators.required],
    Gmail:['',Validators.required],
    Number:['',Validators.required],
    Password1:['',Validators.required],
    Password2:['',Validators.required],
    Gender:['',Validators.required]
  })

  saveForm() {
    console.log(this.userForm.value)
  }

  ngOnInit(): void {
  }

}
