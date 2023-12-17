// let lecture =10;
// let section =3;
// let title = "javascript";

// const course ={
//     lecture: 10,
//     section: 3,
//     title: "javascript",
//     notes: {
//         introduction: "welcom to JS course"
//     },
//     enroll(){
//         console.log('you ar sucessfully enrolled');
//     }
// }
//  course.enroll()
//  console.log(course) 
//  course.price = 999






// Factory function 

function createCourse( title){    //camel case use  (camel case me word small se start hota hai)
    return {
        title: title,
        enroll(){
            console.log('you ar sucessfully enrolled');
        }
    }   
}
// const course = createCourse( "javascript");
// course.enroll()
// console.log(course)






//Construction Function

function Course(title){    // pascal case use ( capital se start hota hai )
    this.title = title,
    this.enroll = function(){
        console.log('you ar sucessfully enrolled');
    }
}
// const course = new Course('javascript');   //new  sabase pahale ek empty object banata hai  our this keyword ko point karta hii

// course.enroll()

const course = new Course('javascript'); //construction Method 
console.log(course.constructor)

const Course_1 = new Function('title', `
this.title = title,
this.enroll = function(){
    console.log('you ar sucessfully enrolled');
}`)

const course_2 = new Course_1('javascript');
course_2.enroll();


//Primitive Datatype 
let number = 10;
//pass by value
let number_2 = number
number =15;
console.log(number);
console.log(number_2);


// Reference Datatype
let obj = {number : 10};
//pass by reference
let obj2 =obj;

console.log(obj)
console.log(obj2)


