# KomMonitorGeocoderProxy.GeocodeApi

All URIs are relative to *http://localhost:8090/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocodeByQueryString**](GeocodeApi.md#geocodeByQueryString) | **GET** /geocoder/geocode/query-string | proxies search request to underlying geocoding service in order to find coordinates for entered location
[**geocodeByStructuredQuery**](GeocodeApi.md#geocodeByStructuredQuery) | **GET** /geocoder/geocode/query-structured | proxies search request to underlying geocoding service in order to find coordinates for entered structured data. No parameter is required. Instead any combination of structrured query elements may respond with 0 ... n result records in the form of a GeoJSON FeatureCollection, where each feature has more or less details with regard to address details

<a name="geocodeByQueryString"></a>
# **geocodeByQueryString**
> GeocodingOutputType geocodeByQueryString(q, opts)

proxies search request to underlying geocoding service in order to find coordinates for entered location

proxies search request to underlying geocoding service in order to find coordinates for entered location

### Example
```javascript
import {KomMonitorGeocoderProxy} from 'kom_monitor_geocoder_proxy';

let apiInstance = new KomMonitorGeocoderProxy.GeocodeApi();
let q = "q_example"; // String | the query string (e.g. 'Müllerstr. 3, Essen' or '3, Müllerstraße, 45147')
let opts = { 
  'lon': "lon_example", // String | optional longitude to prioritize results
  'lat': "lat_example" // String | optional latitude to prioritize results
};
apiInstance.geocodeByQueryString(q, opts, (error, data, response) => {
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
 **q** | **String**| the query string (e.g. &#x27;Müllerstr. 3, Essen&#x27; or &#x27;3, Müllerstraße, 45147&#x27;) | 
 **lon** | **String**| optional longitude to prioritize results | [optional] 
 **lat** | **String**| optional latitude to prioritize results | [optional] 

### Return type

[**GeocodingOutputType**](GeocodingOutputType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="geocodeByStructuredQuery"></a>
# **geocodeByStructuredQuery**
> GeocodingOutputType geocodeByStructuredQuery(opts)

proxies search request to underlying geocoding service in order to find coordinates for entered structured data. No parameter is required. Instead any combination of structrured query elements may respond with 0 ... n result records in the form of a GeoJSON FeatureCollection, where each feature has more or less details with regard to address details

proxies search request to underlying geocoding service in order to find coordinates for entered structured data. No parameter is required. Instead any combination of structrured query elements may respond with 0 ... n result records in the form of a GeoJSON FeatureCollection, where each feature has more or less details with regard to address details

### Example
```javascript
import {KomMonitorGeocoderProxy} from 'kom_monitor_geocoder_proxy';

let apiInstance = new KomMonitorGeocoderProxy.GeocodeApi();
let opts = { 
  'country': "country_example", // String | optional country name
  'state': "state_example", // String | optional state name
  'city': "city_example", // String | optional city name
  'district': "district_example", // String | optional district name
  'postcode': "postcode_example", // String | optional postcode name
  'street': "street_example", // String | required street name
  'housenumber': "housenumber_example", // String | optional housenumber name
  'lon': "lon_example", // String | optional longitude to prioritize results
  'lat': "lat_example" // String | optional latitude to prioritize results
};
apiInstance.geocodeByStructuredQuery(opts, (error, data, response) => {
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
 **country** | **String**| optional country name | [optional] 
 **state** | **String**| optional state name | [optional] 
 **city** | **String**| optional city name | [optional] 
 **district** | **String**| optional district name | [optional] 
 **postcode** | **String**| optional postcode name | [optional] 
 **street** | **String**| required street name | [optional] 
 **housenumber** | **String**| optional housenumber name | [optional] 
 **lon** | **String**| optional longitude to prioritize results | [optional] 
 **lat** | **String**| optional latitude to prioritize results | [optional] 

### Return type

[**GeocodingOutputType**](GeocodingOutputType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

