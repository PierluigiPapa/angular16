import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

  @Input()
  Titolo: string = "";
  @Input()
  Sottotitolo: string = "";
  @Input()
  Show: boolean = true;

}
