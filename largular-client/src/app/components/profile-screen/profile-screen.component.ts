import { Component, OnInit } from '@angular/core';
import {IComment} from "../../models/comment";
import {comments} from "../../data/comments";

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {
  comments: IComment[] = comments;

  constructor() { }

  ngOnInit(): void {
  }

}
