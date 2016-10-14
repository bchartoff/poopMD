import csv
import xlrd

def encodeType(textType):
	if textType == "Normal":
		return 1
	elif textType == "Pale Stools":
		return 2
	elif textType == "Indeterminate" or textType == "Unable to interpret":
		return 3
	else:
		return -1

writerFig1 = csv.writer(open("data/fig1.csv","wb"))
writerFig1.writerow(["color","stool_type"])
writerFig2 = csv.writer(open("data/fig2.csv","wb"))
writerFig2.writerow(["color","poopmd_type","five_expert_type","six_expert_type"])


fname = "data/source/PoopMD for dataviz.xls"
book = xlrd.open_workbook(fname)
sheet = book.sheet_by_name("All high quality photos")
for r in range(1, sheet.nrows):
	if encodeType(sheet.cell(r,2).value) == -1:
		continue
	else:
		writerFig1.writerow([sheet.cell(r,3).value,encodeType(sheet.cell(r,2).value)])
sheet = book.sheet_by_name("Analysis Swatch")
for r in range(1, sheet.nrows):
	writerFig2.writerow([sheet.cell(r,1).value, sheet.cell(r,2).value, sheet.cell(r,3).value, sheet.cell(r,4).value])