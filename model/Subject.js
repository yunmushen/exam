class Subject{
	constructor(department_id,subjectLevel_id,subjectType_id,topic_id,stem,answer=null,analysis=null,checkState,uploadTime=null,user_id=null){
		this.department_id = department_id;
		this.subjectLevel_id = subjectLevel_id;
		this.subjectType_id = subjectType_id;
		this.topic_id = topic_id;
		this.stem = stem;
		this.answer = answer;
		this.analysis = analysis;
		this.checkState = checkState;
		this.uploadTime = uploadTime;
		this.user_id = user_id;
	}
}

module.exports = Subject;