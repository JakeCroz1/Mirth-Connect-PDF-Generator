var Document = Packages.com.lowagie.text.Document;
var PageSize = Packages.com.lowagie.text.PageSize;
var PdfWriter = Packages.com.lowagie.text.pdf.PdfWriter;
var FileOutputStream = java.io.FileOutputStream;
var FontFactory = Packages.com.lowagie.text.FontFactory;
var PdfPTable = Packages.com.lowagie.text.pdf.PdfPTable;
var PdfPCell = Packages.com.lowagie.text.pdf.PdfPCell;
var Phrase = Packages.com.lowagie.text.Phrase;
var textElement =Packages.com.lowagie.text.Element;
var bodyFont = FontFactory.getFont(FontFactory.HELVETICA, 8);
var FontFactory = Packages.com.lowagie.text.FontFactory;
var Paragraph = Packages.com.lowagie.text.Paragraph;
var document = new Document(PageSize.A4, 36, 36, 65, 36);
var HeaderFooter = Packages.com.lowagie.text.HeaderFooter;
var Chunk = Packages.com.lowagie.text.Chunk;
try {	
	const formattedNow = moment().format('YYYY-MM-DD HH:mm:ss');
	const formattedNow2 = moment().format('YYYY-MM-DD HHmmss');
	var fileOutputPath = "C:/Users/jacob/Downloads/";//Change the path that fits your file system.
	var writer = PdfWriter.getInstance(document, new FileOutputStream(fileOutputPath+$('Message code')+"_"+formattedNow2.toString()+"_"+$('Patient last name')+"_"+$('Patient first name')+".pdf"));
	var width = document.getPageSize().getWidth();
	var height = document.getPageSize().getHeight();
	var columnDefinitionSize1 = [33.33, 33.33, 33.33, 33.33, 33.33];
	var columnDefinitionSize2 = [33.33, 33.33, 33.33];
	var columnDefinitionSize3 = [33.33, 33.33];
	var pos = height / 2;
	var table1 = null;
	var cell1 = null;
	var table2 = null;
	var cell2 = null;
	var font = FontFactory.getFont(FontFactory.HELVETICA, 12.0, java.awt.Color.white);
	var font20 = FontFactory.getFont(FontFactory.HELVETICA, 20.0);
	var font12 = FontFactory.getFont(FontFactory.HELVETICA, 12.0);
	var font9 = FontFactory.getFont(FontFactory.HELVETICA, 9);
	var tableFields1 = ["First Name", "Last Name", "DOB","Sex", "Address"];
	var tableFields2 = ["Date/Time", "Sending Facility", "Recieving Facility"];
	var tableFields3= ["Generated Report", formattedNow2.toString()];
	var data1 = [$('Patient first name'), $('Patient last name'), $('Patient Date Of Birth'),$('Patient sex'), $('Patient Address')];
	var data2 = [$('hl7HeaderJsonObject').date_time_message, $('Sending Facility'), $('Recieving Facility')];
	var title1Para = new Paragraph("Generated Report",font20);
	var title2Para = new Paragraph("Raw Data:");
	var title3Para = new Paragraph("JSON to HL7 v2.x conversion:");
	var title4Para = new Paragraph("Date and time of generated report: " + formattedNow.toString(), font12);
	var title5Para = new Paragraph(new Chunk("Generated Report"));
	var title6Para = new Paragraph(new Chunk(formattedNow.toString()));
	var getDICOMRawData = DICOMUtil.getDICOMRawData(connectorMessage);
	var jsonToXmlString =JsonUtil.toXml(getDICOMRawData)
	var xmlToHL7 = SerializerFactory.getSerializer('HL7V2').fromXML(jsonToXmlString);
	var DICOMRawDataPara = new Paragraph(getDICOMRawData, font9);
	var xmlToHL7Para = new Paragraph(xmlToHL7, font9);
	const spacingAfter = 10.0;
	const spacingAfterZeroPointFive = 0.5;
	const cellPadding10 = 10.0;
	//title5Para.setAlignment(textElement.ALIGN_LEFT)
	//title6Para.setAlignment(textElement.ALIGN_RIGHT)
	var header = new HeaderFooter(new Phrase("Generated Report: " + formattedNow), false);
	var footer = new HeaderFooter(new Phrase("page "),true);
	header.setAlignment(textElement.ALIGN_CENTER);
	header.setBorderWidthTop(0);
	footer.setAlignment(textElement.ALIGN_RIGHT);
	footer.setBorderWidthBottom(0);
	document.setHeader(header);
	document.setFooter(footer);
	
	document.open();
	
	//var title5Para = new Paragraph("Page: " + document.getPageNumber());
	title1Para.setAlignment(textElement.ALIGN_CENTER);
	//title1Para.setSpacingAfter(spacingAfterZeroPointFive);
     title2Para.setAlignment(textElement.ALIGN_LEFT);
	//title2Para.setSpacingAfter(spacingAfter);          
	title3Para.setAlignment(textElement.ALIGN_LEFT);
	//title3Para.setSpacingAfter(spacingAfter);  
	title4Para.setAlignment(textElement.ALIGN_CENTER);
	title4Para.setSpacingAfter(spacingAfter);  
	//title5Para.setAlignment(textElement.ALIGN_RIGHT);
	
	
	table1 = new PdfPTable(columnDefinitionSize1);
	table1.getDefaultCell().setBorder(0);
	table1.setHorizontalAlignment(0);
	table1.setTotalWidth(width - 72);
	table1.setLockedWidth(true);
	table1.setWidthPercentage(100); // Set table width to 100% of page
	table1.setHeaderRows(1); // Set the first row as header
	table1.setSpacingAfter(spacingAfter);

	cell1 = new PdfPCell(new Phrase($('Message code'), font));
	cell1.setColspan(columnDefinitionSize1.length);
	cell1.setHorizontalAlignment(textElement.ALIGN_CENTER);
	cell1.setVerticalAlignment(textElement.ALIGN_CENTER);
	cell1.setBackgroundColor(java.awt.Color.black);
	cell1.setPadding(cellPadding10);
	table1.addCell(cell1);
	
	tableFields1.forEach(function(text) {
		var phrase = new Phrase(text, bodyFont);
		var cellBody = new PdfPCell(phrase);
		cellBody.setPadding(cellPadding10);
		cellBody.setHorizontalAlignment(textElement.ALIGN_CENTER);
		cellBody.setVerticalAlignment(textElement.ALIGN_CENTER);
		table1.addCell(cellBody);
	});

	data1.forEach(function(text) {
		var phrase = new Phrase(text, bodyFont);
		var cellBody = new PdfPCell(phrase);
		cellBody.setPadding(cellPadding10);
		cellBody.setHorizontalAlignment(textElement.ALIGN_CENTER);
		cellBody.setVerticalAlignment(textElement.ALIGN_CENTER);
		table1.addCell(cellBody);
	});

	table2 = new PdfPTable(columnDefinitionSize2);
	table2.getDefaultCell().setBorder(0);
	table2.setHorizontalAlignment(0);
	table2.setTotalWidth(width - 72);
	table2.setLockedWidth(true);
	table2.setWidthPercentage(100); // Set table width to 100% of page
	table2.setHeaderRows(1); // Set the first row as header
	//table2.setSpacingAfter(spacingAfter);
	
	cell2 = new PdfPCell(new Phrase("Mesage Routing Information", font));
	cell2.setColspan(columnDefinitionSize2.length);
	cell2.setHorizontalAlignment(textElement.ALIGN_CENTER);
	cell2.setVerticalAlignment(textElement.ALIGN_CENTER);
	cell2.setBackgroundColor(java.awt.Color.black);
	cell2.setPadding(cellPadding10);
	table2.addCell(cell2);
	
	tableFields2.forEach(function(text) {
		var phrase2 = new Phrase(text, bodyFont);
		var cellBody2 = new PdfPCell(phrase2);
		cellBody2.setPadding(10);
		cellBody2.setHorizontalAlignment(textElement.ALIGN_CENTER);
		cellBody2.setVerticalAlignment(textElement.ALIGN_CENTER);
		table2.addCell(cellBody2);
	});

	data2.forEach(function(text) {
		var phrase2 = new Phrase(text, bodyFont);
		var cellBody2 = new PdfPCell(phrase2);
		cellBody2.setPadding(10);
		cellBody2.setHorizontalAlignment(textElement.ALIGN_CENTER);
		cellBody2.setVerticalAlignment(textElement.ALIGN_CENTER);
		table2.addCell(cellBody2);
	});
	//document.add(title5Para);
	//document.add(title1Para);  
	//document.add(title4Para);  
	document.add(table1);
	document.add(table2);
	document.add(title3Para);
	document.add(xmlToHL7Para);  
	
	//document.newPage();
	//document.add(title5Para);
	document.add(title2Para);
	document.add(DICOMRawDataPara);      
	document.close();

} catch (e) {
	// Handle exceptions 
	logger.info(e);
}