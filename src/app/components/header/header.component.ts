import {Component} from "@angular/core";
import {ICurrency} from "../models/currencyModel";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderCurrencyComponent {
  loading = false
  currencies: ICurrency[]
  constructor(private currencyService:CurrencyService) {
    this.loading = true
    this.currencyService.getCurrencies().subscribe( currencies => {
      this.currencies = currencies
      this.loading = false
    })
  }


}
