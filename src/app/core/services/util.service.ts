import { Injectable } from '@angular/core';

const xml2js = require("xml2js");

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  convertXMLToJSON(xmlData: any) {
    let json;

    xml2js.parseString(xmlData, function (err: any, result: any) {
      json = result;
    });

    return json;
  }
}
