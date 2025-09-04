# IP2Location Deno API

## IP2Location Class

```{py:class} IP2Location()
Initiate the IP2Location class.
```

```{py:function} open(database_file_path)
Open and load the IP2Location BIN database for lookup.

:param str database_file_path: (Required) The file path links to IP2Location BIN databases.
```

```{py:function} close()
Closes BIN file and resets metadata.
```

```{py:function} getAll(ip_address)
Retrieve geolocation information for an IP address.

:param str ip_address: (Required) The IP address (IPv4 or IPv6).
:return: Returns the geolocation information. Refer below table for the fields avaliable.

**RETURN FIELDS**

| Field Name       | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| countryShort    |     Two-character country code based on ISO 3166. |
| countryLong     |     Country name based on ISO 3166. |
| region           |     Region or state name. |
| city             |     City name. |
| isp              |     Internet Service Provider or company\'s name. |
| latitude         |     City latitude. Defaults to capital city latitude if city is unknown. |
| longitude        |     City longitude. Defaults to capital city longitude if city is unknown. |
| domain           |     Internet domain name associated with IP address range. |
| zipCode          |     ZIP code or Postal code. [172 countries supported](https://www.ip2location.com/zip-code-coverage). |
| timeZone         |     UTC time zone (with DST supported). |
| netSpeed         |     Internet connection type. |
| iddCode         |     The IDD prefix to call the city from another country. |
| areaCode        |     A varying length number assigned to geographic areas for calls between cities. [223 countries supported](https://www.ip2location.com/area-code-coverage). |
| weatherStationCode     |     The special code to identify the nearest weather observation station. |
| weatherStationName     |     The name of the nearest weather observation station. |
| mcc              |     Mobile Country Codes (MCC) as defined in ITU E.212 for use in identifying mobile stations in wireless telephone networks, particularly GSM and UMTS networks. |
| mnc              |     Mobile Network Code (MNC) is used in combination with a Mobile Country Code(MCC) to uniquely identify a mobile phone operator or carrier. |
| mobileBrand     |     Commercial brand associated with the mobile carrier. You may click [mobile carrier coverage](https://www.ip2location.com/mobile-carrier-coverage) to view the coverage report. |
| elevation        |     Average height of city above sea level in meters (m). |
| usageType       |     Usage type classification of ISP or company. |
| addressType     |     IP address types as defined in Internet Protocol version 4 (IPv4) and Internet Protocol version 6 (IPv6). |
| category         |     The domain category based on [IAB Tech Lab Content Taxonomy](https://www.ip2location.com/free/iab-categories). |
| district         |     District or county name. |
| asn              |     Autonomous system number (ASN). BIN databases. |
| as          |     Autonomous system (AS) name. |
```



## IPTools Class

```{py:class} IPTools ()
Initiate IPTools class.
```

```{py:function} isIPV4(ipAddress)
Verify if a string is a valid IPv4 address.

:param str ipAddress: (Required) IP address.
:return: Return True if the IP address is a valid IPv4 address or False if it isn't a valid IPv4 address.
:rtype: boolean
```

```{py:function} isIPV6(ipAddress)
Verify if a string is a valid IPv6 address

:param str ipAddress: (Required) IP address.
:return: Return True if the IP address is a valid IPv6 address or False if it isn't a valid IPv6 address.
:rtype: boolean
```

```{py:function} ipV4ToDecimal(ipAddress)
Translate IPv4 address from dotted-decimal address to decimal format.

:param str ipAddress: (Required) IPv4 address.
:return: Return the decimal format of the IPv4 address.
:rtype: int
```

```{py:function} decimalToIPV4(ipNumber)
Translate IPv4 address from decimal number to dotted-decimal address.

:param str ip_number: (Required) Decimal format of the IPv4 address.
:return: Returns the dotted-decimal format of the IPv4 address.
:rtype: string
```

```{py:function} ipV6ToDecimal(ipAddress)
Translate IPv6 address from hexadecimal address to decimal format.

:param str ipAddress: (Required) IPv6 address.
:return: Return the decimal format of the IPv6 address.
:rtype: int
```

```{py:function} decimalToIPV6(ipNumber)
Translate IPv6 address from decimal number into hexadecimal address.

:param str ip_number: (Required) Decimal format of the IPv6 address.
:return: Returns the hexadecimal format of the IPv6 address.
:rtype: string
```

```{py:function} ipV4ToCIDR(ip_from, ip_to)
Convert IPv4 range into a list of IPv4 CIDR notation.

:param str ip_from: (Required) The starting IPv4 address in the range.
:param str ip_to: (Required) The ending IPv4 address in the range.
:return: Returns the list of IPv4 CIDR notation.
:rtype: array
```

```{py:function} cidrToIPV4(cidr)
Convert IPv4 CIDR notation into a list of IPv4 addresses.

:param str cidr: (Required) IPv4 CIDR notation.
:return: Returns an list of IPv4 addresses.
:rtype: array
```

```{py:function} ipV6ToCIDR(ip_from, ip_to)
Convert IPv6 range into a list of IPv6 CIDR notation.

:param str ip_from: (Required) The starting IPv6 address in the range.
:param str ip_to: (Required) The ending IPv6 address in the range.
:return: Returns the list of IPv6 CIDR notation.
:rtype: array
```

```{py:function} cidrToIPV6(cidr)
Convert IPv6 CIDR notation into a list of IPv6 addresses.

:param str cidr: (Required) IPv6 CIDR notation.
:return: Returns an list of IPv6 addresses.
:rtype: array
```


```{py:function} compressIPV6(ipAddress)
Compress a IPv6 to shorten the length.

:param str ipAddress: (Required) IPv6 address.
:return: Returns the compressed version of IPv6 address.
:rtype: str
```

```{py:function} expandIPV6(ipAddress)
Expand a shorten IPv6 to full length.

:param str ipAddress: (Required) IPv6 address.
:return: Returns the extended version of IPv6 address.
:rtype: str
```