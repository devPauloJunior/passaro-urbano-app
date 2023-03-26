import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Oferta } from "./shared/oferta.model";

// @Injectable({
//     providedIn: 'root'
// }) Forma de disponibilizar um serviço para todos os components

@Injectable()
export class OfertasService {
    private url: string = "http://localhost:3000"

    constructor( private http: HttpClient ) {}

    public getOfertas() : Observable<Oferta> {
            return this.http.get<Oferta>(`${this.url}/ofertas?destaque=true`)
            .pipe( res => res )
    }
}