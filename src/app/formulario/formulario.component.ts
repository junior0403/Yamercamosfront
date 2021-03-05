import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
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
  
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login2', data).subscribe(

        (response: any) => {
          console.log(4343432);
          this.load = true;
          //cambiando load a true, volvemos a ocultar el spinner
          //this.load = true;
          this.route.navigate( ['/productos']);
          //console.log(response);
          
          
          
         
      },
      (error) => {
        //this.load = true;

        console.log(error.status);

      })
      

    } else {

      console.log("Form error");
    }

    
  }
}
