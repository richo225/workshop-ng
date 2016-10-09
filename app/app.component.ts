import { Component } from "@angular/core";
import { Animation } from "ui/animation";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
  public kittens: Array<any>;
  public url: string;
  public counter:number = 200;

  constructor() {
    this.kittens = [];
    this.url = 'https://placekitten.com/200/';

    for (var i = 0; i < 10; i++) {
      this.counter++;
      this.kittens.push(this.url+this.counter);
    }
  }

  animate(card) {
    card.animate({ opacity: 0 })
      .then(function () { return card.animate({ opacity: 1 }); })
      .then(function () { return card.animate({ translate: { x: 100, y: 100 } }); })
      .then(function () { return card.animate({ translate: { x: 0, y: 0 } }); })
      .then(function () { return card.animate({ scale: { x: 3, y: 3 } }); })
      .then(function () { return card.animate({ scale: { x: 1, y: 1 } }); })
      .then(function () { return card.animate({ rotate: 180 }); })
      .then(function () { return card.animate({ rotate: 0 }); })
      .then(function () {
      console.log("Animation finished");
    })
    .catch(function (e) {
      console.log(e.message);
    });
}

}
