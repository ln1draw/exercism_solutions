const DAY_VALS = {
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6
};

export const meetup = (year, month, type, day) =>  {
  var day_num = 1;

  if (type == "teenth") {
    day_num = 13;
  } else if (type == "second") {
    day_num = 8;
  } else if (type == "third") {
    day_num = 15;
  } else if (type == "fourth") {
    day_num = 22;
  } else if (type == "last") {
    day_num = new Date(year, month, 0).getDate() - 6;
  }

  var ret = new Date(year, month - 1, day_num);
  var goal_day = DAY_VALS[day];
  var ret_day = ret.getDay();
  var diff = 0;

  if (goal_day == ret_day) {
    // do nothing
  } else if (goal_day > ret_day ) {
    diff = goal_day - ret_day;
  } else {
    diff = 7 - (ret_day - goal_day);
  }

  ret.setDate(ret.getDate() + diff);

  return ret;
}

