import { Component, OnInit } from '@angular/core';
import {CoinsService} from '../../api/rest/coins.service';
import {Filter} from '../../api/model/filter';
import {CoinList} from '../../api/model/coinList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter: Filter = {
    vs_currency : 'usd',
    page: 1,
    per_page: 3,
    sparkline: false,
    price_change_percentage: '',
    order: 'market_cap_desc',
    ids: ''
  };

  coins: CoinList[] = [];

  constructor(private coinsServices: CoinsService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.coinsServices.getListCoins(this.filter).subscribe((resp: CoinList[]) => {
      this.coins = resp;
    });
  }

}
