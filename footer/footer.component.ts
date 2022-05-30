// a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="bg-primary text-center text-white py-2 mb-0">footer works!</div>
  `,
  styles: [``],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
