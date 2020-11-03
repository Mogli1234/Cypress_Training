class test{
  constructor(){
  	this.example_array_1 = ["ddddd","ddsfdsfsdf","sdfsdfsfs"];
  	this.example_array_2 = ["ddddfddgdd","123456789","sdfsdfsfs"];
  	this.excercise = new Exercises();
  }

  printElementoArrays(){
    console.log(this.excercise.Element_Array_First(this.example_array_1));
    console.log(this.excercise.Element_Array_First(this.example_array_2));
  }
}
var ejemplo = new test();
console.log(ejemplo.printElementoArrays());