import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieResponse } from "../movie/movie.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies(apiKey: string, language: string): Observable<MovieResponse> {
    const path = `https://api.themoviedb.org/3/movie/popular?language=${language}&api_key=${apiKey}`;
    return this.http.get<MovieResponse>(path);
  }
}
