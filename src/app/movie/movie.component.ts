import { Component, Input, OnInit } from "@angular/core";
import { MovieModel } from "./movie.model";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {
  @Input() currentMovie: MovieModel;

  constructor() {}

  ngOnInit(): void {}
}
