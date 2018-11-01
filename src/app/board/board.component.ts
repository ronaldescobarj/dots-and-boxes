import { Component, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { Surface } from '@progress/kendo-drawing';

import { drawScene } from './draw-scene';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements AfterViewInit, OnDestroy {

  dots = [
    { x: 100, y: 100 }, { x: 100, y: 200 }, { x: 100, y: 300 },
    { x: 200, y: 100 }, { x: 200, y: 200 }, { x: 200, y: 300 },
    { x: 300, y: 100 }, { x: 300, y: 200 }, { x: 300, y: 300 },
  ]

  constructor() { }

  @ViewChild('surface') private surfaceElement: ElementRef;
  private surface: Surface;

  public ngAfterViewInit(): void {
    drawScene(this.createSurface(), this.dots);
  }

  public ngOnDestroy() {
    this.surface.destroy();
  }

  private createSurface(): Surface {
    // Obtain a reference to the native DOM element of the wrapper
    const element = this.surfaceElement.nativeElement;

    // Create a drawing surface
    //this.surface = Surface.create(element);
    this.surface = Surface.create(element, {height: "1000", width: "1000"})
    return this.surface;
  }

  printxd() {
    console.log("xd");
  }

}
