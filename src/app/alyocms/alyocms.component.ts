import { Component } from '@angular/core';

@Component({
  selector: 'app-alyocms',
  templateUrl: './alyocms.component.html',
  styleUrls: ['./alyocms.component.css']
})
export class AlyocmsComponent {

  /*
    padding: PD       -> PDS,PDI,PDD,PDS
    margin: MR        -> MRS,MRI,MRD,MRS
    bordo-rotondo: BR -> BRSD,BRSS, BRID,BRID,
    superiore: SUP    -> 
    inferiore: INF    ->
    larghezza: LRG    ->
    altezza:   ALT    ->

  */
  stile = [
    {tipo: "PA",  nome: "Padding",                                 proprieta: "padding" },
    {tipo: "PAT", nome: "Padding Superiore",                       proprieta: "padding-top" },
    {tipo: "PAB", nome: "Padding Inferiore",                       proprieta: "padding-bottom" },
    {tipo: "PAR", nome: "Padding Destro" ,                         proprieta: "padding-right" },
    {tipo: "PAL", nome: "Padding Sinistro",                        proprieta: "padding-left" },
    {tipo: "MR",  nome: "Margine",                                 proprieta: "margin" },
    {tipo: "MRT", nome: "Margine Superiore",                       proprieta: "margin-top" },
    {tipo: "MRB", nome: "Margine Inferiore",                       proprieta: "margin-bottom" },
    {tipo: "MRR", nome: "Margine Destro"   ,                         proprieta: "margin-right" },
    {tipo: "MRL", nome: "Margine Sinistro",                          proprieta: "margin-left" },
    {tipo: "BR",  nome: "Bordo Rotondo",                                              proprieta: "border-radius"             },
    {tipo: "BRTR", nome: "Bordo Rotondo Superiore Destro",                            proprieta: "border-top-right-radius"   },
    {tipo: "BRTL", nome: "Bordo Rotondo Superiore Sinistro",                          proprieta: "border-top-left-radius"    },
    {tipo: "BRBR", nome: "Bordo Rotondo Inferiore Destro"   ,                         proprieta: "border-bottom-right-radius"},
    {tipo: "BRBL", nome: "Bordo Rotondo Inferiore Sinistro",                          proprieta: "border-bottom-left-radius" },
    {tipo: "TOP", nome: "Superiore",                                proprieta: "top" },
    {tipo: "BTM", nome: "Inferiore",                                proprieta: "bottom" },
    {tipo: "WDT", nome: "Larghezza",                                proprieta: "width" },
    {tipo: "HGH", nome: "Altezza  ",                                proprieta: "height" },
  ]

  classe = [
    {tipo: "PA",  nome: "Padding",                                                    valore: "alyo-padding-"},
    {tipo: "PAT", nome: "Padding Superiore",                                          valore: "alyo-padding-superiore-"},
    {tipo: "PAB", nome: "Padding Inferiore",                                          valore: "alyo-padding-inferiore-"},
    {tipo: "PAR", nome: "Padding Destro" ,                                            valore: "alyo-padding-destro-"},
    {tipo: "PAL", nome: "Padding Sinistro",                                           valore: "alyo-padding-sinistro-"},
    {tipo: "MR",  nome: "Margine",                                                    valore: "alyo-margine-"},
    {tipo: "MRT", nome: "Margine Superiore",                                          valore: "alyo-margine-superiore-"},
    {tipo: "MRB", nome: "Margine Inferiore",                                          valore: "alyo-margine-inferiore-"},
    {tipo: "MRR", nome: "Margine Destro"   ,                                          valore: "alyo-margine-destro-"},
    {tipo: "MRL", nome: "Margine Sinistro",                                           valore: "alyo-margine-sinistro-"},
    {tipo: "BR",  nome: "Bordo Rotondo",                                              valore: "alyo-bordo-rotondo-"},
    {tipo: "BRTR", nome: "Bordo Rotondo Superiore Destro",                            valore: "alyo-bordo-rotondo-superiore-"},
    {tipo: "BRTL", nome: "Bordo Rotondo Superiore Sinistro",                          valore: "alyo-bordo-rotondo-inferiore-"},
    {tipo: "BRBR", nome: "Bordo Rotondo Inferiore Destro"   ,                         valore: "alyo-bordo-rotondo-destro-"   },
    {tipo: "BRBL", nome: "Bordo Rotondo Inferiore Sinistro",                          valore: "alyo-bordo-rotondo-sinistro-" },       
    {tipo: "WDT", nome: "Larghezza",                                                  valore: "alyo-larghezza-"},
    {tipo: "HGH", nome: "Altezza",                                                    valore: "alyo-altezza-" },
    {tipo: "BXS", nome: "Ombra",                                                      valore: "alyo-ombra-" },         
    {tipo: "FSZ", nome: "Testo Grandezza",                                            valore: "alyo-testo-" },     
    {tipo: "TXA", nome: "Testo Alineato",                                             valore: "alyo-testo-" },        
    {tipo: "TXT", nome: "Testo Aa 1L",                                                valore: "alyo-testo-" },     
    {tipo: "FW" , nome:  "Grassetto",                                                  valore: "alyo-testo-" }, 
  ]

}
