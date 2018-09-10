//结束时间-当前时间=剩余时间
//var date = new Date();
//console.log(date);
var endTime = null;  //结束时间
var endTimes = null;  //毫秒数
function commSetTime(year,month,day,hours,minutes,seconds, objs){
	setEndtime(year,month,day,hours,minutes,seconds, objs);
	setInterval(function(){
		setEndtime(year,month,day,hours,minutes,seconds, objs);
	},1000);
}
function setEndtime(year,month,day,hours,minutes,seconds, objs){
	endTime = new Date(); //结束时间
	endTime.setFullYear(year);  //设置年份  四位数
	endTime.setMonth(month);  //设置月份0-11
	endTime.setDate(day);	//设置月份中某一天1-31
	endTime.setHours(hours);	//设置小时0-23
	endTime.setMinutes(minutes);	//设置分钟0-59
	endTime.setSeconds(seconds);	//设置秒钟0-59
	endTimes = endTime.getTime();	//毫秒  从1970 1 1至今
	changeTime(endTimes, objs);
}
function changeTime(endTimes, obj) {
	var nowTime = new Date();//当前时间
	//(结束时间毫秒数--现在时间的毫秒数)/1000=相差时间的秒数
	var differenceS = (endTimes - nowTime.getTime())/1000;   //相差时间秒数
	if(differenceS > 0){
		//把秒数化成 天  小时  分钟 秒
		var days = Math.floor( differenceS / 86400);  //天数
		differenceS =  Math.floor( differenceS % 86400 );  //秒数
		var hours = Math.floor( differenceS / 3600);  //小时
		differenceS =  Math.floor( differenceS % 3600 );  //秒数
		var minutes = Math.floor( differenceS /60 );  //分钟
		differenceS =  Math.floor( differenceS % 60 );  //秒数
		//console.log(days+":"+hours+":"+minutes+":"+differenceS);
		obj.find("i").eq(0).html("<b>" + fullZero( days,2 ) + "</b>");
		obj.find("i").eq(1).html("<b>" + fullZero( hours,2 ) + "</b>");
		obj.find("i").eq(2).html("<b>" + fullZero( minutes,2 ) + "</b>");
		obj.find("i").eq(3).html("<b>" + fullZero( differenceS,2 ) + "</b>");
	}
}
//不足两位补零
function fullZero(iTime, n) {  //n位数
	var str = "" + iTime;
	while (str.length < n) {
		str = "0" + str;
	}
	return str;
}
commSetTime(2016,12,25,0,0,0,$(".countDown"));