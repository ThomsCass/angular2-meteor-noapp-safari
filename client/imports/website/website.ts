import {Component} from '@angular/core';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';

import {WebsiteHeader} from "./layout/header/header";
import {WebsiteSubHeader} from "./layout/subheader/subheader";
import {WebsiteLeftbar} from "./layout/leftbar/leftbar";
import {WebsiteRightbar} from "./layout/rightbar/rightbar";
import {WebsiteFooter} from "./layout/footer/footer";

import {WebsiteLeader} from "./pages/1_leader/leader";
import {WebsiteGal} from "./pages/2_gal/gal";
import {WebsiteAgir} from "./pages/3_agir/agirNous";
import {WebsiteContact} from "./pages/4_contact/contact";

@Component({
    selector: 'my-content',
    templateUrl: 'client/imports/website/website.html',
    directives: [ROUTER_DIRECTIVES, WebsiteHeader, WebsiteSubHeader, WebsiteLeftbar, WebsiteRightbar, WebsiteFooter]
})
@RouteConfig([
    {path: '/leader', name:'WebsiteLeader',  component: WebsiteLeader, useAsDefault:true },
    {path: '/le-gal-des-paillons', name:'WebsiteGal',  component: WebsiteGal},
    {path: '/agir-avec-nous', name:'WebsiteAgir',  component: WebsiteAgir},
    {path: '/contact', name:'WebsiteContact',  component: WebsiteContact}
])

export class WebSiteComponent {

    constructor() {
    }
   
}
