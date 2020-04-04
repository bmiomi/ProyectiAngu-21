import { Routes, RouterModule } from "@angular/router"
import { DashboardComponent } from "./pages/dashboard/dashboard.component"
import { LoginComponent } from "./login/login.component"
import { ProgressComponent } from "./pages/progress/progress.component"
import { Graficas1Component } from "./pages/graficas1/graficas1.component"
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component"
import { PagesComponent } from "./pages/pages.component"
import { RegisterComponent } from "./login/register.component"

const route: Routes = [

    {
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'Dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica', component: Graficas1Component },
            { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    { path: '**', component: PagenotfoundComponent }
]


export const App_Routing = RouterModule.forRoot(route, { useHash: true })