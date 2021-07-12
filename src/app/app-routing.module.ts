import { GridComponent } from './components/grid/grid.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'people', component: GridComponent, data: { query: 'people' } },
  { path: 'starships', component: GridComponent, data: { query: 'starships' } },
  { path: 'planets', component: GridComponent, data: { query: 'planets' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
