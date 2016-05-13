import {Component} from '@angular/core';

@Component({
    templateUrl: 'client/imports/website/pages/1_leader/leader.html'
})
export class WebsiteLeader {

    private leaderToggle1:Boolean = false;
    private leaderToggle2:Boolean = false;
    private leaderToggle3:Boolean = false;
    
    constructor() {
        window.scrollTo(0, 0);
    }

}
