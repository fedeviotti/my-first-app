import { Component } from '@angular/core';

@Component({
    selector: 'app-server-info',
    templateUrl: './server-info.component.html'
})
export class ServerInfoComponent {
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

}
