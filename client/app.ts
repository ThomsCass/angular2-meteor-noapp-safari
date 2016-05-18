import 'reflect-metadata';
import 'zone.js/dist/zone';

import {Component, provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import {bootstrap} from 'angular2-meteor-auto-bootstrap';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import {WebSiteComponent} from "./imports/website/website";


@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/...', name:'WebSiteComponent',  component: WebSiteComponent, useAsDefault:true }
])
class Paillons {

}

bootstrap(Paillons, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);