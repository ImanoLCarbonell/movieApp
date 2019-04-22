import { Injectable } from '@angular/core'; //Imports injectable decorator
import { Http } from '@angular/http'; 
import 'rxjs/Rx';
 
/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  apiKey:string = '59edc3125acb1015050f3fb2e67499ad'; 

  constructor(public http: Http) {
   
  }

  
   getPopularMovies(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&sort_by=primary_release_year=2017&sort_by=vote_average.asc&page=1')
                        .map(res=> res.json());
  }

 
  getInTheaters(){

    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&language=es-ES&include_video=false&page=1&primary_release_date.gte=2019-01-02&primary_release_date.lte=2019-04-15')
                        .map(res=> res.json());

  }

  getMovie(id){
 
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey+'&language=es-ES')
                        .map(res=>res.json());
                      
  }
 
  searchMovies(searchStr:string){

    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key='+this.apiKey+'&query='+searchStr+'&language=es-ES&primary_release_date.gte=2017-04-15&primary_release_date.lte=2017-12-25&include_adult=false&include_video=false&page=1')
                        .map(res=>res.json());

  }

  
 

 



}
