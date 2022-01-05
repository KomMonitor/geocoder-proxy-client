/*
 * KomMonitor Geocoder Proxy
 * KomMonitor Geocoder Proxy that defines a common query and response interface for arbitrary geocoding services like nominatim, photon (datasource is OSM)
 *
 * OpenAPI spec version: 0.0.1
 * Contact: christian.danowski-buhren@hs-bochum.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.31
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KomMonitorGeocoderProxy);
  }
}(this, function(expect, KomMonitorGeocoderProxy) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GeocodingGeometryType', function() {
      beforeEach(function() {
        instance = new KomMonitorGeocoderProxy.GeocodingGeometryType();
      });

      it('should create an instance of GeocodingGeometryType', function() {
        // TODO: update the code to test GeocodingGeometryType
        expect(instance).to.be.a(KomMonitorGeocoderProxy.GeocodingGeometryType);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property coordinates (base name: "coordinates")', function() {
        // TODO: update the code to test the property coordinates
        expect(instance).to.have.property('coordinates');
        // expect(instance.coordinates).to.be(expectedValueLiteral);
      });

    });
  });

}));