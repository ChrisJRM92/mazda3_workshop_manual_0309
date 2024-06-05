// List of functions in multiLanguage.js
// name	description
// ChangeLang(langid)	set menu files paths, change session language, then reload document
// setCookie(key)	set session language into cookie
// getCookie(key)	read value from a specified cookie
// showForeword()	get session language from cookie, then open appropriate "foreword.html". not used
// showLangSelector(lang_clicked)	change and write label string for language selector, and hilght if the language is selected.
// getStrForeword()	set the string for the link to open "foreword.html" of each language.
// PrintPage()	show prit dialog box




function PrintPage(){
parent.main.focus();
	if(document.getElementById || document.layers){
		window.print();		//àÛç¸ÇÇµÇ‹Ç∑
	}
}



// kazumichi 030527 added
function ChangeLang(langid)
{
	var index = langid;
	parent.frames("left_menu").location.href = "../../esicont/" + LeftMenuList[index];
	parent.frames("main").location.href = "../../esicont/esi_common/"+ DefaultFileList[index];
	parent.frames("srvc_menu").location.href = "../../esicont/html/"+ SrvcMenuList[index];
	
	setCookie(index);
	
//	CRH 030528 for debug: write lang selected in status bar
//	crrLang = getCookie("lang");
//	window.status = "Current Language is: " + crrLang;
//	reload automatically
	location.reload();
	
}


// kazumichi 030527 added
function setCookie(key) {
	switch(key) {
		case 0:
			lang_tmp = "es";
			break;
		default:
			lang_tmp = "es";
			break;
	}
	tmp="lang=" + lang_tmp + "; ";
	document.cookie=tmp;
}


// kazumichi 030527 added
function getCookie(key) {
	tmp=document.cookie+";";
	tmp1=tmp.indexOf(key, 0);
	if(tmp1!=-1){
		tmp=tmp.substring(tmp1, tmp.length);
		start=tmp.indexOf("=", 0)+ 1;
		end=tmp.indexOf(";", start);
		return(unescape(tmp.substring(start, end)));
	}
	return("");
}

// kazumichi display appropriate foreword.html according to lang stored in cookie
// kazumichi 030528: showForeword is not used currently.
function showForeword() {
	langdir = getCookie("lang");
	foreworddocPath = "../../esicont/" + langdir + "/html/foreword.html";
	newWin = window.open(foreworddocPath, "Fowreword", "directories=no,menubar=no,location=no,status=no,resizable=yes,scrollbars=yes,toolbar=yes");
}


// kazumichi 030602: add langLabelChange
function showLangSelector(lang_clicked) {
	// initialize color_langLabel to white
	if (getCookie("lang") == lang_clicked) {
		//color_langLabel = "#0047ff";
		color_langLabel = "blue";
	} else {
		color_langLabel = "white";
	}
	switch (lang_clicked) {
		case "es":
			string_langLabel = "";
			break;
		default:
			string_langLabel = "";
			break;
	}
	document.write("<font size='4' color='" + color_langLabel + "'>" + string_langLabel + "</font>");
}

function getStrForeword() {
	switch (getCookie("lang")) {
		case "es":
			forewordLinkLabel = "ADVERTENCIA";
			break;
		default:
			forewordLinkLabel = "ADVERTENCIA";
			break;
	}
	foreworddocPath = "../../esicont/" + getCookie("lang") + "/html/foreword.html";
	document.write("<a target='_blank' href = '" + foreworddocPath + "'>" + forewordLinkLabel + "</a>");
}

