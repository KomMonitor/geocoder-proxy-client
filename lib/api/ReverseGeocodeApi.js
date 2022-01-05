"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReverseGeocodeApi = void 0;

var _ApiClient = require("../ApiClient");

var _GeocodingOutputType = require("../model/GeocodingOutputType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* ReverseGeocode service.
* @module api/ReverseGeocodeApi
* @version 0.0.1
*/
var ReverseGeocodeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ReverseGeocodeApi. 
  * @alias module:api/ReverseGeocodeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ReverseGeocodeApi(apiClient) {
    _classCallCheck(this, ReverseGeocodeApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the reverseGeocode operation.
   * @callback moduleapi/ReverseGeocodeApi~reverseGeocodeCallback
   * @param {String} error Error message, if any.
   * @param {module:model/GeocodingOutputType{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * proxies reverse-geocode request to underlying geocoding service in order to find address details for given longitude, latitude coordinates
   * proxies reverse-geocode request to underlying geocoding service in order to find address details for given longitude, latitude coordinates
   * @param {String} lon required longitude
   * @param {String} lat required latitude
   * @param {module:api/ReverseGeocodeApi~reverseGeocodeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */


  _createClass(ReverseGeocodeApi, [{
    key: "reverseGeocode",
    value: function reverseGeocode(lon, lat, callback) {
      var postBody = null; // verify the required parameter 'lon' is set

      if (lon === undefined || lon === null) {
        throw new Error("Missing the required parameter 'lon' when calling reverseGeocode");
      } // verify the required parameter 'lat' is set


      if (lat === undefined || lat === null) {
        throw new Error("Missing the required parameter 'lat' when calling reverseGeocode");
      }

      var pathParams = {};
      var queryParams = {
        'lon': lon,
        'lat': lat
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GeocodingOutputType.GeocodingOutputType;
      return this.apiClient.callApi('/geocoder/reverse', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ReverseGeocodeApi;
}();

exports.ReverseGeocodeApi = ReverseGeocodeApi;