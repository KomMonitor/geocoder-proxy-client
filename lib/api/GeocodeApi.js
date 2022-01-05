"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeocodeApi = void 0;

var _ApiClient = require("../ApiClient");

var _GeocodingOutputType = require("../model/GeocodingOutputType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Geocode service.
* @module api/GeocodeApi
* @version 0.0.1
*/
var GeocodeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GeocodeApi. 
  * @alias module:api/GeocodeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function GeocodeApi(apiClient) {
    _classCallCheck(this, GeocodeApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the geocodeByQueryString operation.
   * @callback moduleapi/GeocodeApi~geocodeByQueryStringCallback
   * @param {String} error Error message, if any.
   * @param {module:model/GeocodingOutputType{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * proxies search request to underlying geocoding service in order to find coordinates for entered location
   * proxies search request to underlying geocoding service in order to find coordinates for entered location
   * @param {String} q the query string (e.g. &#x27;Müllerstr. 3, Essen&#x27; or &#x27;3, Müllerstraße, 45147&#x27;)
   * @param {Object} opts Optional parameters
   * @param {String} opts.lon optional longitude to prioritize results
   * @param {String} opts.lat optional latitude to prioritize results
   * @param {module:api/GeocodeApi~geocodeByQueryStringCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */


  _createClass(GeocodeApi, [{
    key: "geocodeByQueryString",
    value: function geocodeByQueryString(q, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'q' is set

      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling geocodeByQueryString");
      }

      var pathParams = {};
      var queryParams = {
        'q': q,
        'lon': opts['lon'],
        'lat': opts['lat']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GeocodingOutputType.GeocodingOutputType;
      return this.apiClient.callApi('/geocoder/geocode/query-string', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the geocodeByStructuredQuery operation.
     * @callback moduleapi/GeocodeApi~geocodeByStructuredQueryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeocodingOutputType{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * proxies search request to underlying geocoding service in order to find coordinates for entered structured data. No parameter is required. Instead any combination of structrured query elements may respond with 0 ... n result records in the form of a GeoJSON FeatureCollection, where each feature has more or less details with regard to address details
     * proxies search request to underlying geocoding service in order to find coordinates for entered structured data. No parameter is required. Instead any combination of structrured query elements may respond with 0 ... n result records in the form of a GeoJSON FeatureCollection, where each feature has more or less details with regard to address details
     * @param {Object} opts Optional parameters
     * @param {String} opts.country optional country name
     * @param {String} opts.state optional state name
     * @param {String} opts.city optional city name
     * @param {String} opts.district optional district name
     * @param {String} opts.postcode optional postcode name
     * @param {String} opts.street required street name
     * @param {String} opts.housenumber optional housenumber name
     * @param {String} opts.lon optional longitude to prioritize results
     * @param {String} opts.lat optional latitude to prioritize results
     * @param {module:api/GeocodeApi~geocodeByStructuredQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */

  }, {
    key: "geocodeByStructuredQuery",
    value: function geocodeByStructuredQuery(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'country': opts['country'],
        'state': opts['state'],
        'city': opts['city'],
        'district': opts['district'],
        'postcode': opts['postcode'],
        'street': opts['street'],
        'housenumber': opts['housenumber'],
        'lon': opts['lon'],
        'lat': opts['lat']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GeocodingOutputType.GeocodingOutputType;
      return this.apiClient.callApi('/geocoder/geocode/query-structured', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return GeocodeApi;
}();

exports.GeocodeApi = GeocodeApi;