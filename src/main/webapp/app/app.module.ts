import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { InvesthoodSharedModule, UserRouteAccessService } from './shared';
import { InvesthoodAppRoutingModule} from './app-routing.module';
import { InvesthoodHomeModule } from './home/home.module';
import { InvesthoodAdminModule } from './admin/admin.module';
import { InvesthoodAccountModule } from './account/account.module';
import { InvesthoodEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        InvesthoodAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        InvesthoodSharedModule,
        InvesthoodHomeModule,
        InvesthoodAdminModule,
        InvesthoodAccountModule,
        InvesthoodEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class InvesthoodAppModule {}
