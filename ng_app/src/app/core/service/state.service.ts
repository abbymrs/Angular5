import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

    isLogin: boolean = false;
    lang: string = 'en-us';
    popupMessage: string;
    redirectUrl: string = '/home';
    startTime: number;

    constructor() { }
}