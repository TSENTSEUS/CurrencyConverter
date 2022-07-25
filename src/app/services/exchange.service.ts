import {Injectable} from "@angular/core";
import {CurrencyService} from "./currency.service";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  currencyRate: {[key:string]: number} = {
    UAH: 1,
  }

  constructor(private currencyService: CurrencyService) {
    this.currencyService.getCurrencies().subscribe( currency => {
      currency.map(currency => {
        Object.assign(this.currencyRate,{ [currency.ccy] : Number(currency.buy)})
      })
    })
  }

  sellingCurrency(sellingCurrency: string, buyingCurrency: string, changingAmount: number) {
    return changingAmount * this.currencyRate[sellingCurrency] / this.currencyRate[buyingCurrency]
  }
  buyingCurrency(sellingCurrency: string, buyingCurrency: string, changingAmount2: number){
    return changingAmount2 * this.currencyRate[buyingCurrency] / this.currencyRate[sellingCurrency]
  }

}
