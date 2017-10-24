/**
* Author,email :     Aldrin Rasdas , arasdas@coca-cola.com
* Date Create  :     April, 2014
* Description  :     Contains config values (or some variables that set and read by othe JS files
*
* REVISION HISTORY
*
* Author,email :	John Raymund Niconi, niconi@coca-cola.com
* Date Revised :	April, 2016
* Description  :	UI enhancements, geolocation fix, side menu collapsible
*
**/

var config = new Object();

config.checkTabletMode = function() {
	var w = $("#deviceType").css('width');
	if (w=='2px') {
		return true;
	} else {
		return false;
	}
}

config.appTitle = "Travel FAQ";
config.appInternalVersion = "3.0.0";
config.tabletMode = config.checkTabletMode();//config.getDeviceType();
config.defaultCountryCode = 'CN';
//config.updateAvailableMessage = 'New version of data is available for download.\n\nKindly sync with server to get the latest Travel FAQ data.';

config.updateAvailableMessage = 'New version of data is available for download.\n\nKindly tap the top right corner Gear then Update to get the latest Travel FAQ data.';
 

config.localDBVersionKey = "tfaq.data.version";
config.localDBName = "TravelFAQData";
config.localDBDisp = "TFAQ Offline Storage";
config.localDBSize = 50 * 1024 * 1024;
config.localDBVersion = "1.0";
config.localDBCountryTable = 'country_detail';

config.remoteServerAddress = "http://icokecontent.chinacloudapp.cn/store/travelfaq/";
//config.remoteServerAddress = "http://ec2-54-214-99-121.us-west-2.compute.amazonaws.com/travelfaq/";
config.remoteDataFileName = "TravelFAQData.xml";
config.remoteDataFlagsFolder = "flags";
config.remoteConnectTimeout = 5000;

config.geoLatSearchKey = '<latitude>';
config.geoLngSearchKey = '<longitude>';
config.googleMapApiURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=<latitude>,<longitude>&sensor=true';
config.geonamesApiURL = 'http://api.geonames.org/findNearbyPlaceNameJSON?formatted=true&lat=<latitude>&lng=<longitude>&username=kotravelfaq';
config.gisgraphyApiURL = 'http://services.gisgraphy.com/street/search?lat=<latitude>&lng=<longitude>&from=1&to=1&format=json';
config.nominatimApiURL = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=<latitude>&lon=<longitude>&addressdetails=1';
config.mapCoords1Key = '<latlng_1>';
config.mapCoords2Key = '<latlng_2>';

//key=AIzaSyA1XtXp7ZeoBm-i22Oc1RS0BNpdnhwTytM



config.defaultIconPath = 'images/icons/default.png';
//config.localImageFolderPath = 'flags';
config.localImageFolderPath = 'images/icons/flags'; /* HACK localized for sidebar */
config.localImageFolderPath2 = 'images/icons/flags'; /* HACK localized for sidebar */
config.fileSystemRootFolder = '';





config.detailLabels = [
	{text:"Voice Call",icon:"call.svg",id:"voicecall"},
	{text:"InterCall",icon:"intercall.svg",id:"intercall"},
	{text:"Office Location",icon:"office.svg",id:"officeloc"},
	{text:"KO Metrics / Facts",icon:"stock.svg",id:"kometrics"},
	{text:"Preferred Hotels",icon:"hotel.svg",id:"prefhotel"},
	{text:"Useful Info",icon:"info.png",id:"usefulinfo"}
];


config.fixCountryFilter = false;
config.locationCoarseTimeout = 30000;
config.geoJSONCountriesFile = "countries.geojson";


