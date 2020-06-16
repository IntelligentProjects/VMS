import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-expand-list-component',
  templateUrl: './expand-list-component.component.html',
  styleUrls: ['./expand-list-component.component.scss'],
})
export class ExpandListComponentComponent {
  @ViewChild("expandWrapper", { read: ElementRef, static: true }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";
  constructor(public renderer: Renderer2) { }
  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }
}
