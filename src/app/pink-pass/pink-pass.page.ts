import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pink-pass',
  templateUrl: './pink-pass.page.html',
  styleUrls: ['./pink-pass.page.scss']
})
export class PinkPassPage implements OnInit {
  /**
   * Nome utente loggato
   */
  public user = localStorage.getItem('user');

  /**
   * Flag per indicare se è in corsro un caricamento
   */
  public isLoading = false;

  constructor() {}

  ngOnInit() {}
}
