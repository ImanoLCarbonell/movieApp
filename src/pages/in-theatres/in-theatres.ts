import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular'; //Import the Modal controller
import { MovieServiceProvider } from '../../providers/movie-service/movie-service';


/**
 * Generated class for the InTheatresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-in-theatres',
  templateUrl: 'in-theatres.html',
})
export class InTheatresPage {

  inTheatres:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService:MovieServiceProvider, 
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {

    this.movieService.getInTheaters()
    .subscribe(data => {

      this.inTheatres = data.results;
      
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
