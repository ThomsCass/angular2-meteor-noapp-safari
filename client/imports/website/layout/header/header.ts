import {Component} from '@angular/core';

import {RouterLink, Router} from '@angular/router-deprecated';

@Component({
    selector: 'website-header',
    templateUrl: 'client/imports/website/layout/header/header.html',
    directives:[RouterLink]
})
export class  WebsiteHeader{
    
    constructor(private router:Router) {}
    
}
