"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeocodingFeatureType = void 0;

var _ApiClient = require("../ApiClient");

var _GeocodingGeometryType = require("./GeocodingGeometryType");

var _GeocodingPropertiesType = require("./GeocodingPropertiesType");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GeocodingFeatureType model module.
 * @module model/GeocodingFeatureType
 * @version 0.0.1
 */
var GeocodingFeatureType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeocodingFeatureType</code>.
   * @alias module:model/GeocodingFeatureType
   * @class
   */
  function GeocodingFeatureType() {
    _classCallCheck(this, GeocodingFeatureType);
  }
  /**
   * Constructs a <code>GeocodingFeatureType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeocodingFeatureType} obj Optional instance to populate.
   * @return {module:model/GeocodingFeatureType} The populated <code>GeocodingFeatureType</code> instance.
   */


  _createClass(GeocodingFeatureType, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeocodingFeatureType();
        if (data.hasOwnProperty('geometry')) obj.geometry = _GeocodingGeometryType.GeocodingGeometryType.constructFromObject(data['geometry']);
        if (data.hasOwnProperty('properties')) obj.properties = _GeocodingPropertiesType.GeocodingPropertiesType.constructFromObject(data['properties']);
      }

      return obj;
    }
  }]);

  return GeocodingFeatureType;
}();
/**
 * @member {module:model/GeocodingGeometryType} geometry
 */


exports.GeocodingFeatureType = GeocodingFeatureType;
GeocodingFeatureType.prototype.geometry = undefined;
/**
 * @member {module:model/GeocodingPropertiesType} properties
 */

GeocodingFeatureType.prototype.properties = undefined;