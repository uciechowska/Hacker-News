import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.scss']
})
export class ItemCommentComponent implements OnInit {
  @Input() comment: any;
  collapse: boolean;

  constructor() { }

  ngOnInit() {
    this.collapse= false; 
  }

}
