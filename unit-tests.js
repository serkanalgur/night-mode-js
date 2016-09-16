describe("DayTime factory static function fromString", function() {

    it("should create new object for valid time", function() {
        expect(function(){DayTime.fromString("21:30")}).not.toThrow();
        expect(function(){DayTime.fromString("00:00")}).not.toThrow();
        expect(function(){DayTime.fromString("23:59")}).not.toThrow();
    });

    it("should throw Error if the time has invalid structure", function() {
        expect(function(){DayTime.fromString("Aa:30")}).toThrow(jasmine.any(Error));
        expect(function(){DayTime.fromString("1546")}).toThrow(jasmine.any(Error));
        expect(function(){DayTime.fromString("112:54")}).toThrow(jasmine.any(Error));
    });

    it("should throw RangeError if the hour is over 23", function() {
        expect(function(){DayTime.fromString("24:30")}).toThrow(jasmine.any(RangeError));
        expect(function(){DayTime.fromString("46:00")}).toThrow(jasmine.any(RangeError));
    });

    it("should throw RangeError if the minute is over 59", function() {
        expect(function(){DayTime.fromString("20:60")}).toThrow(jasmine.any(RangeError));
        expect(function(){DayTime.fromString("05:84")}).toThrow(jasmine.any(RangeError));
    });

});