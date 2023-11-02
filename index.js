"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var array = ["hello", "there!"];
console.log(array.join(" "));
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (_a) {
    var data = _a.data;
    var _b = data, id = _b.id, userId = _b.userId, title = _b.title, completed = _b.completed;
    logTodo(userId, completed, id, title);
});
var logTodo = function (userId, completed, id, title) {
    console.log("\n  The user ".concat(userId, " has ").concat(completed ? "finished" : "not finished", " the todo ").concat(id, " with the title \"").concat(title, "\".\n  "));
};
