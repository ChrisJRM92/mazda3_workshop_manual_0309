function ChangeSrvc()
{
	var index = document.frm1.srvckbn.selectedIndex;
	parent.frames("left_menu").location.href =  LeftMenuList[index];
	parent.frames("main").location.href = "../esi_common/"+ DefaultFileList[index];
	parent.frames("srvc_menu").document.frm1.siecd.value = "";
}
