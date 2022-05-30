import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentComponent } from "./content/content.component";
import { HomeModule } from "./home/home.module";
import { DataBindingModule } from "./data-binding/data-binding.module";
import { DirectivesModule } from "./directives/directives.module";
import { InputOutputModule } from "./input-output/input-output.module";
import { MaterialModule } from "./material/material.module";
import { AntdModule } from "./antd/antd.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    DataBindingModule,
    DirectivesModule,
    InputOutputModule,
    MaterialModule,
    AntdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
