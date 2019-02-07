import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-teste]',
  template: `<div>
    <h3>Inline Template</h3>
  <input type="text" value="Entre" placeholder="Digite aqui">
  </div>`,
  styles: [`
  div{
    color: red;
    background-color: yellow;
  },
  input{
    background-color: yellow;
  }
  `]
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
