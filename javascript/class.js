//1, class declarations
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    speak(){
        console.log(`${this.name}: Hello!`);
    }
}

const zinn = new Person('zinn', 20);
console.log(zinn.name);
console.log(zinn.age);
zinn.speak();

//2. getter & setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0){
            throw Error(`age can not be negative`);
        }
        this._age = value;

    }
}

const user1 = new User('steve', 'job', 11);
console.log(user1.age);
console.log(user1._age);

//3. fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//static properties and methods: 필드와 매소드들은 새로운 오브젝트를 만들 때 마다 값만 지정된 것으로
    //변경되어서 만들어지는데, 오브젝트에 상관없이, 데이터에 상관없이 클라스가 가지고 있는 고유한 값이나
    // 동일하게 반복적으로 사용되는 매소드를 static으로 붙이면 class자체에 붙인 것으로 나타남.
    // 오브젝트와 상관없이 클라스에서 쓸 수 있는 것
class Article{
    static publisher = 'Dream coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();
//article1.printPublisher(); ------- error

// 5. Inheritance상속과 다양성
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{

}
class Triangle extends Shape{
    draw(){
        super.draw()
        console.log(`three point and three line!`)
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}
//다양성- 필요한 함수만 재정의해서 사용할 수 있음 overriding
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. class checking: instanceOf ---- 좌측의 오브젝트가 우측의 클라스를 통해 만들어진 것인지 아닌지.
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);