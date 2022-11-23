import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { CompsComponent } from './components/pages/comps/comps.component';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch:'full'},
  { path: 'main', component: MainComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'comps/:searchTerm', component: CompsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
