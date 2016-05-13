import {Component} from '@angular/core';

declare var jQuery:any;

@Component({
    templateUrl: 'client/imports/website/pages/3_agir/agir.html'
})
export class WebsiteAgir {

    private agirToggle1:Boolean = false;
    private agirToggle2:Boolean = false;
    private agirToggle3:Boolean = false;
    private agirToggle4:Boolean = false;

    constructor() {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    }

}
