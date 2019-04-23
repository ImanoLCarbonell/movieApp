import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular'; //Import the Modal controller
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

/**
 * Generated class for the PopularMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular-movies',
  templateUrl: 'popular-movies.html',
})
export class PopularMoviesPage {
  //create an empty array
  popularMovies:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService:MovieServiceProvider,
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {

    this.movieService.getPopularMovies()
    .subscribe(res => {
      this.popularMovies = res.results;
    });

  }

  launchMovieDetailsPage(movie){
    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);
    movieModal.present();
  }

  launchSearchModal(){

    let modal = this.modalCtrl.create('SearchPage');
    modal.present();

  }

}
