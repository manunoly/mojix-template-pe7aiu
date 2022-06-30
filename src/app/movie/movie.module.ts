import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieComponent } from "./movie.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MovieComponent],
  exports: [MovieComponent],
  providers: []
})
export class MovieModule {}
