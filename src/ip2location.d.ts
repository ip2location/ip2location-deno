export class IP2Location {
    /**
     * Reads bytes from file into buffer.
     *
     * @param readBytes The number of bytes to read.
     * @param position The file offset to start reading.
     * @returns buffer containing the read bytes.
     */
    readRow(readBytes: number, position: number): any;
    /**
     * Reads bytes from file and convert to specified data type.
     *
     * @param readBytes The number of bytes to read.
     * @param position The file offset to start reading.
     * @param readType The data type to convert the bytes to. (Valid values: int8|int32|uint32|float|str|int128)
     * @param isBigInt Whether to convert to BigInteger object.
     * @returns The value of the specified data type.
     */
    readBin(readBytes: number, position: number, readType: string, isBigInt: boolean): any;
    /**
     * Reads unsigned 8-bit integer from file.
     *
     * @param position The file offset to start reading.
     * @returns Unsigned 8-bit integer.
     */
    read8(position: number): number;
    /**
     * Reads unsigned 8-bit integer from buffer.
     *
     * @param position The buffer offset to start reading.
     * @param buffer The buffer containing the data.
     * @returns Unsigned 8-bit integer.
     */
    read8Row(position: number, buffer: any): number;
    /**
     * Reads unsigned 32-bit integer from file.
     *
     * @param position The file offset to start reading.
     * @param isBigInt Whether to convert to BigInteger object.
     * @returns Unsigned 32-bit integer.
     */
    read32(position: number, isBigInt: boolean): number;
    /**
     * Reads unsigned 32-bit integer from buffer.
     *
     * @param position The buffer offset to start reading.
     * @param buffer The buffer containing the data.
     * @returns Unsigned 32-bit integer.
     */
    read32Row(position: number, buffer: any): number;
    /**
     * Reads unsigned 128-bit integer from buffer.
     *
     * @param position The buffer offset to start reading.
     * @param buffer The buffer containing the data.
     * @returns BigInteger object.
     */
    read128Row(position: number, buffer: any): any;
    /**
     * Reads either unsigned 32-bit or 128-bit integer from buffer.
     *
     * @param position The buffer offset to start reading.
     * @param buffer The buffer containing the data.
     * @param len The number of bytes to read.
     * @returns BigInteger object or unsigned 32-bit integer.
     */
    read32Or128Row(position: number, buffer: any, len: number): any;
    /**
     * Reads either unsigned 32-bit or 128-bit integer from file.
     *
     * @param position The file offset to start reading.
     * @param ipType 4 for IPv4 or 6 for IPv6.
     * @returns BigInteger object or unsigned 32-bit integer.
     */
    read32Or128(position: number, ipType: number): any;
    /**
     * Reads unsigned 128-bit integer from file.
     *
     * @param position The file offset to start reading.
     * @returns BigInteger object.
     */
    read128(position: number): any;
    /**
     * Reads 32-bit float from buffer.
     *
     * @param position The buffer offset to start reading.
     * @param buffer The buffer containing the data.
     * @returns 32-bit float.
     */
    readFloatRow(position: number, buffer: any): number;
    /**
     * Reads string from file.
     *
     * @param position The file offset to start reading.
     * @returns String.
     */
    readStr(position: number): string;
    /**
     * Reads BIN file metadata.
     *
     * @returns Whether metadata read successfully.
     */
    loadBin(): boolean;
    /**
     * Initializes with BIN file path and pre-loads metadata.
     *
     * @param binPath The path to the BIN file.
     */
    open(binPath: string): void;
    /**
     * Resets metadata and closes file handle.
     *
     * @returns 0 if successful else -1 for errors.
     */
    close(): 0 | -1;
    /**
     * Retrieves geolocation data into supplied object.
     *
     * @param myIP The IP address to query.
     * @param ipType 4 for IPv4 or 6 for IPv6.
     * @param data The object to store the results.
     * @param mode The fields to read.
     */
    geoQueryData(myIP: string, ipType: number, data: any, mode: any): void;
    /**
     * Performs validations and returns geolocation data.
     *
     * @param myIP The IP address to query.
     * @param mode The fields to read.
     * @returns The geolocation data.
     */
    geoQuery(myIP: string, mode: any): {
        ip: string;
        ipNo: string;
        countryShort: string;
        countryLong: string;
        region: string;
        city: string;
        isp: string;
        domain: string;
        zipCode: string;
        latitude: string;
        longitude: string;
        timeZone: string;
        netSpeed: string;
        iddCode: string;
        areaCode: string;
        weatherStationCode: string;
        weatherStationName: string;
        mcc: string;
        mnc: string;
        mobileBrand: string;
        elevation: string;
        usageType: string;
        addressType: string;
        category: string;
        district: string;
        asn: string;
        as: string;
    };
    /**
     * Returns the API version.
     *
     * @returns The API version.
     */
    getAPIVersion(): string;
    /**
     * Returns the database package.
     *
     * @returns The database package.
     */
    getPackageVersion(): number;
    /**
     * Returns the database version.
     *
     * @returns The database version.
     */
    getDatabaseVersion(): string;
    /**
     * Returns the ISO 3166 country code.
     *
     * @param myIP The IP address to query.
     * @returns The country code.
     */
    getCountryShort(myIP: string): string;
    /**
     * Returns the country name.
     *
     * @param myIP The IP address to query.
     * @returns The country name.
     */
    getCountryLong(myIP: string): string;
    /**
     * Returns the region or state.
     *
     * @param myIP The IP address to query.
     * @returns The region or state.
     */
    getRegion(myIP: string): string;
    /**
     * Returns the city.
     *
     * @param myIP The IP address to query.
     * @returns The city.
     */
    getCity(myIP: string): string;
    /**
     * Returns the Internet Service Provider.
     *
     * @param myIP The IP address to query.
     * @returns The ISP.
     */
    getISP(myIP: string): string;
    /**
     * Returns the latitude.
     *
     * @param myIP The IP address to query.
     * @returns The latitude.
     */
    getLatitude(myIP: string): string;
    /**
     * Returns the longitude.
     *
     * @param myIP The IP address to query.
     * @returns The longitude.
     */
    getLongitude(myIP: string): string;
    /**
     * Returns the domain name.
     *
     * @param myIP The IP address to query.
     * @returns The domain name.
     */
    getDomain(myIP: string): string;
    /**
     * Returns the ZIP or postal code.
     *
     * @param myIP The IP address to query.
     * @returns The ZIP code.
     */
    getZIPCode(myIP: string): string;
    /**
     * Returns the time zone.
     *
     * @param myIP The IP address to query.
     * @returns The time zone.
     */
    getTimeZone(myIP: string): string;
    /**
     * Returns the internet connection type.
     *
     * @param myIP The IP address to query.
     * @returns The internet connection type.
     */
    getNetSpeed(myIP: string): string;
    /**
     * Returns the IDD code.
     *
     * @param myIP The IP address to query.
     * @returns The IDD code.
     */
    getIDDCode(myIP: string): string;
    /**
     * Returns the area code.
     *
     * @param myIP The IP address to query.
     * @returns The area code.
     */
    getAreaCode(myIP: string): string;
    /**
     * Returns the weather station code.
     *
     * @param myIP The IP address to query.
     * @returns The weather station code.
     */
    getWeatherStationCode(myIP: string): string;
    /**
     * Returns the weather station name.
     *
     * @param myIP The IP address to query.
     * @returns The weather station name.
     */
    getWeatherStationName(myIP: string): string;
    /**
     * Returns the Mobile Country Code.
     *
     * @param myIP The IP address to query.
     * @returns The MCC.
     */
    getMCC(myIP: string): string;
    /**
     * Returns the Mobile Network Code.
     *
     * @param myIP The IP address to query.
     * @returns The MNC.
     */
    getMNC(myIP: string): string;
    /**
     * Returns the mobile brand.
     *
     * @param myIP The IP address to query.
     * @returns The mobile brand.
     */
    getMobileBrand(myIP: string): string;
    /**
     * Returns the elevation above sea level in meters.
     *
     * @param myIP The IP address to query.
     * @returns The elevation.
     */
    getElevation(myIP: string): string;
    /**
     * Returns the usage type.
     *
     * @param myIP The IP address to query.
     * @returns The usage type.
     */
    getUsageType(myIP: string): string;
    /**
     * Returns the address type.
     *
     * @param myIP The IP address to query.
     * @returns The address type.
     */
    getAddressType(myIP: string): string;
    /**
     * Returns the IAB category.
     *
     * @param myIP The IP address to query.
     * @returns The IAB category.
     */
    getCategory(myIP: string): string;
    /**
     * Returns the district name.
     *
     * @param myIP The IP address to query.
     * @returns The district name.
     */
    getDistrict(myIP: string): string;
    /**
     * Returns the autonomous system number (ASN).
     *
     * @param myIP The IP address to query.
     * @returns The ASN.
     */
    getASN(myIP: string): string;
    /**
     * Returns the autonomous system (AS).
     *
     * @param myIP The IP address to query.
     * @returns The AS.
     */
    getAS(myIP: string): string;
    /**
     * Returns all fields.
     *
     * @param myIP The IP address to query.
     * @returns All geolocation fields.
     */
    getAll(myIP: string): {
        ip: string;
        ipNo: string;
        countryShort: string;
        countryLong: string;
        region: string;
        city: string;
        isp: string;
        domain: string;
        zipCode: string;
        latitude: string;
        longitude: string;
        timeZone: string;
        netSpeed: string;
        iddCode: string;
        areaCode: string;
        weatherStationCode: string;
        weatherStationName: string;
        mcc: string;
        mnc: string;
        mobileBrand: string;
        elevation: string;
        usageType: string;
        addressType: string;
        category: string;
        district: string;
        asn: string;
        as: string;
    };
    #private;
}
export class IP2LocationWebService {
    /**
     * Initializes with the IP2Location Web Service API key and the package to query.
     *
     * @param apiKey The IP2Location Web Service API key.
     * @param apiPackage The web service package to query.
     * @param useSSL Whether to use SSL to call the web service.
     */
    open(apiKey: string, apiPackage: string, useSSL?: boolean): void;
    /**
     * Performs parameter validations.
     *
     */
    checkParams(): void;
    /**
     * Queries the IP2Location Web Service for geolocation on the IP address.
     *
     * @param myIP The IP address to query.
     * @param addOn List of addon data to retrieve.
     * @param lang The translation language.
     * @param callback Callback function to receive the geolocation data.
     */
    lookup(myIP: string, addOn: string, lang: string, callback: any): void;
    /**
     * Queries the IP2Location Web Service for credit balance.
     *
     * @param callback Callback function to receive the credit balance.
     */
    getCredit(callback: any): void;
    #private;
}
export class IPTools {
    /**
     * Whether the IP address is an IPv4.
     *
     * @param myIP The IP address to query.
     * @returns Whether is IPv4.
     */
    isIPV4(myIP: string): boolean;
    /**
     * Whether the IP address is an IPv6.
     *
     * @param myIP The IP address to query.
     * @returns Whether is IPv6.
     */
    isIPV6(myIP: string): boolean;
    /**
     * Converts an IPv4 address to IP number.
     *
     * @param myIP The IP address to convert.
     * @returns The IP number.
     */
    ipV4ToDecimal(myIP: string): number;
    /**
     * Converts an IPv6 address to IP number.
     *
     * @param myIP The IP address to convert.
     * @returns The IP number in a BigInteger object.
     */
    ipV6ToDecimal(myIP: string): any;
    /**
     * Converts an IP number to IPv4 address.
     *
     * @param ipNum The IP address to convert.
     * @returns The IPv4 address.
     */
    decimalToIPV4(ipNum: number): string;
    /**
     * Converts an IP number to IPv6 address.
     *
     * @param ipNum The IP address to convert.
     * @returns The IPv6 address.
     */
    decimalToIPV6(ipNum: string): string;
    /**
     * Returns the compressed form of the IPv6 address.
     *
     * @param myIP The IP address to convert.
     * @returns The compressed IPv6 address.
     */
    compressIPV6(myIP: string): string;
    /**
     * Returns the expanded form of the IPv6 address.
     *
     * @param myIP The IP address to convert.
     * @returns The expanded IPv6 address.
     */
    expandIPV6(myIP: string): string;
    /**
     * Returns an array of the CIDR addresses.
     *
     * @param ipFrom The starting IP address for the CIDR.
     * @param ipTo The ending IP address for the CIDR.
     * @returns The array of CIDR addresses.
     */
    ipV4ToCIDR(ipFrom: string, ipTo: string): string[];
    /**
     * Converts IPv6 into binary string representation.
     *
     * @param myIP The IPv6 address to convert.
     * @returns The binary string representation.
     */
    ipToBinary(myIP: string): string;
    /**
     * Converts binary string representation into IPv6.
     *
     * @param myBin The binary string representation to convert.
     * @returns The IPv6 address.
     */
    binaryToIP(myBin: string): string;
    /**
     * Returns an array of the CIDR addresses.
     *
     * @param ipFrom The starting IP address for the CIDR.
     * @param ipTo The ending IP address for the CIDR.
     * @returns The array of CIDR addresses.
     */
    ipV6ToCIDR(ipFrom: string, ipTo: string): string[];
    /**
     * Returns the starting and ending IPv4 addresses for the CIDR.
     *
     * @param cidr The CIDR address.
     * @returns The array with the starting and ending IPv4 addresses.
     */
    cidrToIPV4(cidr: string): string[];
    /**
     * Returns the starting and ending IPv6 addresses for the CIDR.
     *
     * @param cidr The CIDR address.
     * @returns The array with the starting and ending IPv6 addresses.
     */
    cidrToIPV6(cidr: string): string[];
    /**
     * A function to convert a number between arbitrary bases.
     *
     * @param num The number to convert.
     * @param fromBase The base num is in
     * @param toBase The base to convert num to
     * @returns num converted to base to_base
    */
    baseConvert(num: number, fromBase: number, toBase: number): any
}