require("babel-polyfill");
var managerDB=require('./managerDB');
var Subject = require("../model/Subject");
var subject = new Subject('1','1','1','1',"esarff","dsaf",null,"未审核",null,[0,0,0,1],["we","ew","sa","sd"],null,null);
console.log(subject);
managerDB.saveSubject(subject);