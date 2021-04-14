import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from 'user';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.scss']
})
export class RegistrerComponent implements OnInit {

  public user:user= new user();

  constructor() { }

  ngOnInit(): void {
  }

  saveData(registerForm : NgForm){
    console.log(registerForm.form);
    console.log("valeurs:",JSON.stringify(registerForm.value));
    console.log('test');


    
  }
}
