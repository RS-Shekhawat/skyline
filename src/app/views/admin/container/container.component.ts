import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-admin-container',
  templateUrl: './container.component.html',
  styleUrls: [
    '../../../../assets/admin/scss/custom.scss',
    '../../../../assets/admin/scss/material-dashboard.scss',
    '../../../../assets/admin/demo/demo.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ContainerComponent implements OnInit, OnDestroy {

  public title = '';

  private routeDataSubscriber;

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) {
    this.subscribeToRouteData();
  }

  private subscribeToRouteData() {
    this.routeDataSubscriber = this.router
      .events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => {
          let route = this.route.firstChild;
          let child = route;

          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
              route = child;
            } else {
              child = null;
            }
          }

          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => this.title = data.title || '');
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.routeDataSubscriber.unsubscribe();
  }

}
