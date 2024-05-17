import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  trendingMovies : any;
  theatreMovies : any;
  popularMovies : any;


  constructor (private http:HttpClient , private router: Router) {

  }
  ngOnInit(): void {
      this.getTrendingMovies();
      this.getTheatreMovies();
      this.getPopularMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/add/trending-movies.json').subscribe(movies => {
    this.trendingMovies = movies;
    console.log(this.trendingMovies);
  });
}

  getTheatreMovies(){
  this.http.get('http://localhost:4200/assets/add/theatre-movies.json').subscribe(movies => {
  this.theatreMovies = movies;
  console.log(this.theatreMovies);
});
}

  getPopularMovies(){
  this.http.get('http://localhost:4200/assets/add/popular-movies.json').subscribe(movies => {
  this.popularMovies = movies;
  console.log(this.popularMovies);
});
}
  goToMovie(type:String,  id: String) {
    this.router.navigate(['movie',type, id]);

  }

}