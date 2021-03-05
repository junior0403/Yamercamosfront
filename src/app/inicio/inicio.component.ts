import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  load: boolean = true;
  constructor() { }

  ngOnInit() {

  }

  async submit(){
    console.log("Producto Add")
    this.load= false;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.load=true);
        
      }, 2000);
    });
    
  }
}
