export class GoogleAPI {
  loadAPI: Promise<any>
  constructor(){
    this.loadAPI = new Promise((resolve) => this.loadScript());
  }
  
  loadScript(){
    console.log('foo..')
//    var map = new google.maps.Map(document.getElementById('map'), {
 //       center: {lat: -34.397, lng: 150.644},
   //     scrollwheel: false,
     //   zoom: 8
    //});
  //}
}
}
