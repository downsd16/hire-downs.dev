import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

  constructor() { }

  @Input() sectionTitle: string = "";

  @Input() sectionDescription: string = "";
  
  ngOnInit(): void {
  }

}
