import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pelicula: any
  id: number

  constructor(private activatedRoute: ActivatedRoute, private peliculas: PeliculasService) { 
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.pelicula = peliculas.getPelicula(this.id);
  }

  ngOnInit() {
    console.log(this.id)
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter DetallePage');
  }

}
