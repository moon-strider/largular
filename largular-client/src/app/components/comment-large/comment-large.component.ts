import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../models/comment";

@Component({
  selector: 'app-comment-large',
  templateUrl: './comment-large.component.html',
  styleUrls: ['./comment-large.component.css']
})
export class CommentLargeComponent implements OnInit {
  @Input() comment: IComment

  constructor() { }

  ngOnInit(): void {
  }

}
