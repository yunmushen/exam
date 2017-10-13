var pool = require('./pool');

module.exports = {
	getAllSubjectType(){
		var sql = "select * from tbl_exam_subjecttype";
		return pool.execute(sql);
	},
	getAllSubjectLevel(){
		var sql = "select * from tbl_exam_subjectlevel";
		return pool.execute(sql);
	},
	getAllDepartmentes(){
		var sql = "select * from tbl_exam_epartment";
		return pool.execute(sql);
	},
	getAllTopics(){
		var sql = "select * from tbl_exam_topic";
		return pool.execute(sql);
	},
	getDepartmentTopics(id=null){
		var sql = "select id,title from tbl_exam_topic where department_id = "+id;
		return pool.execute(sql);
	},
	getAllSubjects(department_id=null,topic_id=null,subjectType_id=null,subjectLevel_id=null){
		console.log("getAllSubjects",department_id,topic_id,subjectType_id,subjectLevel_id);
		// if(arguments.length>2){
			var sql = "select s.id,s.analysis,s.answer,s.checkState,s.stem,s.uploadTime,st.realName stRealName,sl.realName slRealName from tbl_exam_subject s,tbl_exam_topic t,tbl_exam_epartment e,tbl_exam_subjecttype st,tbl_exam_subjectlevel sl"
			+" where s.department_id = "
			+department_id+" and s.topic_id = "
			+topic_id+" and s.subjectType_id = "
			+subjectType_id+" and s.subjectLevel_id = "
			+subjectLevel_id
			+" and e.id = s.department_id and t.id = s.topic_id and st.id = s.subjectType_id and sl.id = s.subjectLevel_id";
		// }else{
		// 	var sql = "update tbl_exam_subject set checkState = '"+topic_id+"' where id = "+department_id;

		// }
		
		return pool.execute(sql);
	},
	updateSubject(id,checkState){
		console.log("obj",id,checkState);
		var sql = "update tbl_exam_subject set checkState = '"+checkState+"' where id = "+id;
		return pool.execute(sql);
	},
	getAllChoice(id){
		var sql = "select * from tbl_exam_choice where subject_id = "+id;
		return pool.execute(sql);
	}
	/*saveSubject(Subject){
		var sql = "declare @id int"
		+"insert into tbl_exam_subject values(null,'"
		+Subject.analysis+"','"
		+Subject.answer+"','"
		+Subject.checkState+"','"
		+Subject.stem+"','"
		+Subject.uploadTime+"',"
		+Subject.department_id+","
		+Subject.subjectLevel_id+","
		+Subject.subjectType_id+","
		+Subject.topic_id+","
		+Subject.user_id+")"+"insert into tbl_exam_subject values(null,'"
		+Subject.analysis+"','"
		+Subject.answer+"',"+@@identity+")";

		pool.execute(sql);

	}*/

}