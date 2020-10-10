
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
export  const appRoutes:Routes=[
    {path:"",loadChildren:():any=>{import("../modules/lazy.module").then(obj=>obj.LazyModule)}}
];
export const lazyRoutes:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes)