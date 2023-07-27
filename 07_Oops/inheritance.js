class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    return this.username;
  }
}

class Teacher extends User {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const t1 = new Teacher("manika", "english");

console.log(t1);
