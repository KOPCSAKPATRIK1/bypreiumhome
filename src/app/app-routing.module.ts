import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { IngatlanjainkComponent } from './ingatlanjaink/ingatlanjaink.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ImageSliderComponent } from "./image-slider/image-slider.component"
import { AppComponent } from "./app.component";;

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'kapcsolat',
        loadComponent: () => import('./kapcsolat/kapcsolat.component').then(m => m.KapcsolatComponent),
    },
    {
        path: 'ingatlanjaink',
        loadComponent: () => import('./ingatlanjaink/ingatlanjaink.component').then(m => m.IngatlanjainkComponent),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}