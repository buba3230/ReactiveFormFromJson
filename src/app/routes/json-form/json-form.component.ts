import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import * as fld from 'src/app/routes/json-form/schema.json' 
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {
  name = 'Angular';
  fields = [{
    "type": "input",
    "label": "Username",
    "inputType": "text",
    "name": "name",
    "validations": [
      {
        "name": "required",
        "validator": "required",
        "message": "Name Required"
      },
      {
        "name": "pattern",
        "validator": "^[a-zA-Z]+$",
        "message": "Accept only text"
      }
    ]
  }, {
    "type": "password",
    "label": "Password",
    "inputType": "text",
    "name": "name",
    "validations": [
      {
        "name": "required",
        "validator": "required",
        "message": "Password Required"
      }
    ]
  }];
  dynamicForm: FormGroup;
  
  constructor() { 
   const controls = {};
    this.fields.forEach(res => {
      const validationsArray = [];
      res.validations.forEach(val => {
        if (val.name === 'required') {
          validationsArray.push(
            Validators.required
          );
        }
        if (val.name === 'pattern') {
          validationsArray.push(
            Validators.pattern(val.validator)
          );
        }
      });
      controls[res.label] = new FormControl('', validationsArray);
    });

    this.dynamicForm = new FormGroup(
      controls
    );
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
  
}
