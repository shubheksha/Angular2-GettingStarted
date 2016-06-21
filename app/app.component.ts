import {Component} from 'angular2/core'

@Component({
    selector: 'pm-app',
    template: '<h1>{{pageTitle}}<h1>'
})

export class AppComponent {
    pageTitle: string  = 'Acme Product Management'
}