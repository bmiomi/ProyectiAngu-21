import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";


@NgModule({
    declarations:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ],

    imports:[],

    exports:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        PagenotfoundComponent
    ]

})

export class sharedModule {

}