import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.sass']
})
export class QuestComponent implements OnInit {

  activeNumber:number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
