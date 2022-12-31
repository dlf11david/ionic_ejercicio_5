import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {

  listaPeliculas: any[];

  empty = false

  modoLista = true;

  constructor(private router: Router, private peliculas: PeliculasService) { 

    this.listaPeliculas = peliculas.getPeliculas();

    this.empty = this.listaPeliculas.length<1

  }

  verPaginaDetalle(id: any): void {
    this.router.navigate(['/detalle', id]);
  }

  cambiarVista() {
    this.modoLista = !this.modoLista
  }


  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }

}
