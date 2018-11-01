import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { Surface } from '@progress/kendo-drawing';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  @ViewChild("laurita") laurita: BoardComponent;

  constructor() { }

  ngOnInit() {
  }



}
