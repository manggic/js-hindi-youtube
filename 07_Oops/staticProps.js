class MyClass {
  // this is only available to the class
  static staticProperty = 42; // Declaration and initialization of a static property

  static addNo(a, b) {
    return a + b;
  }
}

console.log(MyClass.staticProperty); // Output: 42

const c1 = new MyClass();

//   console.log(c1.staticProperty);  // undefined

console.log(MyClass.addNo(3, 4)); // 7

// console.log(c1.addNo(5,10)); // ERROR : c1.addNo is not a function
