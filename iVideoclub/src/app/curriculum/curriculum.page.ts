import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {

  listaTrabajos: {fecha: string, desc: string}[];

  constructor() { 
    this.listaTrabajos = [
      {fecha: '2022-actualidad', desc: 'Estudiante del máster en desarrollo de aplicaciones'}, 
      {fecha: 'antes-2022', desc: 'No estudiante del máster en desarrollo de aplicaciones'}
    ]
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CurriculumPage');
  }

}
