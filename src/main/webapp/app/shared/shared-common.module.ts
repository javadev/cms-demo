import { NgModule } from '@angular/core';

import { CmsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CmsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CmsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CmsSharedCommonModule {}
