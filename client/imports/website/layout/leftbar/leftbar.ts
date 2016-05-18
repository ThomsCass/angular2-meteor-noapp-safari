import {Component} from '@angular/core';

import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'website-leftbar',
    templateUrl: 'client/imports/website/layout/leftbar/leftbar.html'
})
export class WebsiteLeftbar {

    private urlPhoto = '/images/website/leftbar/logo-leader.svg';
    private text = '';

    constructor(private router:Router) {
        router.root.subscribe(route => {
            this.onChangeRoute(route)
        });
    }

    onChangeRoute(route) {
        switch (route) {
            case '/leader':
                this.urlPhoto = '/images/website/leftbar/logo-leader.svg';
                this.text = '';
                break;
            case '/le-gal-des-paillons':
                this.urlPhoto = '/images/website/leftbar/presidente.png';
                this.text = 'Carole NUSSBAUM Présidente du GAL des Paillons';
                break;
            case '/agir-avec-nous':
                this.urlPhoto = '/images/website/leftbar/logo-paillons.png';
                this.text = '';
                break;
            case '/contact':
                this.urlPhoto = '/images/website/leftbar/contacter.png';
                this.text = '';
                break;
            default:
                this.urlPhoto = '/images/website/leftbar/logo-leader.svg';
                this.text = '';
                break;
        }
    }

}
