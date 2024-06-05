function PrintPDF()
{
	var siecd = parent.frames("srvc_menu").document.frm1.siecd.value;
	var index = parent.frames("srvc_menu").document.frm1.srvckbn.selectedIndex;

	//電気配線図は印刷機能を使用しない
	if (parent.frames("srvc_menu").document.frm1.srvckbn.options[index].value == 'S04')
	{
		return;
	}
	
	if (siecd == "")
	{
		alert(printmsg);
		return;
	}
	//ページ内リンク対応
	var AryUrl = parent.frames("main").location.href.split('/');
	var thisdoc = AryUrl[AryUrl.length-1];
	var thissiecd = thisdoc.substring(0,thisdoc.indexOf('.htm'));
	var url;
		url = parent.frames("main").location.href;

	if (siecd != thissiecd)
	{
		siecd = thissiecd;
	}

	pdflink = "../pdf/"+siecd+".pdf";

//	pdflink = url.substring(0,url.indexOf('/esicont/')) + "/esicont/pdf/"+siecd+".pdf";
//	pdf = window.open(pdflink,siecd,"directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,toolbar=no");
	pdf = window.open(pdflink,siecd,"directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,toolbar=no");

	pdf.focus();
}