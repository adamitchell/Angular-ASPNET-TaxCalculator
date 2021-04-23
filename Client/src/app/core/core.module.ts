import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

@NgModule({
    imports: [ CommonModule, BrowserModule, FormsModule, HttpClientModule ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }
}