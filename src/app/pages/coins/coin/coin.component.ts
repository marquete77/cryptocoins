import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoinsService} from '../../../api/rest/coins.service';
import {coin} from '../../../api/model/coin';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  id: string;
  coin: coin;

  constructor(public router: Router,
              public activated: ActivatedRoute,
              private coinServices: CoinsService,
              public _location: Location) {
    this.activated.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit(): void {
    console.log(this.id);
    this.getCoinDetails();
  }

  getCoinDetails() {
    this.coinServices.getCoin(this.id).subscribe((resp: coin) => {
      this.coin = resp;
      console.log(this.coin);
      let ele = document.getElementById('description-coin')
      ele.style.textAlign = 'justify'
      ele.innerHTML = `<p>${this.coin.description.es}</p>`
    })
  }

  back() {
    this._location.back();
  }
}
