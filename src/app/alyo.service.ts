import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: "root"
})
export class AlyoService {


  perorso = "/api/impostazioni/php/"
  percorsi = [this.perorso+"caricamento2.0.php",
              this.perorso+"inserimento.php",
              this.perorso+"modifica.php",
              this.perorso+"cancellazione.php",
              this.perorso+"cerca.php",
              this.perorso+"caricamentofile.php",
              this.perorso+"caricamentolistafile.php",
              this.perorso+"file.php",
             ];
  nuero_di_anni = 5

  constructor(private http: HttpClient,private cookie: CookieService){}

  ngOnInit(): void {}

  // Caricamento / Inserimento / Modifica / Cancellazione sul server
  alyo_caricamento(dati:  any):              Observable<any> { return this.alyo_post(this.percorsi[0],dati); }
  alyo_inserimento(dati: any):               Observable<any> { return this.alyo_post(this.percorsi[1],dati); }
  alyo_modifica(dati: any):                  Observable<any> { return this.alyo_post(this.percorsi[2],dati); }
  alyo_cancellazione(dati: any):             Observable<any> { return this.alyo_post(this.percorsi[3],dati); }
  alyo_cerca(dati: any):                     Observable<any> { return this.alyo_post(this.percorsi[4],dati); }
  alyo_caricamento_file(dati:  any):         Observable<any> { return this.alyo_post(this.percorsi[5],dati); }
  alyo_caricamento_lista_file(dati:  any):   Observable<any> { return this.alyo_post(this.percorsi[6],dati); }
  alyo_file(dati:  any):                     Observable<any> { return this.alyo_post(this.percorsi[7],dati); }

  alyo_post(url: string, dati:  FormData): Observable<any> { return this.http.post(url,dati); }

  // Caricamento / Inserimento / Modifica / Tramite Cookie
  alyo_caricamento_cookie(valore:  any): any   { return this.cookie.get(valore)   }
  alyo_cancellazione_cookie(valore: any) { this.cookie.delete(valore) }
  alyo_inserimento_cookie(chiave: any, valore: any)     { 
    var now = new Date()
    var exp = new Date(now.getFullYear()+this.nuero_di_anni, now.getMonth(), now.getDate());
    this.cookie.set(chiave,valore,{ expires: exp })
  }

  // Caricamento / Inserimento / Modifica / Tramite LocalStorage
  alyo_caricamento_localstorage(chiave:  any): any         { return localStorage.getItem(chiave);        }
  alyo_cancellazione_localstorage(chiave: any)             {        localStorage.removeItem(chiave);     }
  alyo_inserimento_localstorage(chiave: any, valore: any)  {        localStorage.setItem(chiave, valore);}

}

