import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    basedUrl:string = '/api/';
    constructor() { }
}