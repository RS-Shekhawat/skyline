import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Role} from '../../../models/role.model';
import {User} from '../../../models/user.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {SortOrder} from '../../../models/common.model';
import {CommonService} from '../../../services/common.service';
import {TABLES} from '../../../app.constants';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  private type: string;
  private role: Role;
  public isCharter = false;

  count: number;
  page: number;
  perPage: number;

  searchKey: string;

  users: Observable<User[]>;

  public sorting = {
    asc: '',
    desc: ''
  };

  sortingClasses(key) {
    return {
      sorting: this.sorting.asc !== key && this.sorting.desc !== key,
      sorting_asc: this.sorting.asc === key,
      sorting_desc: this.sorting.desc === key,
    };
  }

  sort(key) {
    if (this.sorting.asc === key) {
      this.sorting.desc = key;
      this.sorting.asc = '';
    } else {
      this.sorting.asc = key;
      this.sorting.desc = '';
    }
    this.page = 1;
    this.getUsers(1);
  }

  constructor(private route: ActivatedRoute, private userService: UserService, private commonService: CommonService) {
    this.type = route.snapshot.url[0].path;
    this.role = Role[this.type];
    this.isCharter = this.role === Role.charter;
  }

  onSearch(searchTerm) {
    this.searchKey = searchTerm;
    this.getUsers(1);
  }

  onToggleStatus(user: User) {
    const status = Math.abs(user.status - 1);
    this.commonService.changeField({
      table_name: TABLES.Users,
      col_name: 'status',
      row_id: user.id,
      col_value: status.toString()
    }).subscribe(response => {
      if (response.type === true) {
        user.status = status;
      }
    });
  }

  getUsers(page) {

    let sortkey, order: SortOrder;
    if (this.sorting.asc) {
      order = SortOrder.ASC;
      sortkey = this.sorting.asc;
    } else if (this.sorting.desc) {
      order = SortOrder.DESC;
      sortkey = this.sorting.desc;
    }

    const params: any = {role_id: this.role, page};
    if (order) {  params.order = order; }
    if (sortkey) { params.sortkey = sortkey; }
    if (this.searchKey) { params.searchKey = this.searchKey; }

    this.userService.getUsers(params).subscribe(response => {
      if (response.type === true) {
        this.page = page;
        this.count = response.totalResult;
        this.perPage = response.perPage;
        this.users = of(response.data);
      }
    });
  }

  ngOnInit() {
    this.getUsers(1);
  }

}
