import { Component, OnInit } from '@angular/core';
import {CoinsService} from '../../../api/rest/coins.service';
import {Filter} from '../../../api/model/filter';
import {CoinList} from '../../../api/model/coinList';
import {coin} from '../../../api/model/coin';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filter: Filter = {
    vs_currency : 'usd',
    page: 1,
    per_page: 20,
    sparkline: false,
    price_change_percentage: '',
    order: 'market_cap_desc',
    ids: ''
  };

  coins: CoinList[] = [];
  coinsHighId: string[] = [];
  coinsHigh: coin[] = [];

  loading: boolean = false;

  constructor(private coinsServices: CoinsService,
              public router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.loading = true;
    this.coinsServices.getListCoins(this.filter).subscribe((resp: CoinList[]) => {
      this.loading = false;
      if (resp) {
        this.coinsHighId = [];
        this.coinsHigh = [];
        this.coins = resp.sort((a: CoinList, b: CoinList) => {
          return b.current_price - a.current_price;
        });
        for (let i = 0; i < 2; i++) {
          this.coinsHighId.push(resp[i].id)
          this.getCoinHigh(resp[i].id)
        }
      }

    }, err => {
      this.loading = false;
      console.log(err);
    });
  }

  getCoinHigh(id: string) {
    this.coinsServices.getCoin(id).subscribe((resp: coin) => {
      this.coinsHigh.push(resp)
    }, err => {
      console.log(err);
    })
  }

  paginate(event) {
    this.filter.page = event.page + 1;
    this.filter.per_page = event.rows;
    this.getList();
  }

  handleDetails(id) {
    this.router.navigate(['coins/details', id])
  }



}
