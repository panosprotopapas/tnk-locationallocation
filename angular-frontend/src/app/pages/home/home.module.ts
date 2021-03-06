import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd';
import { LayoutComponentsModule } from 'src/app/core/layout-components/layout-components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzTableModule,
    NzDividerModule,
    LayoutComponentsModule,
  ],
})
export class HomeModule {}
