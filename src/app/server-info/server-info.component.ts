import { Component } from '@angular/core';

@Component({
    selector: 'app-server-info',
    templateUrl: './server-info.component.html'
})
export class ServerInfoComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

}