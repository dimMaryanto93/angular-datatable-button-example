import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-app';

  dtOptions: any = {};

  ngOnInit(): void {

    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Birt<"bottom"flp><"clear">',
      paginationType: 'full_numbers',
      bFilter: false,
      // Configure the buttons
      buttons: [
        'columnsToggle',
        'colvis',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            console.log(e);
            console.log(dt);
            console.log(node);
            console.log(config);
            alert('Button activated');
          }
        }
      ]
    };

  }
}
