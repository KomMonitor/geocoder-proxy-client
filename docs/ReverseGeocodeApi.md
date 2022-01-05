# KomMonitorGeocoderProxy.ReverseGeocodeApi

All URIs are relative to *http://localhost:8090/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reverseGeocode**](ReverseGeocodeApi.md#reverseGeocode) | **GET** /geocoder/reverse | proxies reverse-geocode request to underlying geocoding service in order to find address details for given longitude, latitude coordinates

<a name="reverseGeocode"></a>
# **reverseGeocode**
> GeocodingOutputType reverseGeocode(lon, lat)

proxies reverse-geocode request to underlying geocoding service in order to find address details for given longitude, latitude coordinates

proxies reverse-geocode request to underlying geocoding service in order to find address details for given longitude, latitude coordinates

### Example
```javascript
import {KomMonitorGeocoderProxy} from 'kom_monitor_geocoder_proxy';

let apiInstance = new KomMonitorGeocoderProxy.ReverseGeocodeApi();
let lon = "lon_example"; // String | required longitude
let lat = "lat_example"; // String | required latitude

apiInstance.reverseGeocode(lon, lat, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lon** | **String**| required longitude | 
 **lat** | **String**| required latitude | 

### Return type

[**GeocodingOutputType**](GeocodingOutputType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

