export class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute || 0;
    var vals = this.sanitizeVals();
    this.hour = vals[0];
    this.minute = vals[1];
  }

  toString() {
    var ret = "";

    ret = ret + this.toDoubleDigits(this.hour) + ":" + this.toDoubleDigits(this.minute);
    
    return ret;
  }

  plus(num) {
    this.minute = this.minute + num;
    var vals = this.sanitizeVals();
    this.hour = vals[0];
    this.minute = vals[1];
    return this.toString();
  }

  minus(num) {
    this.minute = this.minute - num;
    var vals = this.sanitizeVals();
    this.hour = vals[0];
    this.minute = vals[1];
    return this.toString();
  }

  equals(clock) {
    if (clock.minute == this.minute && clock.hour == this.hour) {
      return true;
    } else {
      return false;
    }
  }

  toDoubleDigits(num) {
    var ret = ''
    var str_num = num.toString();
    if (0 <= num && num < 10) {
      ret = '0' + str_num;
    } else {
      ret = str_num;
    }

    return ret;
  }

  handleNegative(num, divisor) {
    var ret = divisor + (num % divisor);
    return ret;
  }

  sanitizeVals() {
    var minute = this.minute % 60;
    var addl_hours = 0;

    if (minute >= 0) {
      addl_hours = (this.minute - minute) / 60;
    } else {
      addl_hours = -1 + (this.minute - minute) / 60;
      minute = this.handleNegative(minute, 60);
    }

    var hour = this.hour + addl_hours;
    if (hour < 0) {
      hour = this.handleNegative(hour, 24);
    }

    hour = hour % 24;
    minute = minute % 60;
    return [hour, minute];
  }
}
