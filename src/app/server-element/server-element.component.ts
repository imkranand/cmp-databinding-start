import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated

  // View Encapsulation None option removes all the other attributes that the Angular adds to the attributes.
  //  By default the value is set to Emulated as it is browser dependent.
  // Native option is also there and the native option uses the shadow DOM techonology it gives the same result as Emulated only for the supported browser
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string , content: string};

  constructor() {
    // console.log('Constructor called in server');
   }

  ngOnInit() {
    // console.log('ngOnInit Called');
  }

}
