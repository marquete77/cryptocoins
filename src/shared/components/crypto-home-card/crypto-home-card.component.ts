import {Component, Input, OnInit} from '@angular/core';
import {CoinList} from '../../../app/api/model/coinList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crypto-home-card',
  templateUrl: './crypto-home-card.component.html',
  styleUrls: ['./crypto-home-card.component.scss']
})
export class CryptoHomeCardComponent implements OnInit {

  @Input() coin: CoinList;

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.coin);
    console.log(this.coin.price_change_percentage_24h < 0);
  }

  handleCoinList(id) {
    this.router.navigate(['coins/list'])
  }

}
