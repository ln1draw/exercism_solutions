export class GradeSchool {
  constructor() {
    this.class_roster = {};
  }
  roster() {
    var ret = JSON.parse(JSON.stringify(this.class_roster));
    return ret;
  }

  add(name, gradenum) {
    if (this.class_roster[gradenum]) {
      this.class_roster[gradenum].push(name)
      this.class_roster[gradenum] = this.class_roster[gradenum].sort()
    } else {
      this.class_roster[gradenum] = [name]
    }
    return this.grade(gradenum);
  }

  grade(gradenum) {
    var ret = [];
    if (this.class_roster[gradenum]) {
      ret = JSON.parse(JSON.stringify(this.class_roster[gradenum].sort()));
    }
    return ret;
  }
}
