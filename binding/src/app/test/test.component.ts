import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <h2>{{2+2}}</h2>
  <h3 class="text-success">{{"Bem-Vindo " + name}}</h3>
  <h3 class="text-danger">{{name.length}}</h3>
  <h4>{{greetUser()}}</h4>
   <h2 class="text-special">{{siteUrl}}</h2>
   <h3 [class]="sucessClass">Vamos nessa!</h3>
   <h3 class="text-special" [class]="sucessClass">Outra classe</h3>
   <h3 [class.text-danger]="hasError" >3º classe</h3>
   <h2 [ngClass]="messageClass">Estou com sono</h2>
  <hr>
  <h1>Property Binding</h1>
  <input [id]="myId" type="text" value="Ana Luiza">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Ana Luiza">
  <hr>
  <h2 [style.color]="highlightColor">Style Binding 2</h2>
  <h2 [ngStyle]="titleStyle">Style Binding 3</h2>
   <hr>
  <button (click)="onClick($event)">Greet</button>
  <h3>{{greeting}}</h3>
  <button (click)="greeting='Assim é uma outra forma de fazer.'">Greet</button>
  <h1>Próxima aula: Angular 7 Tutorial - 10- xxxxxxxxx</h1>

  `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  // tslint:disable-next-line:quotemark
  public name = "Mário";
  public siteUrl = window.location.href;
  public myId = 'testeId';
  public isDisabled = false;
  public sucessClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public highlightColor = 'orange';
  public greeting = '';
  public messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  public titleStyle = {
    color:  'blue',
    fontStyle: 'italic'
  // tslint:disable-next-line:semicolon
  }
  construtor() {}
    ngOnInit() {
    }

    greetUser() {
      return 'Olá ' + this.name;
    }
    onClick(event) {
      console.log('Qual será o evento do click? - ' , event);
      this.greeting = event.type;
    }

}
