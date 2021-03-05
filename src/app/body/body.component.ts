import { Component, OnInit } from '@angular/core';
import { BEBIDAS } from '../productos.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  
  constructor() { }

  bebidas: any = BEBIDAS;

  ngOnInit(): void {
  }

}
