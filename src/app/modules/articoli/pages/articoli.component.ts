import { Component } from '@angular/core';
import { IArticoli } from '../../../models/articoli';
import { ArticoliService } from 'src/app/core/services/articoli.service';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent {

  articoli : IArticoli[] = []

  constructor(private articoliService : ArticoliService) {}
    ngOnInit(): void {

      this.articoli = this.articoliService.getArticoli();
    }
}
