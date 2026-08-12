function task1(callback) {
    console.log("Task1 completed.");
    callback();
}
function task2(callback) {
    console.log("Task 2 completed.");
    callback();
}
function task3(callback){
    console.log("task 3 completed");
}
task1(()=> {
    task2(()=> {
        task3();
    });
});