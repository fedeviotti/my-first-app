import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-info',
  templateUrl: './servers-info.component.html',
  styleUrls: ['./servers-info.component.css']
})
export class ServersInfoComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created yet!";
  serverName = 'TestServer';
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() { 
    // console.log('this out', this);
    // var that = this;
    // setTimeout( function () {
    //   console.log('this in', this);
    // }, 2000);
    
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "A server was created! Name is " + this.serverName;
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
