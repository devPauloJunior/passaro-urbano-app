import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})

export class DiversaoComponent implements OnInit {

  public ofertas: Oferta | any

  constructor( private ofertasService: OfertasService ) {}

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao').subscribe({
      next: (res: any) => this.ofertas = res,
      error: (error: any) => error
    })
  }

}
