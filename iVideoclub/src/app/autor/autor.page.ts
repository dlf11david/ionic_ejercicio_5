import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {

  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
  };


  constructor() {
    this.autor = {
      name: 'David López',
      email: 'email@email.com',
      twitter: '@twitter',
      phone: '999888777'};
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AutorPage');
  }

}
