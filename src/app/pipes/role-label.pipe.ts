import { Pipe, PipeTransform } from '@angular/core';
import {ROLE_LABELS} from '../app.constants';

@Pipe({
  name: 'roleLabel'
})
export class RoleLabelPipe implements PipeTransform {

  transform(value: string): any {
    return ROLE_LABELS[value];
  }

}
