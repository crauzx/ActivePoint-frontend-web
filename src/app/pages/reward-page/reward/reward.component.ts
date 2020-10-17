import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.sass']
})
export class RewardComponent implements OnInit {

  activeNumber:number = 3

  constructor() { }

  ngOnInit(): void {
  }

}
