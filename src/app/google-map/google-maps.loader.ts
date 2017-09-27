export class GoogleMapsLoader {
  private loadApi;
  private ak: string;

  constructor(ak) {
    this.ak = ak;
    this.loadApi = new Promise(resolve => {
      // Set callback for when google maps is loaded.
      window['googleMapLoaded'] = (ev) => {
        console.log('google api loaded');
        resolve(window['google'].maps);
      };
      const google = window['google'];
      // need to check if already has google maps
      // if yes, cannot send request anymore
      if (google) {
        console.log('already have the google maps...');
        resolve(window['google'].maps);
      } else {
        this.appendScript(this.ak);
      }
    });
  }

  load() {
    return this.loadApi.then((gapi) => {
      console.log(gapi);
    });
  }

  appendScript(ak: string) {
    let MAP_URL: string = `https://maps.googleapis.com/maps/api/js?key=${ak}&callback=googleMapLoaded`;
    let createTag = function () {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      script.src = MAP_URL;
      document.body.appendChild(script);
    };
    createTag();
    console.log('loading..');
  }

}
