import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatClaimPipe } from './format-request.pipe';
import { FormatCustomerPipe } from './format-customer.pipe';
import { StatePipe } from './state.pipe';
import { RequestTypePipe } from './request-type.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FormatClaimPipe,
    FormatCustomerPipe,
    StatePipe,
    RequestTypePipe,
  ],
  exports: [FormatClaimPipe, FormatCustomerPipe, StatePipe, RequestTypePipe],
})
export class PipesModule {}
