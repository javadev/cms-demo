import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CmsSharedModule } from 'app/shared/shared.module';
import { CmsCoreModule } from 'app/core/core.module';
import { CmsAppRoutingModule } from './app-routing.module';
import { CmsHomeModule } from './home/home.module';
import { CmsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CmsSharedModule,
    CmsCoreModule,
    CmsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CmsEntityModule,
    CmsAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class CmsAppModule {}
