import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular'; //import the modal and view controllers
import { MovieServiceProvider } from '../../providers/movie-service/movie-service'; //import the movie service


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  //create an empty array to hold the results of the search
  results:any[]=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService:MovieServiceProvider, 
              public modalCtrl:ModalController, public viewCtrl:ViewController) {
  }


  ionViewDidLoad() {
  
  }


 
  searchMovies(ev: any) {

    let val = ev.target.value;

      this.movieService.searchMovies(val).subscribe(data=>{
      this.results = data.results;
    });
     
  }

  //
  launchMovieDetailsPage(movie){

    let movieModal = this.modalCtrl.create('MovieDetailsPage', movie);
    movieModal.present();

  }

   dismiss() {
      this.viewCtrl.dismiss()
  }


}
