import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta | any

  constructor( private ofertasService: OfertasService ) {}

  ngOnInit(): void {
    this.ofertasService.getOfertas().subscribe({
      next: (res: any) => this.ofertas = res,
      error: (error: any) => error
    })
  }
}
