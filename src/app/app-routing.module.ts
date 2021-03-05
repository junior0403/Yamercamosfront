import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegistroComponent } from './registro/registro.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { IsesionComponent } from './isesion/isesion.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: '', component: RegistroComponent },
  {path: 'body', component: BodyComponent },
  {path: 'isesion', component: IsesionComponent},
  {path: 'inicio' , component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
