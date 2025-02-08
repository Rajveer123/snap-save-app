import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CreateBinComponent } from './create.bin/create.bin.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {   path: 'login', component: LoginComponent },
    {   path: 'signup', component: SignupComponent },
    {   path: 'about', component:  AboutComponent},
    {   path: 'createbin', component: CreateBinComponent },
    {   path: 'logout', component: LogoutComponent,  pathMatch: 'full' },
    
    
];
