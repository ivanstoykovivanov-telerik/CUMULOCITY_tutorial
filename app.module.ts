import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ExampleActionFactory } from './factories/Action';
import { ExampleBreadcrumbFactory } from './factories/Breadcrumb';
import { ExampleNavigationFactory } from './factories/Navigation';
import { ExampleTabFactory } from './factories/Tab';
import { AwesomeComponent } from './src/awesome/awesome.component';
import { HelloComponent } from './src/hello/hello.component';
import { OutstandingComponent } from './src/outstanding/outstanding.component';
import { SuperheroComponent } from './src/superhero/superhero.component';
import { SuperheroService } from './src/superhero/superhero.service';
import { WorldComponent } from './src/world/world.component';
import { DevicesComponent } from './src/devices/devices.component';
import {
    CommonModule,
    CoreModule,
    HOOK_ACTION,
    HOOK_BREADCRUMB,
    HOOK_NAVIGATOR_NODES,
    HOOK_TABS,
    BootstrapComponent
} from '@c8y/ngx-components';

/**
 * Angular Routes.
 * Within this array at least path (url) and components are linked.
 */
const appRoutes: Routes = [
    {
        path: 'hello',
        component: HelloComponent
    },
    {
        path: 'world',
        redirectTo: 'world/awesome',
    },
    {   path: 'superhero',
        component: SuperheroComponent
    },
    {
        path: 'world/awesome',
        component: AwesomeComponent
    },
    {
       path: 'world/outstanding',
       component: OutstandingComponent
    },
    {
        path: 'devices',
        component: DevicesComponent
    },
    {
        path: '',
        redirectTo: 'hello',
        pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    HelloComponent,
    WorldComponent,
    AwesomeComponent,
    OutstandingComponent,
    SuperheroComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: true }),
    // Import the CoreModule to allow use of the `c8y-` prefixed components
    CoreModule,
    // Import the CommonModule to allow use of data access and translations
    CommonModule
  ],
  /**
   * Use our predefined InjectionTokens and provide your own classes to extend behaviour
   * and functionality of existing ones. Implement your own NavigationNodes, Tabs, Actions and Breadcrumbs
   */
  providers: [
    { provide: HOOK_NAVIGATOR_NODES, useClass: ExampleNavigationFactory, multi: true},
    { provide: HOOK_TABS, useClass: ExampleTabFactory, multi: true},
    { provide: HOOK_ACTION, useClass: ExampleActionFactory, multi: true},
    { provide: HOOK_BREADCRUMB, useClass: ExampleBreadcrumbFactory, multi: true},
    SuperheroService
  ],
  /**
   * Bootstrap your application with the BootstrapComponent which will use the `<c8y-bootstrap>`
   * component to initialize the root application. Alternatively you can bootstrap
   * a component of your choice and include that tag into its template or only reuse the given components
   */
  bootstrap: [BootstrapComponent]
})
export class AppModule { }
