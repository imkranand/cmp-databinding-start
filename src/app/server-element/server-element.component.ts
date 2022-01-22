import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None 
  // The view encapsulaion none allows the style to be in afect gglobally. 
  // even the component that is not related , style is still affected.
  // other is native : it uses shadow DOM techonology to give the saame result.Emulated is default.
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: {type: string, name: string , content: string};

  constructor() {
    console.log('Constructor called');
   }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges Called');
      console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

}
