import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
    constructor() { }
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    findAncestor(selector, parentClassName) {
        while (selector && selector.className.indexOf(parentClassName) === -1) {
            selector = selector.parentElement;
        }
        return selector;
    }
    includes(str, key) {
        return (str && str.indexOf(key) > -1) ? true : false;
    }
    isArray(val) {
        return Object.prototype.toString.call(val) === '[object Array]';
    }
    isNumber(val) {
        return Object.prototype.toString.call(val) === '[object Number]'
    }
    isBoolean(val) {
        return Object.prototype.toString.call(val) === '[object Boolean]'
    }
    fillMaxLength(val, max) {
        return val.length > max ? val.substr(0, max) : val;
    }
    isVisaCard(cardNumber) {
        let pattern13 = /^4\d{12}$/g;
        let pattern16 = /^4\d{15}$/g;
        let pattern19 = /^4\d{18}$/g;
        return pattern13.test(cardNumber) || pattern16.test(cardNumber) || pattern19.test(cardNumber);
    }
    isMasterCard(cardNumber) {
        let pattern = /^5[1|2|3|4|5]\d{14}$/g;
        return pattern.test(cardNumber);
    }
    isValidCreditCard(cardNumber) {
        if (!cardNumber) return false;
        return this.isVisaCard(cardNumber) || this.isMasterCard(cardNumber);
    }
    isDate(val) {
        let d = Date.parse(val);
        if (!isNaN(d)) return true;
        return false;
    }
    isNumberOnly(str) {
        return str.split('').every(item => {
            return /[0-9]/g.test(item);
        });
    }
    getOffset(el, offsetName) {
        let offet = {};
        offet[offsetName] = 0;
        while (el.offsetParent) {
            offet[offsetName] += el[offsetName];
            el = el.offsetParent;
        }
        return offet[offsetName];
    }
    deepClone(o) {
        let output, v, key;
        output = Array.isArray(o) ? [] : {};
        for (key in o) {
            v = o[key];
            output[key] = (typeof v === "object") ? this.deepClone(v) : v;
        }
        return output;
    }
    getElOffset(el){
        let tmp = el;
        let left = 0;
        let top = 0;
        if (tmp) {
            do {
                left += tmp.offsetLeft;
                top += tmp.offsetTop;
            } while (tmp = tmp.offsetParent);
        }
        return {
            top: top,
            left: left
        };
    }
}
