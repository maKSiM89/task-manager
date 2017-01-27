import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {RouterModule} from "@angular/router";
import {InternalZoneActivateService} from "./internal-zone/internal-zone.activate.service";
import {AuthZoneActivateService} from "./auth-zone/auth-zone.activate.service";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    AuthZoneComponent,
    InternalZoneComponent
  ],
  providers: [
    AuthZoneActivateService,
    InternalZoneActivateService
  ]
})

export class ZonesModule {}
