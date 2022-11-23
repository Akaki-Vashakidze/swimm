import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

const materialComponents = [
MatButtonModule,
MatSidenavModule,
MatToolbarModule,
MatIconModule,
MatListModule,
MatCardModule,
MatInputModule,
MatDialogModule,
MatSnackBarModule,
MatSelectModule,
MatExpansionModule,
MatFormFieldModule
]

@NgModule({
  imports: [
    materialComponents
  ],
  exports: [
  materialComponents
  ]
})
export class MaterialModule { }
