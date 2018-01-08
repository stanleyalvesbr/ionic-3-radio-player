
import { Injectable } from '@angular/core';

@Injectable()
export class StreamUrlProvider {
    url:string;
    stream:any;
    promise:any;

  constructor() {
    this.url = "http://188.166.234.48:8000/radiocristy";
   this.stream = new Audio(this.url);
  };

  play() {
    this.stream.play();
    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });
 
      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });
    
   return this.promise;
 };
 
 pause() {
   this.stream.pause();
 };

}
