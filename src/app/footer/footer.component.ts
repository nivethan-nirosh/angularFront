import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    encapsulation: ViewEncapsulation.ShadowDom 
    //View Encapsulation : Emulated, None, ShadowDom, Native
})

export class FooterComponent{

}