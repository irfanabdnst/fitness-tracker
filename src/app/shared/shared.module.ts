import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const Shared = [CommonModule, MaterialModule, FormsModule, FlexLayoutModule];

@NgModule({
  declarations: [],
  imports: [Shared],
  exports: [Shared]
})
export class SharedModule {}
