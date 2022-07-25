import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {ICurrency} from "../components/models/currencyModel";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) {

  }

  getCurrencies(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .pipe(
      delay(1500)
    )
  }
}
