import { AfterViewInit, Component, VERSION } from "@angular/core";
import { ApiService } from "./api/api.service";
import { environment } from "../environments/environment";
import { MovieResponse } from "./movie/movie.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  /* ******** INTRUCTIONS **************
     1. Fill the table with the info provided by the API
     2. Modify the stylesheets to get the desired UI
     3. Color the rows using an algorithm using the indexes of the loop. Choose one:
        a) Fibonnacci sequence
        b) Prime numbers
        c) Odd/Even.
     4. Modify the selector to support multi-language.

     ******** EXTRAS **************
     1. Use the Movie component to display the movie info
     2. Use environment variables to fill the default values
  */

  constructor(private api: ApiService) {}

  ngAfterViewInit(): void {
    const apiKey = "1b501bbda107113acc653f328a2e935d";
    const language = "en";
    this.api.getMovies(apiKey, language).subscribe(
      (data: MovieResponse) => {
        console.log("Data", data);
      },
      error => {}
    );
  }
}
