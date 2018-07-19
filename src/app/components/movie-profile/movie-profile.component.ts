import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.scss']
})

export class MovieProfileComponent implements OnInit {

  max: number = 5;
  rate: number = 3;
  isReadonly: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
