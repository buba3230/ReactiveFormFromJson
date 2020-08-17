import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {

  constructor(router: Router) { }

  ngOnInit(): void {
  }

}
