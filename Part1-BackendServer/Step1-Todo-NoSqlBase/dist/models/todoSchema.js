"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var todoSchema = mongoose.Schema({
    id: String,
    title: String,
    desc: String,
    done: Boolean,
    createAt: String,
});
var todoModels = mongoose.model('todo', todoSchema);
exports.default = todoModels;
//# sourceMappingURL=todoSchema.js.map