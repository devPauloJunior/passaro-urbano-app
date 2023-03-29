import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta | any

  constructor( 
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) {}

  ngOnInit(): void {
    console.log(`ID recuperado com SNAPSHOT ${this.route.snapshot.params['id']}`)

    const id = this.route.snapshot.params['id']

    this.ofertasService.getOfertasPorId(id).subscribe({
      next: (res: any) => this.oferta = res,
      error: (error: any) => error
    })
  }

}
