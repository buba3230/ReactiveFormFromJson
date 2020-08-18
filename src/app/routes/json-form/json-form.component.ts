import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

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
    "name": "password",
    "validations": [
      {
        "name": "required",
        "validator": "required",
        "message": "Password Required"
      }
    ]
  },
  {
    "type": "checkbox",
    "label": "Angular",
    "inputType": "checkbox",
    "name": "checkbox",
    "value":false,
    "validations": []
  },
  {
    "type": "select",
    "label": "Skill",
    "inputType": "select",
    "name": "skill",
    "options":["Junior","Middle","Senior"],
    "validations": []
  }];
  dynamicForm: FormGroup;
 
  constructor() { }

  ngOnInit(): void {
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

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
  
}
