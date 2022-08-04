import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../models/comment";

@Component({
  selector: 'app-profile-comment-block',
  templateUrl: './profile-comment-block.component.html',
  styleUrls: ['./profile-comment-block.component.css']
})
export class ProfileCommentBlockComponent implements OnInit {
  @Input() comments: IComment[]

  constructor() { }

  ngOnInit(): void {
  }

}
