import {Component} from '@angular/core';

import {RouterLink} from '@angular/router-deprecated';

@Component({
    selector: 'website-footer',
    templateUrl: 'client/imports/website/layout/footer/footer.html',
    directives:[RouterLink]
})
export class  WebsiteFooter {

    constructor() {}

}
