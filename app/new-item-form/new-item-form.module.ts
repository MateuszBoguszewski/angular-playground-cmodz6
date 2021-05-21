import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../shared';
import { NewItemFormComponent } from './new-item-form.component';

@NgModule({
  declarations: [NewItemFormComponent],
  exports: [NewItemFormComponent],
  imports: [SharedModule, MaterialModule]
})
export class NewItemFormModule {}
