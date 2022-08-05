import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-navbar-profile',
  templateUrl: './top-navbar-profile.component.html',
  styleUrls: ['./top-navbar-profile.component.css']
})
export class TopNavbarProfileComponent implements OnInit {
  @Input() logged: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
