import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule } from '@angular/material';
  import {MatMenuModule} from '@angular/material/menu';
  import {MatListModule} from '@angular/material/list';
/* we need to include a theme. As we use css directly and not SASS,
  the theme css file is imported inside angular.json file:
  "styles": [
    {
      "input": "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
    },
    "src/styles.css"
  ]
*/
@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
   ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [],
})
export class MaterialModule {}
