import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-status',
  templateUrl: './status.component.html',
  styles: []
})
export class StatusComponent implements OnInit {

  @Input()
  statusLabels = {
    0: 'Inactive',
    1: 'Active'
  };

  @Input()
  statusClasses = {
    0: 'btn-danger',
    1: 'btn-success'
  };

  @Input() status: number;

  thisClasses(status) {

    const classes: any = {
      'btn btn-sm': true
    };

    classes[this.statusClasses[status]] = true;

    return classes;

  }

  constructor() {
  }

  ngOnInit() {
  }

}
