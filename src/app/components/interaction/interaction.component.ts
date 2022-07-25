import {Component} from "@angular/core";
import {ExchangeService} from "../../services/exchange.service";


@Component({
  selector: 'app-input',
  templateUrl: './interaction.component.html'
})
export class InteractionComponent {
  curr = ['UAH', 'USD', 'EUR', 'BTC']
  sellingCurrency = this.curr[0]
  buyingCurrency = this.curr[1]
  changingAmount = 0
  changingAmount2 = 0
  constructor(
    public exchangeService:ExchangeService
    ) {
  }


}
