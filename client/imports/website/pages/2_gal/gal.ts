import {Component} from '@angular/core';

declare var jQuery:any;

@Component({
    templateUrl: 'client/imports/website/pages/2_gal/gal.html'
})
export class WebsiteGal {

    private galToggle1:Boolean = false;
    private galToggle2:Boolean = false;
    private galToggle3:Boolean = false;
    
    constructor() {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    }

}

