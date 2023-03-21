import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofetas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {

  constructor( private ofertasService: OfertaService ) {}

  ngOnInit() {
    console.log(this.ofertasService.getOfertas())
  }
}
