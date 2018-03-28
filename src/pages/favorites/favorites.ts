import { Component ,OnInit,Inject} from '@angular/core';
import { IonicPage, NavController, NavParams ,ItemSliding} from 'ionic-angular';
import {Dish} from '../../shared/dish';
import {FavoriteProvider} from '../../providers/favorite/favorite';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit{
  favorites: Dish[];
  errMsg: string;
  constructor(public navCtrl: NavController, public navParams: NavParams
     , private favoriteservice: FavoriteProvider,@Inject('BaseURL') private BaseURL) {
  }
 ngOnInit(){
   this.favoriteservice.getFavorites()
   .subscribe(favorites=> this.favorites=favorites , errmsg => this.errMsg= <any>errmsg);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }
 
  deleteFavorite(item: ItemSliding, id: number) {
    console.log('delete', id);
    this.favoriteservice.deleteFavorite(id)
      .subscribe(favorites => this.favorites = favorites,
        errmess => this.errMsg = <any>errmess);
    item.close();

}
}