import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  load = true;
  constructor() { }

  ngOnInit(): void {
}
async submit(){
  this.load= false;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(this.load=true);
      
    }, 2000);
  });
  
}
}