import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-isesion',
  templateUrl: './isesion.component.html',
  styleUrls: ['./isesion.component.css']
})
export class IsesionComponent implements OnInit {
  form: FormGroup;
  load2: boolean = true;

  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private client: ClientService
   ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      
      email: ['', Validators.email],
      password: ['', Validators.required],
      
      
      
    });
  }

  async onSubmit() {
    
    
    if (this.form.valid) {

      let data = {
       
        email: this.form.value.email,
        password: this.form.value.required,

      }
      Swal.fire({
        title:'Inicio Sesion',
        text :'Inicio Sesion correctamente'
      })
      this.load2 = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login', data).subscribe(

        (response: any) => {
          this.load2 = true;
          this.route.navigate( ['/inicio']);
      },
      (error) => {
        console.log(error.status);

      })
      

    } else {

      console.log("Form error");
    }

    
  }
}