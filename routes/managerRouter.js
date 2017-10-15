let express = require('express');
let managerDB = require('../db/managerDB');
let Subject = require('../model/Subject');

let router = express.Router();

router.get('/getAllSubjectType',(req,resp)=>{
	managerDB.getAllSubjectType().then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getAllSubjectLevel',(req,resp)=>{
	managerDB.getAllSubjectLevel().then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getAllDepartmentes',(req,resp)=>{
	managerDB.getAllDepartmentes().then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getAllTopics',(req,resp)=>{
	managerDB.getAllTopics().then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.get('/getDepartmentTopics',(req,resp)=>{
	var id = req.query.id;
	managerDB.getDepartmentTopics(id).then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.post('/getAllSubjects',(req,resp)=>{
	var obj = req.body;
	// console.log(obj);
	managerDB.getAllSubjects(obj["subject.department.id"],obj["subject.topic.id"],obj["subject.subjectType.id"],obj["subject.subjectLevel.id"]).then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.post('/updateSubject',(req,resp)=>{
	var id = req.body["subject_id"];
	var checkState = req.body["subject_checkState"];
	// console.log("router",req.body);
	managerDB.updateSubject(id,checkState).then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.post('/getAllChoice',(req,resp)=>{
	var id = req.body.id;
	// console.log("router",req.body);
	managerDB.getAllChoice(id).then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.post('/saveSubject',(req,resp)=>{
	var subject = new Subject();
	Object.assign(subject,req.body);
	// console.log("routerSubject",subject);
	managerDB.saveSubject(subject).then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
});

router.post('/saveChoice',(req,resp)=>{
	var subject_id = req.body["subject_id"];
	var corrects = req.body["corrects[]"];
	var contents = req.body["contents[]"];
	// console.log("choice",req.body);
	managerDB.saveChoice(subject_id,corrects,contents).then((results)=>{
		resp.send(results);
	}).catch((err)=>{
		resp.send(err);
	});
})
module.exports = router;