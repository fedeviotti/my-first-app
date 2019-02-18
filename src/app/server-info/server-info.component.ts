import { Component } from '@angular/core';

@Component({
    selector: 'app-server-info',
    templateUrl: './server-info.component.html',
    styles: [`
        .online {
            color: white;
            text-decoration: none !important;
        }
    `]
})
export class ServerInfoComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    //pColor: string = 'seagreen';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        //this.pColor = this.serverStatus === 'online' ? 'seagreen' : 'coral';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'seagreen' : 'coral';
    }

}