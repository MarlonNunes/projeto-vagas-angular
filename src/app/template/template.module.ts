import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ParallaxComponent } from './parallax/parallax.component';



@NgModule({
  declarations: [NavbarComponent, ParallaxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ParallaxComponent
  ]
})
export class TemplateModule { }
