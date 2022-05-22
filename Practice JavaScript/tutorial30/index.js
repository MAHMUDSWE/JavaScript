function Student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    
    this.display = function(){
        console.log(this.name);
        console.log(this.cgpa);
        console.log(this.lang[0]);
    }
}

var student1 = new Student("Mahmud", 22, 3.22, ["Bangla", "English"]);
var student2 = new Student("fahim", 22, 3.73, ["Bangla", "English"]);

student1.display();
student2.display();