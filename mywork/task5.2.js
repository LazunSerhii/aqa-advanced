let averageGrade = 85; 
let gradeLevel = Math.floor(averageGrade / 10);

switch (gradeLevel) {
    case 10:
    case 9:
        console.log("Відмінно");
        break;
    case 8:
        console.log("Дуже добре");
        break;
    case 7:
        console.log("Добре");
        break;
    case 6:
        console.log("Задовільно");
        break;
    default:
        console.log("Незадовільно");
        break;
}
