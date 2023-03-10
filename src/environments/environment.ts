// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_END_POINT : "http://192.168.1.8:9002/v1/",
  NOTIFICATION_END_POINT : "https://notification.arrellio.com/v1/", 
  TICKET_END_POINT : "http://192.168.1.8:9004/v1/", 
  SOCKET_END_POINT : "http://192.168.1.8:9005/",
  ZIPCODE_API_KEY : "js-6tQEG7H0MMZWp5q0WePvcqfKaYALtfuUwKxaDiB29gVgIAeVmAvAH2jlrJQ8YeGb"
  // API_END_POINT : "https://backend-api-dev.arrellio.com/v1/",
  // NOTIFICATION_END_POINT : "https://notification.arrellio.com/v1/",
  // TICKET_END_POINT : "https://tickets-api-dev.arrellio.com/v1/", 
  // SOCKET_END_POINT : "https://tickets-api-dev.arrellio.com/",
  // ZIPCODE_API_KEY : "js-6tQEG7H0MMZWp5q0WePvcqfKaYALtfuUwKxaDiB29gVgIAeVmAvAH2jlrJQ8YeGb"
  
};

/*d
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
