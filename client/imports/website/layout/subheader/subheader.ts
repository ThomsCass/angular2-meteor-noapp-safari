import {Component, OnInit} from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'website-subheader',
    templateUrl: 'client/imports/website/layout/subheader/subheader.html'
})
export class WebsiteSubHeader implements OnInit {

    constructor() {
    }

    ngOnInit() {
        /*if(screen.width<=600){
         setInterval(function () {
         jQuery('#header-slide').animate({marginLeft: -300}, 800, function () {
         jQuery(this).css({marginLeft: 0}).find("li:last").after(jQuery(this).find("li:first"));
         })
         }, 3500);
         }else{*/
        setInterval(function () {
            jQuery("#header-slide").animate({marginLeft: -300}, 800, function () {
                jQuery(this).css({marginLeft: 0}).find("li:last").after(jQuery(this).find("li:first"));
            })
        }, 3500);
    }

}
