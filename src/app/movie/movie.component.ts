import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{

  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;
  review: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.id = params['id'];
      
      if (this.type === 'trending'){
        this.url = "http://localhost:4200/assets/add/trending-movies.json";
      }
      if (this.type === 'theatre'){
        this.url = "http://localhost:4200/assets/add/theatre-movies.json";
      }
      if (this.type === 'popular'){
        this.url = "http://localhost:4200/assets/add/popular-movies.json";
      }
  
      this.getMovie();
    });
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies; 
      let index = this.movies.findIndex((movie: { id: string; }) => movie.id == this.id);
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
  
}
