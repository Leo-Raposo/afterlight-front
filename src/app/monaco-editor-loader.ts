declare const require: any;

const loadedMonaco = false;
let loadPromise: Promise<void> | null = null;

export function loadMonaco(): Promise<void> {
  if (loadedMonaco) {
    return Promise.resolve();
  }

  if (loadPromise) {
    return loadPromise;
  }

  const onGotAmdLoader = () => {
    return new Promise<void>((resolve) => {
      if (typeof (window as any).monaco === 'object') {
        resolve();
        return;
      }
      const loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'assets/monaco/loader.js';
      loaderScript.addEventListener('load', () => {
        (window as any).require.config({ paths: { 'vs': 'assets/monaco' } });
        (window as any).require(['vs/editor/editor.main'], () => {
          resolve();
        });
      });
      document.body.appendChild(loaderScript);
    });
  };

  const loadScript = () => {
    if (typeof (window as any).require === 'undefined') {
      const loaderScript = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = 'assets/monaco/loader.js';
      loaderScript.addEventListener('load', onGotAmdLoader);
      document.body.appendChild(loaderScript);
    } else {
      onGotAmdLoader();
    }
  };

  if (typeof (window as any).require === 'undefined') {
    loadScript();
  } else {
    return onGotAmdLoader();
  }

  return Promise.resolve();
}
