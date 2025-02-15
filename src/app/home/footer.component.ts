import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `<div class="footer"> This is Footer Component </div>`,
    styles: [`
        .footer{
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: absolute;
            width: 100%;
            height: 50px;
            bottom: 5px;

        }
        `]
})

export class FooterComponent{

}