"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeocodingPropertiesType = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GeocodingPropertiesType model module.
 * @module model/GeocodingPropertiesType
 * @version 0.0.1
 */
var GeocodingPropertiesType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeocodingPropertiesType</code>.
   * @alias module:model/GeocodingPropertiesType
   * @class
   */
  function GeocodingPropertiesType() {
    _classCallCheck(this, GeocodingPropertiesType);
  }
  /**
   * Constructs a <code>GeocodingPropertiesType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeocodingPropertiesType} obj Optional instance to populate.
   * @return {module:model/GeocodingPropertiesType} The populated <code>GeocodingPropertiesType</code> instance.
   */


  _createClass(GeocodingPropertiesType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeocodingPropertiesType();
        if (data.hasOwnProperty('category')) obj.category = _ApiClient.ApiClient.convertToType(data['category'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('display_name')) obj.displayName = _ApiClient.ApiClient.convertToType(data['display_name'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('postcode')) obj.postcode = _ApiClient.ApiClient.convertToType(data['postcode'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('district')) obj.district = _ApiClient.ApiClient.convertToType(data['district'], 'String');
        if (data.hasOwnProperty('street')) obj.street = _ApiClient.ApiClient.convertToType(data['street'], 'String');
        if (data.hasOwnProperty('housenumber')) obj.housenumber = _ApiClient.ApiClient.convertToType(data['housenumber'], 'String');
      }

      return obj;
    }
  }]);

  return GeocodingPropertiesType;
}();
/**
 * category of response (osm_key)
 * @member {String} category
 */


exports.GeocodingPropertiesType = GeocodingPropertiesType;
GeocodingPropertiesType.prototype.category = undefined;
/**
 * type within category (osm_value)
 * @member {String} type
 */

GeocodingPropertiesType.prototype.type = undefined;
/**
 * a descriptive string combining several address details within one string (i.e. for display popup purposes)
 * @member {String} displayName
 */

GeocodingPropertiesType.prototype.displayName = undefined;
/**
 * name of the country
 * @member {String} country
 */

GeocodingPropertiesType.prototype.country = undefined;
/**
 * name of the state
 * @member {String} state
 */

GeocodingPropertiesType.prototype.state = undefined;
/**
 * postal code
 * @member {String} postcode
 */

GeocodingPropertiesType.prototype.postcode = undefined;
/**
 * name of the city
 * @member {String} city
 */

GeocodingPropertiesType.prototype.city = undefined;
/**
 * name of the city district
 * @member {String} district
 */

GeocodingPropertiesType.prototype.district = undefined;
/**
 * name of the street
 * @member {String} street
 */

GeocodingPropertiesType.prototype.street = undefined;
/**
 * house number (including any suffix) if available
 * @member {String} housenumber
 */

GeocodingPropertiesType.prototype.housenumber = undefined;