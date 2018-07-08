import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landingPage/landingPage.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, outlet: 'roHome' },
    { path: 'main', component: MainComponent, outlet: 'roHome',
        children: [
            { path: 'landingPage', component: LandingPageComponent }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
