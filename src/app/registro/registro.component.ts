import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private client: ClientService
   ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      adress: ['', Validators.required],
      
      
    });
  }

  async onSubmit() {
    
    
    if (this.form.valid) {

      let data = {
        name: this.form.value.required,
        lastname: this.form.value.required,
        email: this.form.value.email,
        phone: this.form.value.required,
        adress: this.form.value.required,

      }
      Swal.fire({
        title:'Registro',
        text :'Se registro correctamente'
      })
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login2', data).subscribe(

        (response: any) => {
          this.load = true;
          this.route.navigate( ['/isesion']);
          
          
          
          
         
      },
      (error) => {

        console.log(error.status);

      })
      

    } else {

      console.log("Form error");
    }

    
  }
}

