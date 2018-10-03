//---------------------------------------------------------------------------
// This script is based on the work of Dieter Bungers - http://www.infovation.de
// The original example for the "Cross Browser Expanding and Collapsing TOC"
// was published on http://www.siteexperts.com/tips/techniques/ts03/index.htm
//---------------------------------------------------------------------------

var tocTab = new Array();var ir=0;
tocTab[ir++] = new Array ("1", "Introduction", "", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("1.1", "What is this program for?", "whatisthis.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("1.2", "Features not available yet", "unable.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("1.3", "System requirements", "systemrequrements.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("1.4", "About ", "about.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("1.5", "What's new in 2.2", "what'snewin2_2.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("1.6", "License agreement", "license.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("1.7", "Known issues", "knownbugs.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2", "How it works", "", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("2.1", "Quick start", "quickstart.html", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("2.1.1", "Step 1. Creating your own tiles", "step1.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.1.2", "Step 2. Creating a pattern", "step2.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.1.3", "Step 3. Paving a plot", "step3.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.2", "Tiles editor", "tileeditor.html", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("2.2.1", "Halves", "parts.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.3", "Patterns editor", "collageeditor.html", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("2.3.1", "Validating patterns", "checkcollage.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.3.2", "Adding tiles to a pattern", "addtileincollage.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.4", "Developing the project", "projecteditor.html", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("2.4.1", "Drawing the plot", "drawproject.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.4.2", "Selecting the pattern", "projecttileandcollage.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.4.3", "Paving the plot", "fillwithtiles.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.4.4", "Decorating the plot", "colorandtextures.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.4.5", "Report and comment", "reportandcomment.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.4.6", "Printing the project", "print.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.4.7", "Saving the project", "saveproject.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("2.5", "Program settings", "settings.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("3", "Reference", "", "", "cicon1.gif", "cicon2.gif");
tocTab[ir++] = new Array ("3.1", "Glossary", "glossary.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("3.2", "Draft", "plansheet.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("3.3", "Drawing graphic objects", "drawprimitives.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("3.4", "Editing graphic objects", "editprimitives.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("3.5", "Status", "primitivestatus.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("3.6", "Scale", "scale.html", "", "cicon9.gif", "");
tocTab[ir++] = new Array ("3.7", "Mini-display", "minidisplay.html", "", "cicon9.gif", "");
showNumbers = false,
textSizes = new Array(1, 1, 0.7, 0.7),
tocBehaviour = new Array(1,1),
tocScroll=false,
tocLinks = new Array(1,0);
var isIE = navigator.appName.toLowerCase().indexOf("explorer") > -1;
var mdi = (isIE) ? textSizes[1]:textSizes[3];
var sml = (isIE) ? textSizes[2]:textSizes[4];
var oldCurrentNumber = "", oldLastVisitNumber = "";
var toDisplay = new Array();
for (ir=0; ir<tocTab.length; ir++) {
toDisplay[ir] = tocTab[ir][0].split(".").length==1;
}
function reDisplay(currentNumber,tocChange,noLink,e) {
if (e) {
ctrlKeyDown = (isIE) ? e.ctrlKey : (e.modifiers==2);
if (tocChange && ctrlKeyDown) tocChange = 2;
}
toc.document.clear();
toc.document.write("<html>\n\r<head></head>\n\r<style type=\"text/css\">\n\r       SPAN.heading1 { font-family: Top; font-weight: normal; font-size: pt; color: #000000; text-decoration: none }\n\r       SPAN.heading2 { font-family: Previous; font-weight: normal; font-size: pt; color: #000000; text-decoration: none }\n\r       SPAN.heading3 { font-family: Next; font-weight: normal; font-size: pt; color: #000000; text-decoration: none }\n\r       SPAN.heading4 { font-family: Helvetica,Arial; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading5 { font-family: Helvetica,Arial; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r       SPAN.heading6 { font-family: Helvetica,Arial; font-weight: normal; font-size: 8pt; color: #000000; text-decoration: none }\n\r\n\r       SPAN.hilight1 { font-family: Top; font-weight: normal; font-size: pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight2 { font-family: Previous; font-weight: normal; font-size: pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight3 { font-family: Next; font-weight: normal; font-size: pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight4 { font-family: Helvetica,Arial; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight5 { font-family: Helvetica,Arial; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r       SPAN.hilight6 { font-family: Helvetica,Arial; font-weight: normal; font-size: 8pt; color: #FFFFFF; background: #002682; text-decoration: none }\n\r</style>\n\r<body bgcolor=\"#FFFFFF\">\n\r  <font face=\"Top\" size=\"4\"><b>\n\rPaving Design Expert\n\r  </b></font>\n\r  <br>\n\r  <br>\n\r\n\r  <!-- Place holder for the TOC, do not delete the line below -->\n\r  ");var currentNumArray = currentNumber.split(".");
var currentLevel = currentNumArray.length-1;
var currentIndex = 9;
if (currentNumber == "") currentNumber = top.location.href.substring(top.location.href.lastIndexOf("?")+1,top.location.href.length);
for (i=0; i<tocTab.length; i++) {
if (tocTab[i][2] == currentNumber && tocTab[i][2] != "") {
currentIndex = i;
break;
}
if (tocTab[i][0] == currentNumber) {
currentIndex = i;
break;
}
}
if (currentIndex < tocTab.length-1) {
nextLevel = tocTab[currentIndex+1][0].split(".").length-1;
currentIsExpanded = nextLevel > currentLevel && toDisplay[currentIndex+1];
}
else currentIsExpanded = false;
theHref = (noLink) ? "" : tocTab[currentIndex][2];
theTarget = tocTab[currentIndex][3];
for (i=1; i<tocTab.length; i++) {
if (tocChange) {
thisNumber = tocTab[i][0];
thisNumArray = thisNumber.split(".");
thisLevel = thisNumArray.length-1;
isOnPath = true;
if (thisLevel > 0) {
for (j=0; j<thisLevel; j++) {
isOnPath = (j>currentLevel) ? false : isOnPath && (thisNumArray[j] == currentNumArray[j]);
}
}
toDisplay[i] = (tocChange == 1) ? isOnPath : (isOnPath || toDisplay[i]);
if (thisNumber.indexOf(currentNumber+".")==0 && thisLevel > currentLevel) {
if (currentIsExpanded) toDisplay[i] = false;
else toDisplay[i] = (thisLevel == currentLevel+1);
}
}
}
var scrollY=0, addScroll=tocScroll;
for (i=0; i<tocTab.length; i++) {
if (toDisplay[i]) {
thisNumber = tocTab[i][0];
thisNumArray = thisNumber.split(".");
thisLevel = thisNumArray.length-1;
isCurrent = (i == currentIndex);
if (i < tocTab.length-1) {
nextLevel = tocTab[i+1][0].split(".").length-1;
img = (thisLevel >= nextLevel) ? tocTab[i][4] : ((toDisplay[i+1]) ? tocTab[i][5] : tocTab[i][4]);
}
else img = tocTab[i][4];
thisTextClass = ((thisNumber==currentNumber)?("hilight"):("heading"));
if (addScroll) scrollY+=((thisLevel<2)?mdi:sml)*25;
if (isCurrent) addScroll=false;
toc.document.write("<table border=0 cellspacing=0 cellpadding=2>");
toc.document.write("<tr><td width=" + ((thisLevel+1) * 20) + " align=right valign=top>");
toc.document.write("<a href=\"javaScript:history.go(0)\" onMouseDown=\"parent.reDisplay('" + thisNumber + "'," + tocBehaviour[0] + "," + tocLinks[0] + ",event)\">");
toc.document.write("<img src=\"" + img + "\" border=0></a>");
toc.document.write("</td><td align=left>");
toc.document.write("<a href=\"javaScript:history.go(0)\" onMouseDown=\"parent.reDisplay('" + thisNumber + "'," + tocBehaviour[1] + "," + tocLinks[1] + ",event)\">");
toc.document.write("<span class=\""  + thisTextClass + ((thisLevel>5) ? 6 : thisLevel+1) + "\">");
toc.document.write( ((showNumbers)?(thisNumber+" "):"") + tocTab[i][1]);
toc.document.write("</span></a>");
toc.document.writeln("</td></tr></table>");
}
}
if (!noLink) {
oldLastVisitNumber = oldCurrentNumber;
oldCurrentNumber = currentNumber;
}
toc.document.write("\n\r\n\r  <br>\n\r  <hr>\n\r  <font face=\"Top\" size=\"1\">\n\r&copy; 2004-2014, Grebenyuk S.A.\n\r  </font>\n\r</body>\n\r</html>\n\r");
toc.document.close();
if (tocScroll) toc.scroll(0,scrollY);
if (theHref)
if (theTarget=="top") top.location.href = theHref;
else if (theTarget=="parent") parent.location.href = theHref;
else if (theTarget=="blank") open(theHref,"");
else content.location.href = theHref;
}
