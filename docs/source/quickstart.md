# Quickstart

## Dependencies

This library requires IP2Location BIN database to function. You may
download the BIN database at

-   IP2Location LITE BIN Data (Free): <https://lite.ip2location.com>
-   IP2Location Commercial BIN Data (Comprehensive):
    <https://www.ip2location.com>

## Requirements

1.  Deno 1.30.0 and above.

## Installation

This library require no installation. You can just use this library like this:

```javascript
import { IP2Location } from "https://deno.land/x/ip2location@8.3.1/mod.ts";
```

## Sample Codes

### Query geolocation information from BIN database

You can query the geolocation information from the IP2Location BIN database as below:

```javascript

import { IP2Location } from "https://deno.land/x/ip2location@8.3.1/mod.ts";

let ip2location = new IP2Location();

ip2location.open("./DB25.BIN");

let testip = ['8.8.8.8', '2404:6800:4001:c01::67'];

for (var x = 0; x < testip.length; x++) {
	let result = ip2location.getAll(testip[x]);
	for (var key in result) {
		console.log(key + ": " + result[key]);
	}
	console.log("--------------------------------------------------------------");
}

ip2location.close();
```

### Processing IP address using IP Tools class

You can manupulate IP address, IP number and CIDR as below:

```javascript
import { IPTools } from "https://deno.land/x/ip2location@8.3.1/mod.ts";

let tools = new IPTools();

console.log(tools.isIPV4("60.54.166.38"));
console.log(tools.isIPV6("2001:4860:4860::8888"));
console.log(tools.ipV4ToDecimal("60.54.166.38"));
console.log(tools.ipV6ToDecimal("2001:4860:4860::8888"));
console.log(tools.decimalToIPV4(1010214438));
console.log(tools.decimalToIPV6("530610913025797008819807084026527744"));
console.log(tools.compressIPV6("66:3123:4860:3234:411:23:000:000"));
console.log(tools.expandIPV6("66:023:40:34:411:23:000:000"));
let cidr = tools.ipV4ToCIDR("10.0.0.0", "10.10.2.255");
for (const x of cidr) {
	console.log(x);
}
cidr = tools.ipV6ToCIDR("2001:4860:4860:0000:0000:0000:0000:8888", "2001:4860:4860:0000:eeee:ffff:ffff:ffff");
for (const x of cidr) {
	console.log(x);
}
console.log(tools.cidrToIPV4("10.123.80.0/12"));
console.log(tools.cidrToIPV6("2002:1234::abcd:ffff:c0a8:101/62"));
```

