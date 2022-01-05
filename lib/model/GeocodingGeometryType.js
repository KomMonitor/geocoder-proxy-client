"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeocodingGeometryType = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GeocodingGeometryType model module.
 * @module model/GeocodingGeometryType
 * @version 0.0.1
 */
var GeocodingGeometryType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeocodingGeometryType</code>.
   * @alias module:model/GeocodingGeometryType
   * @class
   */
  function GeocodingGeometryType() {
    _classCallCheck(this, GeocodingGeometryType);
  }
  /**
   * Constructs a <code>GeocodingGeometryType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeocodingGeometryType} obj Optional instance to populate.
   * @return {module:model/GeocodingGeometryType} The populated <code>GeocodingGeometryType</code> instance.
   */


  _createClass(GeocodingGeometryType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeocodingGeometryType();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('coordinates')) obj.coordinates = _ApiClient.ApiClient.convertToType(data['coordinates'], ['Number']);
      }

      return obj;
    }
  }]);

  return GeocodingGeometryType;
}();
/**
 * the geometry type of the feature - here in geocoding context it is always point
 * @member {String} type
 * @default 'Point'
 */


exports.GeocodingGeometryType = GeocodingGeometryType;
GeocodingGeometryType.prototype.type = 'Point';
/**
 * coordinate array of feature point geometry using longitude, latitude
 * @member {Array.<Number>} coordinates
 */

GeocodingGeometryType.prototype.coordinates = undefined;