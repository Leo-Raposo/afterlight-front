import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MonacoLoaderService {
    private monacoLoaded = new BehaviorSubject<boolean>(false);
    public monacoLoaded$ = this.monacoLoaded.asObservable();

    constructor() {
        if (typeof window !== 'undefined') {
            this.initMonaco();
        }
    }

    private initMonaco() {
        const baseUrl = '/assets';
        const onGotAmdLoader = () => {
            (window as any).require.config({
                paths: { vs: `${baseUrl}/vs` }
            });
            (window as any).require(['vs/editor/editor.main'], () => {
                this.monacoLoaded.next(true);
            });
        };

        if (!(window as any).require) {
            const loaderScript = document.createElement('script');
            loaderScript.type = 'text/javascript';
            loaderScript.src = `${baseUrl}/vs/loader.js`;
            loaderScript.addEventListener('load', onGotAmdLoader);
            document.body.appendChild(loaderScript);
        } else {
            onGotAmdLoader();
        }
    }
}