import { Routes,RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";


const rpageRoute:Routes =[

    {
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'Dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica', component: Graficas1Component },
            { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
        ]
    }
    
]

export const page_route =RouterModule.forChild(rpageRoute)