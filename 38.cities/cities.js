"use strict";
function describe_city(city, country = 'Default countrt.') {
    console.log(` ${city} is in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('paris');
