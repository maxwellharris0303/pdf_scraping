<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/*&lt;meta /&gt;*/

@namespace MadCap url(http://www.madcapsoftware.com/Schemas/MadCap.xsd);

a.MCBreadcrumbsLink
{
	font-style: italic;
	text-decoration: underline;
}

a.MCBreadcrumbsLink:visited
{
	color: #000000;
}

a.MCBreadcrumbsLink:visited
{
	color: #064a76;
	font-weight: normal;
	font-style: normal;
}

a.MCBreadcrumbsLink:hover
{
	color: #BED230;
}

a.MCBreadcrumbsLink:hover
{
	font-weight: normal;
	font-style: normal;
}

nav.tab-bar
{
	border-bottom: solid 3px #c3c5c8;
	position: fixed;
	width: 100%;
	z-index: 9;
}

.main-section &gt; .row.outer-row
{
	margin-bottom: 0px;
	padding-bottom: 0px;
}

.inner-wrap
{
	min-height: 91vh;
}

.headcenter
{
	text-align: center;
	width: 100%;
}

ul.off-canvas-list li
{
	background: #404040;
}

#docnameother
{
	display: none;
}

.inner-wrap .outer-row
{
	margin: 0 auto;
	padding-left: 4em;
	padding-right: 4em;
	max-width: 100%;
}

.off-canvas-wrapper-inner .outer-row
{
	padding-left: 0em;
	padding-right: 0em;
	max-width: 100%;
}

div.feedback
{
	position: fixed;
	float: right;
	bottom: 5px;
	right: 0px;
	border-radius: 5px 0px 0px 5px;
	width: 65px;
	height: 50px;
	background-color: #ff8300;
	cursor: pointer;
}

.ftext
{
	display: none;
	float: left;
	padding: 5px;
	color: #ffffff;
	font-size: 0.9em;
	font-weight: bold;
	text-align: center;
	margin: 10px 0px 20px 30px;
}

div.feedback:hover
{
	width: 215px;
}

.feedback:hover .ftext
{
	display: block;
}

div.fimg
{
	float: right;
	padding: 12px 7px 10px 10px;
}

MadCap|breadcrumbsProxy
{
	margin-top: 7px;
	border-bottom: none;
	font-size: .7em;
	font-family: 'Open Sans', sans-serif;
	font-style: italic;
	mc-breadcrumbs-prefix: '';
	mc-breadcrumbs-divider: ' &gt; ';
}

div.mainContent
{
	padding-left: 10px;
	margin-right: 5px;
	position: relative;
	overflow-y: auto;
	min-width: 70%;
	margin-left: 0px;
	padding-bottom: 0px;
	width: auto;
}

div.sideContent
{
	float: right;
	margin-left: 9px;
	margin-bottom: 10px;
	width: 32%;
}

div.rightContent
{
	float: right;
	margin-left: 0px;
	padding-bottom: 5px;
	width: 0%;
}

html.templateTopic div.sideContent
{
	display: none;
}

div.header
{
	margin-top: 0px;
	padding-top: 0px;
	margin-right: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	background-repeat: repeat;
	background-position-y: bottom;
	background-position-x: left;
	background-color: #f5f5f5;
	width: 100%;
}

span.Bullet
{
	font-family: Wingdings;
	font-size: 18px;
	color: #000000;
	line-height: 9pt;
}

span.Bullet2
{
	font-family: Wingdings;
	font-size: 14px;
	color: #000000;
	line-height: 9pt;
}

span.zTitleNo
{
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	line-height: 12pt;
	font-family: Arial;
}

span.Navigation
{
	font-weight: bold;
}

span.Emphasis
{
	font-style: italic;
}

span.CLI
{
	font-family: 'Courier New';
	font-size: 9pt;
	line-height: 11pt;
}

span.CLI_Bold
{
	font-family: 'Courier New';
	font-weight: bold;
	font-size: 9pt;
	line-height: 11pt;
}

span.Red
{
	color: #ff0000;
}

span.Subscript
{
	font-size: 80%;
	vertical-align: sub;
}

span.Superscript
{
	font-size: 80%;
	vertical-align: super;
}

span.URL
{
	color: #5289ae;
}

span.PMS_144
{
	color: #f7961c;
}

span.PMS_646
{
	color: #5289ae;
}

span.Cool_Grey_9
{
	color: #929497;
}

span.Cool_Grey_11
{
	color: #515151;
}

td.footer
{
	font-family: 'Open Sans', sans-serif;
	font-size: 8pt;
}

p.Body
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

p.Chapter_Number
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 17pt;
	letter-spacing: 0em;
	color: #ffffff;
	mc-hyphenate: never;
	mc-auto-number-format: 'Chapter {chapnum}';
	mc-auto-number-position: inside-head;
	mc-auto-number-offset: 0px;
	text-indent: 0px;
	line-height: 20pt;
	text-decoration: none;
}

p.Chapter_Title
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 40pt;
	margin-bottom: 0pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 14pt;
	letter-spacing: 0em;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 16pt;
	text-decoration: none;
	color: #5289ae;
	mc-disable-glossary-terms: true;
}

p.Footnote
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0.25in;
	margin-top: 1pt;
	margin-bottom: 1pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 8pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: -19px;
	line-height: 10pt;
	text-decoration: none;
}

p.Table_Step_Sub_1st_Instantonly
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 's:{a=1}. ';
	mc-auto-number-offset: 19.2px;
	mc-next-tag: p;
	mc-next-class: Step_Sub_Next;
	line-height: 10pt;
	text-decoration: none;
	display: list-item;
	list-style: lower-alpha;
}

p.Table_Step_Sub_Next_Instantonly
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 's:{a+}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 10pt;
	text-decoration: none;
	display: list-item;
	list-style: lower-alpha;
}

h1._1Heading
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 23pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 15pt;
	letter-spacing: 0em;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 16pt;
	text-decoration: none;
	mc-next-tag: p;
	mc-next-class: Body;
	color: #f36f21;
	mc-heading-level: 2;
}

h2._2Heading
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 15pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 12pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
	mc-next-tag: p;
	mc-next-class: Body;
	mc-heading-level: 0;
}

h3._3Heading
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 12pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 11pt;
	letter-spacing: 0em;
	color: #5289ae;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 12pt;
	text-decoration: none;
	mc-next-tag: p;
	mc-next-class: Body;
}

h4._4Heading
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 10pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #515151;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 12pt;
	text-decoration: none;
	mc-next-tag: p;
	mc-next-class: Body;
	mc-heading-level: 0;
}

p.Body_Lead-in
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 3pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

p.Bullet_1
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-offset: 19.2px;
	mc-auto-number-class: Bullet;
	line-height: 13pt;
	text-decoration: none;
}

p.Body_in_Bullet_Step
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

p.Bullet_2
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-position: outside-head;
	mc-auto-number-offset: 19.2px;
	mc-auto-number-class: Bullet;
	line-height: 13pt;
	text-decoration: none;
}

p.Body_in_Sub-Bullet_Sub-Step
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

p.Step_1st
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-next-tag: p;
	mc-next-class: Step_Next;
	mc-auto-number-format: 'S:{n=1}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 13pt;
	text-decoration: none;
}

p.Bullet_in_Steps
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-position: outside-head;
	mc-auto-number-offset: 19.2px;
	mc-auto-number-class: Bullet;
	line-height: 13pt;
	text-decoration: none;
}

p.Bullet_2_in_Steps
{
	text-align: left;
	margin-left: 0.6in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-position: outside-head;
	mc-auto-number-offset: 19.2px;
	mc-auto-number-class: Bullet;
	line-height: 13pt;
	text-decoration: none;
}

p.Step_Next
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 'S:{n+}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 13pt;
	text-decoration: none;
}

p.Step_Sub_1st
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 's:{a=1}. ';
	mc-auto-number-offset: 19.2px;
	mc-next-tag: p;
	mc-next-class: Step_Sub_Next;
	line-height: 13pt;
	text-decoration: none;
}

p.Bullet_in_Sub-Steps
{
	text-align: left;
	margin-left: 0.6in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-position: outside-head;
	mc-auto-number-offset: 19.2px;
	mc-auto-number-class: Bullet;
	line-height: 13pt;
	text-decoration: none;
}

p.Step_Sub_Next
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 's:{a+}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 13pt;
	text-decoration: none;
}

p.Step_1st_in_Bullet
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 'r:{n=1}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 13pt;
	text-decoration: none;
}

p.Step_Next_in_Bullet
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 4pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 'r:{n+}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 13pt;
	text-decoration: none;
}

p.Callout
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 1pt;
	margin-bottom: 1pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 11pt;
	text-decoration: none;
}

p.Figure_Title
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 8pt;
	margin-bottom: 0pt;
	font-weight: normal;
	font-style: italic;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 'F:Figure {n+}  ';
	mc-auto-number-position: inside-head;
	mc-auto-number-offset: 0px;
	mc-auto-number-class: zTitleNo;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
	font-family: Arial;
}

p.Anchor
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 12pt;
	font-family: 'Open Sans', sans-serif;
	font-style: normal;
	font-size: 4pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 4pt;
	text-decoration: none;
}

p.CLI
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
}

p.CLI_Indented
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
}

p.CLI_Indented_2
{
	color: #000000;
	font-size: 9pt;
	font-family: 'Courier New';
	font-style: normal;
	font-weight: normal;
	letter-spacing: 0em;
	line-height: 10pt;
	margin-bottom: 2pt;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 2pt;
	text-align: left;
	text-decoration: none;
	text-indent: 0px;
	white-space: pre;
	word-wrap: break-word;
}

p.CLI_Indented_3
{
	color: #000000;
	font-family: 'Courier New';
	font-size: 9pt;
	font-style: normal;
	font-weight: normal;
	letter-spacing: 0em;
	line-height: 10pt;
	margin-bottom: 2pt;
	margin-left: 0.6in;
	margin-right: 0in;
	margin-top: 2pt;
	text-align: left;
	text-decoration: none;
	text-indent: 0px;
	white-space: pre;
	word-wrap: break-word;
}

p.URL
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 5pt;
	margin-bottom: 5pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #5289ae;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 11pt;
	text-decoration: none;
}

p.zCautionText
{
	text-align: left;
	margin-left: 0.03in;
	margin-right: 0.1in;
	margin-top: 5pt;
	margin-bottom: 5pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #515151;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 4px;
}

p.zIconNote
{
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Open Sans';
	font-style: normal;
	font-size: 4pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 4pt;
	text-decoration: none;
	height: 45px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_note.png');
}

p.zTextNote
{
	text-align: left;
	margin-left: 0.03in;
	margin-right: 0.1in;
	margin-top: 5pt;
	margin-bottom: 5pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #515151;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 4px;
}

p.zIconCaution
{
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Open Sans';
	font-style: normal;
	font-size: 4pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 4pt;
	text-decoration: none;
	background-repeat: no-repeat;
	height: 45px;
	background-image: url('../../Common Files/graphics/aruba_caution.png');
}

p.zWarningText
{
	text-align: left;
	margin-left: 0.03in;
	margin-right: 0.1in;
	margin-top: 5pt;
	margin-bottom: 5pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #515151;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 4px;
}

p.zIconWarning
{
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Open Sans';
	font-style: normal;
	font-size: 4pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 4pt;
	text-decoration: none;
	background-repeat: no-repeat;
	height: 45px;
	background-image: url('../../Common Files/graphics/aruba_warning.png');
}

p.Table_Heading
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Open Sans';
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #ffffff;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 12pt;
	text-decoration: none;
}

p.Table_Body
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
}

p.Table_Note
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 'NOTE: ';
	mc-auto-number-position: inside-head;
	mc-auto-number-offset: 0px;
	mc-auto-number-class: Navigation;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
}

p.Table_Bullet
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-offset: 19.2px;
	mc-auto-number-class: Bullet;
	line-height: 10pt;
	text-decoration: none;
}

p.Table_Body_in_Bullet_Step
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
}

p.Table_Step_1st
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 'S:{n=1}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 10pt;
	text-decoration: none;
}

p.Table_Step_Next
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 'S:{n+}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 10pt;
	text-decoration: none;
}

p.Table_Title
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: italic;
	font-size: 10pt;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-position: inside-head;
	mc-auto-number-offset: 0px;
	mc-auto-number-class: zTitleNo;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

p.TableFootnote
{
	text-align: left;
	margin-left: 0.2in;
	margin-right: 0.25in;
	margin-top: 1pt;
	margin-bottom: 1pt;
	font-family: 'Open Sans';
	font-weight: normal;
	font-style: normal;
	font-size: 8pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: -19px;
	line-height: 10pt;
	text-decoration: none;
}

MadCap|xref.App____Title__And_Page__
{
	mc-format: ' “{paratext}” on page {page}';
}

MadCap|xref.Chap____Title__And_Page__
{
	mc-format: ' “{paratext}” on page {page}';
}

MadCap|xref.Heading_And_Page__
{
	mc-format: '{paratext} on page {page}';
}

MadCap|xref.Step___And_Page__
{
	mc-format: '{Default ¹ Font}{PMS 646}step†{paranumonly} on page {page}';
}

MadCap|xref.Table_Figure___And_page__
{
	mc-format: ' {paranumonly}, {paratext}';
}

body
{
	margin-left: 10px;
	color: #ffffff;
}

p.Doc_Title
{
	font: Open Sans;
	font-size: 25pt;
	color: #064a76;
	font-weight: bolder;
	font-family: 'Open Sans Extrabold';
	line-height: 45pt;
}

h1._1CmdHeading
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 23pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans';
	font-weight: bold;
	font-style: normal;
	font-size: 15pt;
	letter-spacing: 0em;
	color: #f7961c;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 16pt;
	text-decoration: none;
}

p.Output
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
	white-space: pre;
}

div.footer
{
	background-color: #dcdcdc;
	width: 100%;
}

MadCap|glossaryTerm
{
	mc-closed-image: none;
	mc-image: none;
	mc-image-position: none;
	mc-open-image: none;
}

MadCap|glossaryTerm.Expanding
{
	
}

.feedback_link
{
	
}

.cardHead
{
	margin-bottom: 16px;
	padding-bottom: 16px;
	border-bottom-color: #c3c5c8;
	border-bottom: solid 1px #c3c5c8;
}

MadCap|dropDownHead.h1
{
	mc-heading-level: 2;
}

MadCap|dropDownHead.h2
{
	mc-heading-level: 0;
}

p
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 2pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

h1
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 23pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 18pt;
	letter-spacing: 0em;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 16pt;
	text-decoration: none;
	mc-next-tag: p;
	color: #f36f21;
}

h2
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 15pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 14pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
	mc-next-tag: p;
}

h3
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 12pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 11pt;
	letter-spacing: 0em;
	color: #5289ae;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 12pt;
	text-decoration: none;
	mc-next-tag: p;
}

h4
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 10pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #515151;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 12pt;
	text-decoration: none;
	mc-next-tag: p;
}

p.screen
{
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
	background-color: #eeeeee;
	margin: 10pt;
	padding: 10pt;
	color: #000000;
}

div.screen
{
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
	background-color: #eeeeee;
	margin: 10pt;
	padding: 10pt;
	color: #000000;
}

div.screen &gt; p
{
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
	color: #000000;
}

.figtitle
{
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	font-style: italic;
	text-align: left;
}

caption
{
	text-align: left;
	margin-bottom: 4pt;
	line-height: 15pt;
}

.dt
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 11pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

.dl
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

dt
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 11pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

dl
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

.dlentry
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

ul
{
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	margin-left: -15pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0pt;
	line-height: 13pt;
	text-decoration: none;
}

ul &gt; li
{
	margin: 0pt;
	padding-top: 0;
	padding-bottom: 0;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	list-style-type: square;
}

ul &gt; li &gt; ul
{
	margin-left: 5pt;
}

ul &gt; li &gt; ul &gt; li
{
	margin-top: 4pt;
	margin-left: -20pt;
	padding-top: 0;
	padding-bottom: 0;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0pt;
	list-style-type: circle;
}

ul &gt; li &gt; ul &gt; li &gt; ul &gt; li
{
	margin-top: 4pt;
	margin-left: -20pt;
	padding-top: 0;
	padding-bottom: 0;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0pt;
	list-style-type: disc;
}

ol &gt; li
{
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-next-style: p;
}

ol &gt; li &gt; ol
{
	margin: 5pt 0pt 5pt 15pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
}

ol &gt; li &gt; ol &gt; li
{
	margin: 5pt 0pt 5pt -25pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	list-style-type: lower-alpha;
	mc-next-style: p;
}

ol &gt; li &gt; ol &gt; li &gt; ol &gt; li
{
	margin: 5pt 0pt 5pt -30pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	list-style-type: lower-roman;
}

ul &gt; li &gt; p
{
	margin-left: 0pt;
}

ul.menu,
ul.menu ul,
ul.menu li
{
	text-indent: 0pt;
}

.tabletitle
{
	mc-auto-number-format: 'Table {Gn+}: ';
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-size: 9pt;
	font-weight: bold;
	color: #000000;
	line-height: 11pt;
	text-align: left;
}

.tabletitletext
{
	font-family: "Open Sans", sans-serif;
	font-style: italic;
	font-size: 9pt;
	color: #000000;
	line-height: 11pt;
	text-align: left;
}

div.note
{
	width: 90%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	padding-left: 30pt;
	padding-bottom: 0pt;
	padding-top: 0pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_note.png');
	background-size: 34px 42px;
	background-position: left center;
}

div.note &gt; p
{
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	vertical-align: middle;
}

div.notes
{
	width: 88%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	padding-left: 30pt;
	padding-bottom: 0pt;
	padding-top: 0pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_note.png');
	background-size: 34px 42px;
	background-position: left center;
}

div.notes p
{
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	font-size: 9pt;
	vertical-align: middle;
}

div.notes p:first-child
{
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	font-size: 9pt;
	vertical-align: middle;
}

div.notes &gt; p:last-of-type
{
	border-bottom: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	font-size: 9pt;
	vertical-align: middle;
}

div.caution
{
	width: 97%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 20pt;
	margin-bottom: 20pt;
	padding-left: 30pt;
	padding-bottom: 20pt;
	padding-top: 20pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_caution.png');
	background-size: 40px 40px;
	background-position: left center;
}

div.caution &gt; p
{
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	vertical-align: middle;
}

div.warning
{
	width: 97%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 20pt;
	margin-bottom: 20pt;
	padding-left: 30pt;
	padding-bottom: 20pt;
	padding-top: 20pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_warning.png');
	background-size: 40px 40px;
	background-position: left center;
}

div.warning &gt; p
{
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	vertical-align: middle;
}

code
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 14pt;
	text-decoration: none;
	white-space: pre;
}

@media non-print
{
	p.logo
	{
		text-align: center;
		margin-bottom: 100pt;
	}

	.Body
	{
		font-family: 'Open Sans', sans-serif, Regular;
	}

	.cardHead
	{
		font-family: 'Open Sans', sans-serif;
		font-style: normal;
		color: #000000;
		padding-top: 5px;
	}

	div.logo
	{
		float: left;
		margin-left: 0px;
		padding-left: 0px;
		margin-right: 0px;
		clear: left;
		width: 20%;
		padding-top: 0px;
		padding-bottom: 2px;
		margin-top: 2px;
	}

	p.introHead
	{
		font-family: 'Open Sans', sans-serif;
		font-style: normal;
		font-size: 15pt;
		color: #000000;
		padding-top: 5px;
		line-height: 18pt;
		border-bottom: solid 1px #cccccc;
		margin-bottom: 20pt;
		padding-bottom: 10pt;
		margin-top: 12pt;
		font-weight: normal;
		mc-disable-glossary-terms: true;
		border-bottom-color: #ff8300;
		text-align: center;
	}

	p.Table_Step_Sub_1st_Instantonly
	{
		text-align: left;
		margin-left: 0.4in;
		margin-right: 0in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		mc-auto-number-format: 's:{a=1}. ';
		mc-auto-number-offset: 19.2px;
		mc-next-tag: p;
		mc-next-class: Step_Sub_Next;
		line-height: 10pt;
		text-decoration: none;
		display: list-item;
		list-style: lower-alpha;
	}

	p.Table_Step_Sub_Next_Instantonly
	{
		text-align: left;
		margin-left: 0.4in;
		margin-right: 0in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		mc-auto-number-format: 's:{a+}. ';
		mc-auto-number-offset: 19.2px;
		line-height: 10pt;
		text-decoration: none;
		display: list-item;
		list-style: lower-alpha;
	}

	/* Style the buttons that are used to open and close the accordion panel */

	.accordion
	{
		background-color: #eee;
		color: #444;
		cursor: pointer;
		padding: 18px;
		width: 100%;
		text-align: left;
		outline: none;
		transition: 0.4s;
		border: solid 1px #c3c5c8;
		font-size: 13pt;
		font-family: 'open sans', sans-serif;
	}

	/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */

	.active,
	.accordion:hover
	{
		background-color: #ccc;
		display: block;
	}

	.taskpanel
	{
		padding: 0;
		border: solid 1px #c3c5c8;
		width: 100%;
		margin-bottom: 20px;
		display: block;
	}

	/* Style the accordion panel. Note: hidden by default */

	.panelheader
	{
		background-color: #eee;
		color: #000000;
		cursor: pointer;
		padding: 10px;
		width: 100%;
		text-align: left;
		outline: none;
		transition: 0.4s;
		font-size: 13pt;
		font-family: 'open sans', sans-serif;
		border-bottom: solid 1px #c3c5c8;
	}

	.panel
	{
		padding: 0 18px;
		background-color: white;
		width: 100%;
		display: block;
		padding-bottom: 5px;
		margin-bottom: 0px;
	}

	.accordion:after
	{
		content: '\02795';
		/* Unicode character for "plus" sign (+) */
		font-size: 13px;
		color: #777;
		float: right;
		margin-left: 5px;
	}

	.active:after
	{
		content: "\02796";
		/* Unicode character for "minus" sign (-) */
		font-size: 13px;
		color: #777;
		float: right;
		margin-left: 5px;
	}

	/*scrollbar /*

		/* width */

	::-webkit-scrollbar
	{
		width: 10px;
	}

	/* Track */

	::-webkit-scrollbar-track
	{
		background: #ffffff;
	}

	/* Handle */

	::-webkit-scrollbar-thumb
	{
		background: #f6f6f7;
	}

	/* Handle on hover */

	::-webkit-scrollbar-thumb:hover
	{
		background: #c3c5c8;
	}

	div.introCard
	{
		padding-bottom: 10px;
		padding-left: 10px;
		float: left;
		padding-right: 5px;
		color: #000000;
		padding-top: 5px;
		margin-bottom: 30px;
		border-bottom-color: #cccccc;
		border-left-color: #cccccc;
		border-right-color: #cccccc;
		border-top-color: #ff8300;
		border-top-width: 3px;
		background-color: #ffffff;
		margin-right: 3px;
		border: solid 1px #c3c5c8;
		border-radius: 8px;
		margin-left: 1%;
		width: 28%;
		height: 250px;
		position: relative;
	}

	div.introContainer
	{
		max-width: 1200px;
		margin: 0;
		overflow: hidden;
		padding-top: 10px;
		padding: 10px 0px 60px;
		padding-bottom: 40px;
		margin-right: 0px;
		margin-bottom: 40px;
		max-width: 1400px;
		height: 100%;
		border: none 1px #f6f6f7;
		padding-left: 5px;
		width: 100%;
		margin-left: 5px;
	}

	div.container
	{
		position: relative;
		padding: 0px;
		border-left-color: #cccccc;
		margin-right: 0px;
		border-right-style: solid;
		border-right-width: 1px;
		margin-left: 0px;
		min-height: 800px;
		border-top: none 1px #c3c5c8;
		background-color: transparent;
		border-left: none 1px #c3c5c8;
		border-right: none 1px #c3c5c8;
		margin-bottom: 0px;
		padding-bottom: 0px;
		padding-right: 0px;
		width: 100%;
		padding-left: 5px;
		height: 100%;
		padding-top: 35px;
		margin-top: 2px;
	}

	div.introCardBody
	{
		text-align: center;
		padding-bottom: 10px;
		padding-left: 10px;
		padding-right: 10px;
		margin-top: 0px;
		padding-top: 0px;
	}

	p.IntroList
	{
		margin-bottom: 12px;
		margin-top: 10pt;
		mc-disable-glossary-terms: true;
		font-size: 10pt;
		line-height: 23px;
		text-align: center;
		font-family: 'Open Sans', sans-serif;
	}

	p.IntroText
	{
		mc-disable-glossary-terms: true;
		line-height: 20px;
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 10.5pt;
		text-align: center;
		font-family: 'Open Sans', sans-serif;
	}

	p.cardHead
	{
		font-family: 'Open Sans', sans-serif, Regular;
		font-style: normal;
		border-bottom: solid 1px #c3c5c8;
		margin-bottom: 16px;
		padding-bottom: 16px;
		text-align: center;
		mc-disable-glossary-terms: true;
		font-size: 1.57em;
		color: #02a7ec;
		line-height: 16pt;
		font-weight: normal;
	}

	div.card
	{
		padding-bottom: 10px;
		padding-left: 10px;
		border-top-style: solid;
		border-bottom-style: solid;
		float: left;
		position: relative;
		padding-right: 5px;
		padding-top: 10px;
		margin-right: 5px;
		border-left-color: #f6f6f7 #;
		border-right-color: #f6f6f7;
		border-right-style: solid;
		color: #000000;
		border-bottom-color: #c3c5c8;
		border-right: solid 3px #c3c5c8;
		border-right-width: 2px;
		border-left-width: 2px;
		border-left: solid 2px #c3c5c8;
		border-bottom-width: 2px;
		clear: none;
		margin-left: 2%;
		width: 24%;
		background-color: #ffffff;
		border-top-color: #c3c5c8;
		border-top-width: 2px;
		height: 400px;
	}

	div.CardContainer
	{
		height: 100%;
		max-width: 1200px;
		overflow: hidden;
		width: 100%;
		clear: both;
		padding-left: 5px;
		padding-right: 5px;
		border: none 2px #cccccc;
		padding-top: 20px;
		padding-bottom: 10px;
		padding: 20px 0px;
		margin: 0 auto;
		margin-left: 5em;
		margin-right: 5em;
	}

	div.CardBody
	{
		text-align: center;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 10px;
		padding-right: 10px;
	}

	p.homeCardList
	{
		margin-bottom: 12px;
		margin-top: 10pt;
		text-align: center;
		mc-disable-glossary-terms: true;
		font-size: 10pt;
		line-height: 23px;
	}

	p.Body_in_Bullet_Step
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Body_in_Sub-Bullet_Sub-Step
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Body_Lead-in
	{
		page-break-after: avoid;
		font-family: "Open Sans", sans-serif, Regular;
	}

	.footer a
	{
		text-decoration: none;
		color: #646569;
		font-size: 10pt;
		line-height: 10pt;
	}

	p.Bullet_1
	{
		font-family: "Open Sans", sans-serif, Regular;
		display: list-item;
		list-style: ;
		list-style-type: square;
	}

	p.Bullet_2
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-auto-number-position: inside-head;
		display: list-item;
		mc-auto-number-class: Bullet2;
		list-style: ;
		list-style-type: circle;
	}

	p.Bullet_2_in_Steps
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-auto-number-position: inside-head;
		display: list-item;
		mc-auto-number-class: Bullet2;
		list-style: ;
		list-style-type: circle;
	}

	p.Bullet_in_Steps
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-auto-number-position: inside-head;
		display: list-item;
		list-style: ;
		list-style-type: square;
	}

	p.Bullet_in_Sub-Steps
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-auto-number-position: inside-head;
		display: list-item;
		list-style: ;
		list-style-type: square;
	}

	p.Callout
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Chapter_Number
	{
		line-height: 4pt;
		font-family: "Open Sans", sans-serif, Regular;
		mc-auto-number-format: '{ }';
	}

	p.Chapter_Title
	{
		margin-bottom: 7px;
		font-family: "Open Sans", sans-serif, Regular;
		color: #000000;
		margin-top: 5pt;
		font-size: 18pt;
		font-weight: normal;
		border-bottom-color: #cccccc;
		border-bottom-width: 1px;
		padding-bottom: 10px;
		border-bottom-style: solid;
		padding-top: 10px;
		border-top: none 1px #cccccc;
	}

	p.CLI
	{
		font-family: monospace;
		mc-disable-glossary-terms: true;
	}

	p.CLI_Indented
	{
		font-family: monospace;
		mc-disable-glossary-terms: true;
	}

	p.CLI_Indented_2
	{
		color: #000000;
		font-size: 9pt;
		font-family: 'Courier New';
		font-style: normal;
		font-weight: normal;
		letter-spacing: 0em;
		line-height: 10pt;
		margin-bottom: 2pt;
		margin-left: 0.4in;
		margin-right: 0in;
		margin-top: 2pt;
		text-align: left;
		text-decoration: none;
		text-indent: 0px;
		white-space: pre;
	}

	p.CLI_Indented_3
	{
		color: #000000;
		font-family: 'Courier New';
		font-size: 9pt;
		font-style: normal;
		font-weight: normal;
		letter-spacing: 0em;
		line-height: 10pt;
		margin-bottom: 2pt;
		margin-left: 0.6in;
		margin-right: 0in;
		margin-top: 2pt;
		text-align: left;
		text-decoration: none;
		text-indent: 0px;
		white-space: pre;
	}

	p.Concept
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.ConceptContext
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Doc_Title
	{
		mc-hyphenate: never;
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	p.Figure_Title
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	p.Footnote
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	p.Index1
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index2
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index3
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index4
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index5
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index6
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index7
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index8
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Index9
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Output
	{
		font-family: monospace;
		mc-disable-glossary-terms: true;
	}

	p.slideHead
	{
		font-family: 'Open Sans', sans-serif;
		color: #ffffff;
		line-height: 16pt;
		padding-bottom: 20px;
		padding-left: 20px;
		padding-right: 10px;
		padding-top: 10px;
		font-size: 10pt;
		font-weight: bold;
		mc-disable-glossary-terms: true;
	}

	p.footerHead
	{
		font-family: 'Open Sans', sans-serif;
		color: #646569;
		padding-bottom: 10px;
		padding-left: 0px;
		padding-right: 10px;
		padding-top: 10px;
		font-size: 11pt;
		font-weight: bold;
		mc-disable-glossary-terms: true;
		line-height: 16pt;
	}

	p.Step_1st
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Step_1st_in_Bullet
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Step_Next
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Step_Next_in_Bullet
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Step_Sub_1st
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Step_Sub_Next
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.Table_Body
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: false;
	}

	p.Table_Body_in_Bullet_Step
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: false;
	}

	p.Table_Bullet
	{
		font-family: "Open Sans", sans-serif, Regular;
		display: list-item;
		list-style: ;
		list-style-type: square;
		mc-disable-glossary-terms: false;
	}

	p.Table_Heading
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	p.Table_Note
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: false;
	}

	p.Table_Step_1st
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: false;
	}

	p.Table_Step_Next
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: false;
	}

	p.TOC1
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.TOC2
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.TOC3
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.TOC4
	{
		font-family: 'Open Sans';
	}

	p.TOC5
	{
		font-family: 'Open Sans';
	}

	p.TOC6
	{
		font-family: 'Open Sans';
	}

	p.URL
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	p.zCautionText
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	p.zIconCaution
	{
		font-family: "Open Sans", sans-serif, Regular;
		background-image: url('../../Common Files/graphics/aruba_caution.png');
	}

	p.zIconNote
	{
		font-family: 'Open Sans', sans-serif, Regular;
		background-image: url('../../Common Files/graphics/aruba_note.png');
	}

	p.zIconWarning
	{
		font-family: "Open Sans", sans-serif, Regular;
		background-image: url('../../Common Files/graphics/aruba_warning.png');
	}

	p.zTextNote
	{
		font-family: 'Open Sans', sans-serif;
	}

	p.zWarningText
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	h1._1CmdHeading
	{
		color: #f36f21;
		font-family: "Open Sans", sans-serif, Regular;
	}

	h1._1Heading
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #000000;
		margin-top: 5pt;
		margin-bottom: 10pt;
		line-height: 19pt;
		font-size: 18pt;
		font-weight: normal;
		mc-disable-glossary-terms: true;
		border-bottom-width: 1px;
		border-bottom-color: #cccccc;
		border-top-width: 1px;
		border-top-color: #cccccc;
		padding-bottom: 10px;
		padding-top: 10px;
		border-bottom-style: solid;
		border-top-style: none;
	}

	h2._2Heading
	{
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
	}

	h3._3Heading
	{
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		color: #000000;
	}

	h4._4Heading
	{
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
	}

	MadCap|xref
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
		color: #5289ae;
		text-decoration: underline;
	}

	MadCap|xref.TOCPageNumber
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	MadCap|xref.IndexPageNumber
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #5289ae;
	}

	MadCap|xref.ConceptPageNumber
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #5289ae;
	}

	MadCap|xref.ListOfPageNumber
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	MadCap|glossaryTerm
	{
		font-family: 'Open Sans', sans-serif;
		mc-closed-image: none;
		mc-open-image: none;
		font-weight: inherit;
		mc-image-position: none;
		mc-hyphenate: never;
		text-decoration: none;
		mc-term-display: popup;
		mc-disable-glossary-terms: true;
		color: #02a7ec;
	}

	a.GlossaryPageTerm
	{
		mc-hyphenate: never;
		font-family: 'Open Sans', sans-serif;
		mc-disable-glossary-terms: true;
		color: #5289ae;
		mc-closed-image: none;
		mc-image: none;
		mc-open-image: none;
	}

	a.Popup
	{
		color: #ffffff;
		background-color: #000000;
	}

	a.GlossaryPageTerm:active
	{
		font-style: inherit;
	}

	a.GlossaryPageTerm:link
	{
		
	}

	MadCap|glossaryTerm.Expanding
	{
		
	}

	MadCap|glossaryTerm.Hyperlink
	{
		
	}

	a.GlossaryPageTerm:focus
	{
		
	}

	a.GlossaryPageTerm:hover
	{
		
	}

	body
	{
		font-family: "Open Sans", sans-serif, Regular;
		border-bottom: none 0px #000000;
		border-top: solid 0px #ededeb;
		background-color: #ffffff;
	}

	p
	{
		font-size: 10pt;
		font-family: "Open Sans", sans-serif, Regular;
		color: #000000;
	}

	tbody
	{
		font-size: 9pt;
		font-family: "Open Sans", sans-serif, Regular;
	}

	MadCap|xref.Heading_And_Page__
	{
		color: #5289ae;
		mc-format: '{paratext}';
	}

	MadCap|xref.Chap____Title__And_Page__
	{
		mc-format: '{paratext}';
		mc-disable-glossary-terms: true;
		color: #5289ae;
		mc-help-control-display: popup;
	}

	MadCap|xref.Table_Figure___And_page__
	{
		mc-format: '{paranumonly}';
		color: #5289ae;
	}

	MadCap|xref.Step___And_Page__
	{
		mc-format: 'step {paranumonly}';
		color: #5289ae;
	}

	p.Table_Title
	{
		mc-auto-number-format: 'Table {n+}: ';
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHead
	{
		font-family: "Open Sans", sans-serif, Regular;
		margin-top: 5pt;
		font-size: 11pt;
		font-weight: normal;
		color: #064a76;
		line-height: 10pt;
		mc-disable-glossary-terms: true;
		mc-closed-image: none;
	}

	MadCap|popupHead
	{
		color: #5289ae;
	}

	MadCap|popupBody
	{
		font-size: 9pt;
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
		color: #ffffff;
		background-color: #000000;
	}

	p.Anchor
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	p.TableFootnote
	{
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownBody
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #064a76;
	}

	MadCap|dropDownHotspot
	{
		font-family: "Open Sans", sans-serif, Regular;
		font-size: 11pt;
		color: #064a76;
		font-weight: normal;
		line-height: 10pt;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDown
	{
		font-size: 10pt;
		font-family: "Open Sans", sans-serif, Regular;
		margin-top: 5pt;
		color: #064a76;
		line-height: 10pt;
		padding-top: 2px;
		mc-open-image: url('../Images/icon_dropdown_open.png');
		mc-closed-image: url('../Images/icon_dropdown_close.png');
	}

	span.URL
	{
		font-size: ;
		mc-disable-glossary-terms: true;
	}

	tr
	{
		
	}

	a
	{
		color: #02a7ec;
	}

	a:active
	{
		color: #5289ae;
	}

	a:link
	{
		color: #5289ae;
		text-decoration: underline;
	}

	td.footer
	{
		
	}

	td
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #000000;
	}

	MadCap|bodyProxy
	{
		background-color: #ffffff;
		color: #000000;
		padding-left: 5px;
	}

	p.Table_Bullet2
	{
		margin-top: 2pt;
		margin-bottom: 2pt;
		line-height: 10pt;
		font-size: 9pt;
		margin-left: 0.4in;
		mc-auto-number-class: Bullet2;
		list-style: ;
		display: list-item;
		list-style-type: circle;
		mc-disable-glossary-terms: false;
	}

	/* Responsive Header Styles*/

	#contentBody &gt; .responsive-header
	{
		background-color: #f5f5f5;
	}

	/* Content Section */

	#content-section
	{
		background-color: #f5f5f5;
		mc-disable-glossary-terms: true;
		width: auto;
		border-top-color: #646569;
		border-top: none 0px #000000;
		position: relative;
		margin-top: 10px;
		padding-bottom: 0px;
		margin-bottom: 0px;
		padding-top: 75px;
	}

	#content-section h3
	{
		font-weight: normal;
	}

	.right-section div.button-group,
	.left-section div.button-group
	{
		margin-top: 20px;
	}

	#content-section .left-section
	{
		padding-right: 20px;
	}

	#content-section .right-section
	{
		padding-left: 20px;
	}

	.left-section .left-content,
	.right-section .right-content
	{
		height: 270px;
	}

	#content-section .right-section .table-images:first-of-type
	{
		margin-bottom: 20px;
	}

	#content-section.mc-blurb p
	{
		margin-top: 0;
		margin-bottom: 5px;
	}

	#content-section.mc-blurb .mc-bullets
	{
		margin-top: 10px;
		padding-left: 30px;
		padding-right: 10px;
	}

	#content-section.mc-blurb .mc-bullets &gt; li
	{
		color: #5a5a5a;
		list-style-image: url('../Images/icon_bullet.png');
		font-size: 14px;
		margin-top: 8px;
		line-height: 1.6em;
	}

	a.MCBreadcrumbsLink
	{
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: normal;
		font-style: normal;
		text-decoration: none;
		mc-disable-glossary-terms: true;
	}

	a.MCBreadcrumbsLink:hover
	{
		font-weight: normal;
		font-style: normal;
	}

	a.MCBreadcrumbsLink:visited
	{
		color: #064a76;
		font-weight: normal;
		font-style: normal;
	}

	MadCap|breadcrumbsProxy
	{
		font-size: 0.78em;
		font: Open Sans;
		mc-breadcrumbs-divider: ' &gt; ';
		font-family: "Open Sans", sans-serif, Regular;
		mc-disable-glossary-terms: true;
		font-style: normal;
		margin-top: 5px;
		padding-top: 2px;
		mc-breadcrumbs-prefix: 'You are here:  ';
		color: #008475;
		mc-breadcrumbs-count: 3;
	}

	span.Bullet
	{
		color: #000000;
		list-style-type: circle;
		mc-disable-glossary-terms: true;
	}

	MadCap|relatedTopics
	{
		font: Open Sans;
		font-family: 'Open Sans';
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	MadCap|topicToolbarProxy
	{
		text-align: right;
		margin-top: 5px;
		padding-top: 5px;
	}

	hr
	{
		width: 100%;
		border: solid 1px #cccccc;
		height: 1px;
	}

	MadCap|searchResultsProxy
	{
		color: #000000;
		font: Open Sans;
		font-family: 'Open Sans';
		line-height: 13pt;
		font-size: 9pt;
		mc-breadcrumbs-divider: ' ';
		mc-breadcrumbs-prefix: ' ';
		background-color: #ffffff;
		border-color: #a9a9a9;
		width: 30%;
		float: right;
		mc-disable-glossary-terms: true;
	}

	MadCap|conceptLink
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
	}

	MadCap|keywordLink
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
	}

	span.Bullet2
	{
		display: block;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHead.h3
	{
		margin-top: 5pt;
		line-height: 10pt;
		font-size: 11pt;
		padding-bottom: 5px;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHead.h1
	{
		margin-top: 5pt;
		line-height: 10pt;
		font-size: 11pt;
		padding-bottom: 5px;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHead.h2
	{
		margin-top: 5pt;
		line-height: 10pt;
		font-size: 11pt;
		padding-bottom: 5px;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHead.h4
	{
		margin-top: 5pt;
		line-height: 10pt;
		font-size: 11pt;
		padding-bottom: 5px;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	/* Style the tab */

	div.tab
	{
		overflow: hidden;
		mc-disable-glossary-terms: true;
		padding-left: 0;
		margin-bottom: 5px;
		padding-bottom: 2px;
		margin-top: 0px;
		padding-top: 0px;
		height: ;
		margin-left: 5px;
		margin-right: 5px;
		border: none 1px #000000;
		border-bottom-style: solid;
		border-bottom-color: #c3c5c8;
	}

	/* Style the buttons inside the tab */

	div.tab button
	{
		outline: none;
		cursor: pointer;
		transition: 0.3s;
		font-family: 'Open Sans';
		font-weight: bold;
		font-color: #000000;
		border-color: transparent;
		font-size: 11pt;
		padding: 25px 2px 3px 5px;
		mc-disable-glossary-terms: true;
	}

	/* Change background color of buttons on hover */

	div.tab button:hover
	{
		color: #000000;
		font-family: 'Open Sans';
		border-bottom-color: #02a7ec;
		border-bottom: solid 2px;
		padding: 25px 2px 3px 5px;
		mc-disable-glossary-terms: true;
	}

	/* Create an active/current tablink class */

	div.tab button.active
	{
		font-family: 'Open Sans';
		font-weight: bold;
		font-color: #02a7ec;
		border-bottom-style: solid;
		border-bottom-width: 2px;
		border-bottom-color: #02a7ec;
		padding: 25px 2px 3px 5px;
		mc-disable-glossary-terms: true;
	}

	/* Style the tab content */

	.tabcontent
	{
		display: none;
		padding-bottom: 10px;
		border-bottom-color: transparent;
		border: none 0px transparent;
		padding: 5px 12px 5px 5px;
		mc-disable-glossary-terms: false;
	}

	MadCap|dropDownHotspot.h2
	{
		line-height: 10pt;
		margin-top: 5pt;
		padding-bottom: 5px;
		font-size: 11pt;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHotspot.h1
	{
		padding-bottom: 5px;
		font-size: 11pt;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHotspot.h3
	{
		font-size: 11pt;
		line-height: 10pt;
		margin-top: 5pt;
		padding-bottom: 5px;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	MadCap|dropDownHotspot.h4
	{
		font-size: 11pt;
		line-height: 10pt;
		margin-top: 5pt;
		padding-bottom: 5px;
		font-weight: normal;
		color: #064a76;
		mc-disable-glossary-terms: true;
	}

	span.Red
	{
		background-color: #faf7b7;
		font-weight: bold;
		mc-disable-glossary-terms: true;
	}

	div.footer
	{
		padding-bottom: 20px;
		display: block;
		mc-disable-glossary-terms: true;
		padding-top: 10px;
		margin-top: 0px;
		background-color: #cccccc;
		border-top: solid 2px #cccccc;
		width: 100%;
		margin-right: 0px;
		margin-left: 0px;
	}

	/* Feedback button */

	.modal
	{
		background: rgba(236,236,236,0);
		display: inline-block;
		width: auto;
		text-align: center;
		font-family: 'Open Sans', sans-serif;
		mc-disable-glossary-terms: true;
		padding-top: 20px;
		padding-bottom: 10px;
		margin-bottom: 20px;
	}

	.question
	{
		color: #000000;
		font-size: 11pt;
		padding: 0.3em -3em;
		font-family: 'Open Sans', sans-serif;
	}

	.modal &gt; label
	{
		background: #f6f6f6;
		border: 1px solid #cccccc;
		border-radius: .2em;
		color: #01a982;
		cursor: pointer;
		display: inline-block;
		font-weight: normal;
		font-variant: normal;
		font-size: 13pt;
		font-family: 'Open Sans', sans-serif;
		padding: 0.5em 0.8em;
		text-shadow: 1px 1px 1px #fff;
	}

	.modal &gt; label:hover
	{
		border: 1px solid #cccccc;
		color: #000000;
	}

	.modal a
	{
		background: #f6f6f6;
		border: 1px solid #cccccc;
		border-radius: .2em;
		color: #000000;
		cursor: pointer;
		display: inline-block;
		font-weight: normal;
		font-variant: normal;
		text-decoration: none;
		font-size: 13pt;
		font-family: 'Open Sans', sans-serif;
		padding: 0.5em 0.8em;
		margin: 0.5em 0.5em 0.5em .2em;
		text-shadow: 1px 1px 1px #fff;
	}

	.modal &gt; a:hover
	{
		border: 1px solid #ccccc;
		color: #000000;
	}

	.modal__overlay
	{
		background: rgba(0,0,0,0.4);
		bottom: 0;
		left: 0;
		position: fixed;
		right: 0;
		text-align: center;
		text-shadow: none;
		top: 0;
		z-index: 600;
		justify-content: center;
		align-items: flex-end;
		mc-disable-glossary-terms: true;
	}

	.modal__wrap
	{
		padding: 1em;
		position: relative;
		vertical-align: middle;
		max-width: 500px;
		width: 20%;
		background: #f6f6f6;
		margin-bottom: 100px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
		border-radius: 10px;
		mc-disable-glossary-terms: true;
	}

	div.feedback_yes
	{
		margin-top: 10px;
		margin-bottom: 5px;
		display: none;
		font-family: 'Open Sans';
		padding-left: 5px;
		padding-right: 0px;
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 14pt;
		color: #000000;
		mc-disable-glossary-terms: true;
		background-color: #ededeb;
	}

	div.feedback_no
	{
		display: none;
		border-color: #d6e9c6;
		font-family: 'Open Sans';
		font-size: 13pt;
		padding-left: 5px;
		padding-top: 10px;
		padding-bottom: 10px;
		margin-top: 10px;
		margin-bottom: 5px;
		color: #000000;
		mc-disable-glossary-terms: true;
		background-color: #ededeb;
	}

	.feedback_link
	{
		font-family: 'Open Sans', sans-serif;
		text-decoration: underline;
		font-size: 11pt;
		color: #000000;
		mc-disable-glossary-terms: true;
	}

	div.header
	{
		background-image: none;
		width: 100%;
		mc-disable-glossary-terms: true;
		padding-bottom: 5px;
		margin-left: 0px;
		margin-right: 0px;
		padding-left: 0px;
		padding-right: 0px;
		border-left-width: 1px;
		border-color: #c3c5c8;
		border-right-width: 1px;
		border-left-style: none;
		border-right-style: none;
		border-top: none 1px #cccccc;
		position: fixed;
		z-index: 8;
		margin-top: ;
		border-bottom: solid 1px #ffffff;
		height: 3em;
		padding-top: 5px;
		background-color: #ededeb;
	}

	div.sideContent
	{
		mc-disable-glossary-terms: true;
		position: relative;
		min-height: 1000px;
		height: 100%;
		float: left;
		margin-right: 0px;
		margin-left: 0px;
		padding-bottom: 0px;
		margin-bottom: 0px;
		margin-top: 0px;
		border-right-width: 1px;
		border-left-color: #ededeb;
		clear: none;
		padding-top: 0px;
		background-color: transparent;
		border-right-color: #c3c5c8;
		border-right: solid 1px #c3c5c8;
		padding-left: 0px;
		padding-right: 5px;
		border-left: none 1px #c3c5c8;
		border-right-style: none;
		width: 22%;
	}

	#contentBody
	{
		width: 100%;
		mc-disable-glossary-terms: true;
		position: relative;
		float: none;
		padding-top: 55px;
		padding-bottom: 0px;
		margin-bottom: 0px;
	}

	p.zTextCaution
	{
		font-family: 'Open Sans', sans-serif;
	}

	.mc-blurb
	{
		mc-disable-glossary-terms: true;
	}

	.right-section div.button-group
	{
		mc-disable-glossary-terms: true;
	}

	html.templateTopic div.sideContent
	{
		mc-disable-glossary-terms: true;
	}

	button
	{
		mc-disable-glossary-terms: true;
		margin-top: 0px;
		padding-top: 0px;
	}

	button.active
	{
		mc-disable-glossary-terms: true;
	}

	caption
	{
		mc-disable-glossary-terms: true;
	}

	div.button-group
	{
		mc-disable-glossary-terms: true;
	}

	div.mainContent
	{
		mc-disable-glossary-terms: true;
		position: relative;
		height: 100%;
		min-height: 1000px;
		background-color: #ffffff;
		padding-top: 2px;
		border-top: none 1px #646569;
		border-right: none 1px #ededeb;
		margin-left: 0px;
		float: right;
		margin-right: 5px;
		padding-right: 10px;
		padding-left: 10px;
		border-left: solid 1px #cccccc;
		width: 76%;
	}

	img
	{
		mc-disable-glossary-terms: true;
	}

	MadCap|xref.App____Title__And_Page__
	{
		mc-disable-glossary-terms: true;
		color: #5289ae;
	}

	p.Appendix_Number
	{
		mc-disable-glossary-terms: true;
	}

	p.Doc_Title_single_pdf
	{
		mc-disable-glossary-terms: true;
	}

	p.Doc_Type
	{
		mc-disable-glossary-terms: true;
	}

	p.TOC_Title
	{
		mc-disable-glossary-terms: true;
	}

	span
	{
		mc-disable-glossary-terms: true;
	}

	span.CLI
	{
		mc-disable-glossary-terms: true;
	}

	span.CLI_Bold
	{
		mc-disable-glossary-terms: true;
	}

	span.Cool_Grey_11
	{
		mc-disable-glossary-terms: true;
	}

	span.Cool_Grey_9
	{
		mc-disable-glossary-terms: true;
	}

	span.Emphasis
	{
		mc-disable-glossary-terms: true;
	}

	span.Navigation
	{
		mc-disable-glossary-terms: true;
	}

	span.PMS_144
	{
		mc-disable-glossary-terms: true;
	}

	span.PMS_646
	{
		mc-disable-glossary-terms: true;
	}

	span.Subscript
	{
		mc-disable-glossary-terms: true;
	}

	span.Superscript
	{
		mc-disable-glossary-terms: true;
	}

	span.zTitleNo
	{
		mc-disable-glossary-terms: true;
	}

	table
	{
		
	}

	MadCap|xref.FigureNum
	{
		color: #5289ae;
	}

	MadCap|xref.Heading_And_Page
	{
		color: #5289ae;
	}

	MadCap|xref.Table_Figure_Only
	{
		color: #5289ae;
	}

	div.GlossaryPageDefinition
	{
		color: #000000;
	}

	div.GlossaryPageEntry
	{
		color: #000000;
	}

	div.GlossaryPageHeading
	{
		color: #000000;
	}

	div.GlossaryPageTerm
	{
		color: #000000;
	}

	a:hover
	{
		color: #5289ae;
	}

	a:focus
	{
		text-decoration: underline;
		color: #02a7ec;
	}

	img.FullWidth
	{
		
	}

	div.containerCklst
	{
		height: 100%;
		max-width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		clear: both;
		padding-top: 30px;
		padding: 10px 0px 60px;
		padding-bottom: 20px;
		border: none 2px #cccccc;
		margin-left: 5em;
		margin-bottom: 20px;
	}

	div.cklstBlk
	{
		padding-left: 10px;
		position: relative;
		padding-right: 5px;
		margin-right: 5px;
		color: #000000;
		padding-top: 5px;
		background-color: transparent;
		border: solid 1px #ffffff;
		border-bottom-color: #cccccc;
		border-right-color: #cccccc;
		margin-left: 2px;
		border-top-color: #cccccc;
		border-top-width: 1px;
		border-left-width: 2px;
		height: auto;
		margin-top: 5px;
		float: left;
		margin-bottom: 5px;
		width: 70%;
		padding-bottom: 10px;
		border-left-color: #02a7ec;
	}

	p.cklstHead
	{
		font-family: 'Open Sans', sans-serif, Regular;
		font-style: normal;
		line-height: 18pt;
		text-align: left;
		border-bottom: none 0px #000000;
		color: #02a7ec;
		font-weight: bold;
		margin-bottom: 5px;
		font-size: 11pt;
		padding-top: 2px;
		padding-bottom: 2px;
		margin-top: 5px;
	}

	p.cklstBody
	{
		mc-disable-glossary-terms: true;
		line-height: 20px;
		margin-bottom: 10px;
		font-size: 10pt;
		text-align: left;
		margin-top: 5px;
		font-family: 'Open Sans', sans-serif;
	}

	MadCap|toggler
	{
		mc-open-image: none;
		mc-closed-image: none;
		color: #000000;
	}

	MadCap|expanding
	{
		mc-closed-image: url('../Images/icon_bullet.png');
	}

	MadCap|expandingHead
	{
		mc-closed-image: url('../Images/icon_bullet.png');
		mc-open-image: none;
	}

	MadCap|dropDownHead.chk_h1
	{
		font-weight: bold;
		mc-image-position: right;
		mc-image-spacing: 5px;
		color: #02a7ec;
		line-height: 16pt;
	}

	MadCap|dropDownHotspot.chklst_h1
	{
		font-weight: bold;
		color: #02a7ec;
	}

	div.introPage
	{
		width: 100%;
		min-height: 1000px;
		position: relative;
		float: left;
		padding: 0px;
		border-left-color: #cccccc;
		padding-left: 5px;
		border-top-width: 2px;
		background-color: #ffffff;
		margin-left: 5px;
		margin-right: 5px;
		border-top: solid 1px #c3c5c8;
		padding-right: 10px;
		border-left: none 1px #c3c5c8;
		border-right: none 1px #c3c5c8;
		padding-bottom: 0px;
		margin-bottom: 0px;
		height: 100%;
		margin-top: 0px;
		padding-top: 45px;
	}

	div.rightContent
	{
		float: right;
		background-color: transparent;
		clear: right;
		margin-left: 0px;
		margin-top: 2px;
		margin-bottom: 2px;
		padding-bottom: 5px;
		margin-right: 0;
		padding-top: 0px;
		width: 30%;
	}

	button.tablinks
	{
		border-bottom-length: 2px;
		border-bottom-style: solid;
		border-bottom-color: #02a7ec;
		margin-left: 20px;
		margin-right: 20px;
		background-color: transparent;
		color: #000000;
		margin-top: 5px;
		padding-top: 5px;
	}

	p.hidden
	{
		display: none;
	}

	p
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 4pt;
		margin-bottom: 2pt;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	h1
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 18pt;
		letter-spacing: 0em;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #f36f21;
	}

	h2
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 15pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 14pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h3
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #5289ae;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h4
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	p.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	div.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	div.screen &gt; p
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		color: #000000;
	}

	.figtitle
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		font-style: italic;
		text-align: left;
	}

	caption
	{
		text-align: left;
		margin-bottom: 4pt;
		line-height: 15pt;
	}

	.dt
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	.dl
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	dt
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	dl
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	.dlentry
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	/*

	ul
	{
		margin-bottom: 5px;
		margin-top: 10px;
		margin-left: 10px;
		font-size: 10pt;
	}

	li
	{
		font-family: 'Open Sans', sans-serif;
		line-height: 14pt;
		padding-top: 2px;
		padding-bottom: 2px;
		margin: 5px;
		margin-left: 5px;
		margin-bottom: 0px;
		margin-top: 0px;
		font-size: 10pt;
	}

*/

	ol
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		line-height: 13pt;
		text-decoration: none;
	}

	ul
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		margin-left: -15pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		line-height: 13pt;
		text-decoration: none;
	}

	ul &gt; li
	{
		margin: 0pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		list-style-type: square;
	}

	ul &gt; li &gt; ul
	{
		margin-left: 5pt;
	}

	ul &gt; li &gt; ul &gt; li
	{
		margin-top: 4pt;
		margin-left: -20pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		list-style-type: circle;
	}

	ul &gt; li &gt; ul &gt; li &gt; ul &gt; li
	{
		margin-top: 4pt;
		margin-left: -20pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		list-style-type: disc;
	}

	ol &gt; li
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ol &gt; li &gt; ol
	{
		margin: 5pt 0pt 5pt 15pt;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ol &gt; li &gt; ol &gt; li
	{
		margin: 5pt 0pt 5pt -25pt;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		list-style-type: lower-alpha;
	}

	ol &gt; li &gt; ol &gt; li &gt; ol &gt; li
	{
		margin: 5pt 0pt 5pt -30pt;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		list-style-type: lower-roman;
	}

	ul &gt; li &gt; p
	{
		margin-left: 0pt;
	}

	ul.menu,
	ul.menu ul,
	ul.menu li
	{
		text-indent: 0pt;
	}

	.tabletitle
	{
		mc-auto-number-format: 'Table {Gn+}: ';
		font-family: "Open Sans", sans-serif;
		font-style: normal;
		font-size: 9pt;
		font-weight: bold;
		color: #000000;
		line-height: 11pt;
		text-align: left;
	}

	.tabletitletext
	{
		font-family: "Open Sans", sans-serif;
		font-style: italic;
		font-size: 9pt;
		color: #000000;
		line-height: 11pt;
		text-align: left;
	}

	div.note
	{
		width: 88%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.note &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		vertical-align: middle;
	}

	div.notes
	{
		width: 88%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.notes p
	{
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:first-child
	{
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:last-of-type
	{
		border-bottom: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		margin-bottom: 10px;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.caution
	{
		width: 97%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 20pt;
		margin-bottom: 20pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_caution.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.caution &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		vertical-align: middle;
	}

	div.warning
	{
		width: 97%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 20pt;
		margin-bottom: 20pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_warning.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.warning &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		vertical-align: middle;
	}

	code
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 14pt;
		text-decoration: none;
		white-space: pre;
	}
}

@media print
{
	p.logo
	{
		text-align: center;
		margin-top: 70px;
	}

	MadCap|xref.Heading_And_Page__
	{
		color: #5289ae;
		mc-format: '{paratext} on page {page}';
	}

	MadCap|xref.Chap____Title__And_Page__
	{
		mc-format: '{paratext} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.Step___And_Page__
	{
		mc-format: 'step {paranumonly} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.Table_Figure___And_page__
	{
		color: #5289ae;
		mc-format: '{paranumonly}';
	}

	MadCap|xref.App____Title__And_Page__
	{
		mc-format: '{paratext} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.TOCPageNumber
	{
		mc-format: '{paratext} on page {page}';
	}

	div.cklstBlk
	{
		padding-left: 10px;
		position: relative;
		padding-right: 5px;
		margin-right: 5px;
		color: #000000;
		padding-top: 5px;
		background-color: transparent;
		border-bottom-color: #cccccc;
		border-right-color: #cccccc;
		margin-left: 2px;
		border-top-color: #cccccc;
		border-top-width: 1px;
		border-left-color: #02a7ec;
		border-left-width: 2px;
		height: auto;
		margin-top: 5px;
		float: left;
		margin-bottom: 5px;
		width: 70%;
		padding-bottom: 10px;
	}

	p.Table_Title
	{
		mc-auto-number-format: 'Table {Gn+}: ';
		page-break-after: avoid;
		line-height: 13pt;
	}

	MadCap|xref
	{
		text-decoration: underline;
		font-family: 'Open Sans';
		color: #5289ae;
	}

	p.Doc_Title
	{
		font: Open Sans;
		font-size: 36pt;
		mc-auto-number-position: none;
		color: #064a76;
		font-weight: bolder;
		font-family: 'Open Sans Extrabold';
	}

	p.Chapter_Number
	{
		margin: 0;
		text-align: right;
		font-size: 14pt;
		line-height: 14pt;
		margin-bottom: 6pt;
		margin-top: 10pt;
	}

	p.Chapter_Title
	{
		bottom: 10pt;
		color: #f5f5f5;
		margin: 0;
		margin-bottom: 40pt;
		text-align: right;
		mc-heading-level: 1;
	}

	p.Chapter_Title_single
	{
		font: 'Open Sans';
		color: #f5f5f5;
		margin-bottom: 30pt;
		font-size: 18pt;
		mc-heading-level: 1;
		mc-hyphenate: never;
		text-align: right;
		top: 0px;
		margin-top: 0;
		margin-left: -0.65in;
	}

	p.CLI_Indented
	{
		orphans: 3;
		widows: 3;
	}

	p.CLI
	{
		widows: 3;
		orphans: 3;
	}

	p.CLI_Indented_2
	{
		color: #000000;
		font-size: 9pt;
		font-family: 'Courier New';
		font-style: normal;
		font-weight: normal;
		letter-spacing: 0em;
		line-height: 10pt;
		margin-bottom: 2pt;
		margin-left: 0.4in;
		margin-right: 0in;
		margin-top: 2pt;
		text-align: left;
		text-decoration: none;
		text-indent: 0px;
		white-space: pre;
	}

	p.CLI_Indented_3
	{
		color: #000000;
		font-family: 'Courier New';
		font-size: 9pt;
		font-style: normal;
		font-weight: normal;
		letter-spacing: 0em;
		line-height: 10pt;
		margin-bottom: 2pt;
		margin-left: 0.6in;
		margin-right: 0in;
		margin-top: 2pt;
		text-align: left;
		text-decoration: none;
		text-indent: 0px;
		white-space: pre;
	}

	p.Table_Step_Sub_1st_Instantonly
	{
		text-align: left;
		margin-left: 0.4in;
		margin-right: 0in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		mc-auto-number-format: 's:{a=1}. ';
		mc-auto-number-offset: 19.2px;
		mc-next-tag: p;
		mc-next-class: Step_Sub_Next;
		line-height: 10pt;
		text-decoration: none;
		display: list-item;
		list-style: lower-alpha;
	}

	p.Table_Step_Sub_Next_Instantonly
	{
		text-align: left;
		margin-left: 0.4in;
		margin-right: 0in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		mc-auto-number-format: 's:{a+}. ';
		mc-auto-number-offset: 19.2px;
		line-height: 10pt;
		text-decoration: none;
		display: list-item;
		list-style: lower-alpha;
	}

	img
	{
		max-width: 5.6in;
		mc-printer-page-size: a4;
		border-left-style: none;
		border-bottom-style: none;
		border-style: none;
		border-width: 0px;
	}

	object
	{
		max-width: 5.6in;
	}

	h1._1Heading
	{
		mc-heading-level: 2;
	}

	p.Doc_Title_single_pdf
	{
		font: 'Open Sans';
		font-size: 24pt;
		color: #f5f5f5;
		font-weight: bold;
		margin-left: -0.65 in;
		margin-top: 14pt;
		margin-bottom: 6pt;
		mc-auto-number-position: none;
		mc-hyphenate: never;
		text-align: right;
	}

	p.Figure_Title
	{
		page-break-after: avoid;
		mc-auto-number-format: 'F:Figure {Gn+}  ';
		padding-bottom: 7px;
		font-family: 'Open Sans';
	}

	p.Footnote
	{
		text-align: left;
		margin-left: 0.2in;
		margin-right: 0.25in;
		margin-top: 1pt;
		margin-bottom: 1pt;
		font-family: 'Open Sans';
		font-weight: normal;
		font-style: normal;
		font-size: 8pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: -19px;
		line-height: 10pt;
		text-decoration: none;
	}

	h1._1CmdHeading
	{
		color: #f36f21;
	}

	h2._2Heading
	{
		mc-heading-level: 0;
	}

	h3._3Heading
	{
		mc-heading-level: 0;
	}

	h4._4Heading
	{
		mc-heading-level: 0;
	}

	p.Doc_Type
	{
		font: Open Sans;
		font-family: 'Open Sans';
	}

	p.Anchor
	{
		
	}

	p.TOC_Title
	{
		font-size: 15pt;
		font-family: 'Open Sans';
		line-height: 16pt;
		color: #f36f21;
	}

	p.TOC1
	{
		font-family: 'Open Sans';
		font-size: 12pt;
		line-height: 10pt;
		color: #f36f21;
	}

	p.TOC2
	{
		font-family: 'Open Sans';
		color: #5289ae;
		font-size: 10pt;
		line-height: 4pt;
	}

	p.TOC3
	{
		font-family: 'Open Sans';
		color: #000000;
		font-size: 10pt;
		line-height: 8pt;
	}

	p.TOC4
	{
		font-family: 'Open Sans';
		color: #a9a9a9;
		font-size: 10pt;
		line-height: 8pt;
	}

	p.TOC5
	{
		font-family: 'Open Sans';
		font-size: 8pt;
	}

	p.TOC6
	{
		font-family: 'Open Sans';
		font-size: 10pt;
	}

	p.TOC7
	{
		font-family: 'Open Sans';
	}

	p.TOC8
	{
		font-family: 'Open Sans';
	}

	p.TOC9
	{
		font-family: 'Open Sans';
		font-size: 10pt;
	}

	p.Table_Body
	{
		page-break-inside: avoid;
	}

	p.zTextCaution
	{
		
	}

	p.zWarningText
	{
		
	}

	span.zTitleNo
	{
		font-family: 'Open Sans';
	}

	p.Body_in_Bullet_Step
	{
		
	}

	h1
	{
		page-break-before: avoid;
	}

	MadCap|dropDownHead
	{
		font-family: 'Open Sans';
		font-weight: bold;
		line-height: 0pt;
	}

	MadCap|dropDownHead.h1
	{
		color: #f36f21;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 15pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		text-indent: 0px;
		page-break-after: avoid;
		mc-heading-level: 2;
	}

	MadCap|dropDownHead.h2
	{
		color: #000000;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		text-align: left;
		text-indent: 0px;
		line-height: 13pt;
		margin-top: 15pt;
		margin-bottom: 6pt;
		text-decoration: none;
		page-break-after: avoid;
		mc-heading-level: 0;
	}

	MadCap|dropDownHead.h3
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		color: #5289ae;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		page-break-after: avoid;
		padding-top: 10pt;
	}

	MadCap|dropDownHead.h4
	{
		color: #515151;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		text-align: left;
		text-indent: 0px;
		line-height: 12pt;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		page-break-after: avoid;
	}

	p
	{
		mc-hyphenate: never;
		font-family: "Open Sans", sans-serif, Regular;
		color: #000000;
		list-style: ;
		list-style-type: square;
		display: block;
	}

	MadCap|dropDown
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	tr
	{
		color: #000000;
	}

	a
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #5289ae;
	}

	span
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	a:link
	{
		color: #064a76;
	}

	p.Body_Lead-in
	{
		page-break-after: avoid;
	}

	p.Body
	{
		
	}

	MadCap|dropDownHotspot
	{
		font-size: 11pt;
		font-weight: bold;
		font-style: normal;
		color: #5289ae;
		font-family: "Open Sans", sans-serif, Regular;
	}

	MadCap|dropDownHotspot.h1
	{
		color: #f36f21;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 15pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		text-indent: 0px;
		page-break-after: avoid;
		line-height: 16pt;
	}

	MadCap|dropDownHotspot.h2
	{
		color: #000000;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		text-align: left;
		text-indent: 0px;
		margin-top: 15pt;
		margin-bottom: 6pt;
		line-height: 13pt;
		text-decoration: none;
		page-break-after: avoid;
	}

	MadCap|dropDownHotspot.h3
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		color: #5289ae;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		page-break-after: avoid;
	}

	MadCap|dropDownHotspot.h4
	{
		color: #515151;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		text-align: left;
		text-indent: 0px;
		line-height: 12pt;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		page-break-after: avoid;
	}

	td.footer
	{
		color: #000000;
	}

	td
	{
		color: #000000;
	}

	tbody
	{
		color: #000000;
	}

	caption
	{
		color: #000000;
	}

	table
	{
		color: #000000;
	}

	col
	{
		color: #000000;
	}

	colgroup
	{
		color: #000000;
	}

	tfoot
	{
		color: #000000;
	}

	thead
	{
		color: #000000;
	}

	th
	{
		color: #000000;
	}

	p.Bullet_in_Steps
	{
		mc-auto-number-position: outside-head;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_2_in_Steps
	{
		mc-auto-number-position: outside-head;
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_1
	{
		mc-auto-number-position: outside-head;
		list-style-type: square;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Appendix_Number
	{
		mc-auto-number-format: 'Appendix {chapnum}';
		text-align: right;
		margin-top: 10pt;
		margin-bottom: 14pt;
		line-height: 6pt;
		font-size: 14pt;
		font-weight: bold;
		font-style: normal;
		color: #ffffff;
	}

	p.Appendix_Title
	{
		font-size: 14pt;
		font-weight: bold;
		font-style: normal;
		font-family: 'Open Sans';
		color: #ffffff;
		text-align: right;
		margin-top: 0;
		margin-bottom: 40pt;
		line-height: 16pt;
		mc-heading-level: 1;
	}

	p.zIconCaution
	{
		background-image: url('../../Common Files/graphics/aruba_caution.png');
	}

	p.zIconNote
	{
		background-image: url('../../Common Files/graphics/aruba_note.png');
	}

	p.Table_Bullet2
	{
		margin-left: 0.40in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		line-height: 10pt;
		font-size: 9pt;
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_2
	{
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Table_Bullet
	{
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_in_Sub-Steps
	{
		mc-auto-number-format: ' ';
	}

	span.Bullet
	{
		font-size: 7pt;
	}

	span.Bullet2
	{
		font-size: 7pt;
	}

	span.Red
	{
		font-weight: bold;
		background-color: #fcf358;
	}

	div.GlossaryPageDefinition
	{
		font-size: 10pt;
		font-family: "Open Sans", sans-serif;
		color: #000000;
		margin-left: 0pt;
		margin-bottom: 6pt;
		margin-top: 6pt;
		color: #000000;
		mc-hyphenate: never;
		line-height: 13pt;
	}

	div.GlossaryPageEntry
	{
		
	}

	div.GlossaryPageHeading
	{
		font-family: 'Open Sans';
		font-size: 10pt;
		color: #000000;
	}

	div.GlossaryPageTerm
	{
		font-size: 9pt;
		color: #000000;
		font-family: 'Open Sans';
		font: Open Sans;
	}

	MadCap|xref
	{
		mc-format: '{paratext}';
		color: #064a76;
	}

	img
	{
		mc-thumbnail-max-height: auto;
		mc-thumbnail: popup;
		mc-thumbnail-max-width: 300px;
	}

	p.Doc_Type
	{
		font-size: 36pt;
	}

	p.TOC_Title
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	.accordion
	{
		color: #5289ae;
		font-family: 'Open Sans';
		font-size: 11pt;
		line-height: 12pt;
		font-weight: bold;
		margin-bottom: 6pt;
		margin-top: 12pt;
	}

	.panelheader
	{
		color: #5289ae;
		font-size: 11pt;
		font-family: 'Open Sans';
		line-height: 12pt;
		font-weight: bold;
		margin-bottom: 6pt;
		margin-top: 12pt;
	}

	p
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 4pt;
		margin-bottom: 2pt;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	h1
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 0pt;
		letter-spacing: 0em;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #ffffff;
	}

	h2
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 15pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 14pt;
		letter-spacing: 0em;
		color: #ff8300;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h3
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h4
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #5289ae;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	p.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	div.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	div.screen &gt; p
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		color: #000000;
	}

	caption
	{
		text-align: left;
		margin-bottom: 4pt;
		line-height: 15pt;
	}

	.dt
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	.dl
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	dt
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	dl
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	.dlentry
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	/*

	ul
	{
		margin-bottom: 5px;
		margin-top: 10px;
		margin-left: 10px;
		font-size: 10pt;
	}

	li
	{
		font-family: 'Open Sans', sans-serif;
		line-height: 14pt;
		padding-top: 2px;
		padding-bottom: 2px;
		margin: 5px;
		margin-left: 5px;
		margin-bottom: 0px;
		margin-top: 0px;
		font-size: 10pt;
	}

*/

	ol
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		line-height: 13pt;
		text-decoration: none;
	}

	ul
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		margin-left: 15pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		line-height: 13pt;
		text-decoration: none;
	}

	ul &gt; li
	{
		margin: 5pt 0pt 5pt 0pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		list-style-type: square;
	}

	ul &gt; li &gt; ul
	{
		margin-left: 34pt;
	}

	ul &gt; li &gt; ul &gt; li
	{
		margin-top: 5pt;
		margin-bottom: 5pt;
		margin-left: -20pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		list-style-type: disc;
	}

	ul &gt; li &gt; ul &gt; li &gt; ul &gt; li
	{
		margin-top: 5pt;
		margin-bottom: 5pt;
		margin-left: -20pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		list-style-type: circle;
	}

	ol &gt; li
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ol &gt; li &gt; ol &gt; li
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ul &gt; li &gt; p
	{
		margin-left: 0pt;
	}

	ul.menu,
	ul.menu ul,
	ul.menu li
	{
		text-indent: 0pt;
	}

	.tabletitle
	{
		mc-auto-number-format: 'Table {Gn+}: ';
		font-family: "Open Sans", sans-serif;
		font-style: normal;
		font-size: 9pt;
		font-weight: bold;
		color: #000000;
		line-height: 11pt;
		text-align: left;
	}

	.tabletitletext
	{
		font-family: "Open Sans", sans-serif;
		font-style: italic;
		font-size: 9pt;
		color: #000000;
		line-height: 11pt;
		text-align: left;
	}

	div.note
	{
		width: 108%;
		text-align: center;
		margin-left: -0.65in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 110px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.note &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes
	{
		width: 108%;
		text-align: center;
		margin-left: -0.65in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 30pt;
		padding-left: 30pt;
		padding-bottom: 30pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 110px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.notes p
	{
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:first-child
	{
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:nth-last-child(2)
	{
		padding-bottom: 0pt;
		margin-bottom: 0px;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		border-bottom: solid 1px #000000;
		vertical-align: middle;
	}

	div.caution
	{
		width: 97%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 20pt;
		margin-bottom: 20pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_caution.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.caution &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		vertical-align: middle;
	}

	div.warning
	{
		width: 97%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 20pt;
		margin-bottom: 20pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_warning.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.warning &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		vertical-align: middle;
	}

	code
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 14pt;
		text-decoration: none;
		white-space: pre;
	}
}

@media SmallBooklet
{
	p.Body
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Body_in_Bullet_Step
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Body_Lead-in
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Bullet_1
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Bullet_2
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Bullet_2_in_Steps
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Bullet_in_Steps
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Bullet_in_Sub-Steps
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Figure_Title
	{
		line-height: 11pt;
		font-size: 9pt;
		font-family: 'HelveticaNeueLT Std';
		column-break-after: avoid;
		page-break-after: avoid;
		font-style: normal;
		mc-auto-number-format: 'F:Figure {Gn+}: ';
	}

	p.Step_1st
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Step_1st_in_Bullet
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Step_Next
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Step_Next_in_Bullet
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Step_Sub_1st
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Step_Sub_Next
	{
		font-size: 10pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Body
	{
		font-size: 9pt;
		line-height: 10pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Body_in_Bullet_Step
	{
		font-size: 9pt;
		line-height: 10pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Bullet
	{
		line-height: 9pt;
		font-size: 9pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Heading
	{
		font-size: 9pt;
		line-height: 10pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Title
	{
		mc-auto-number-format: 'Table {Gn+}: ';
		font-style: normal;
		font-size: 9pt;
		line-height: 11pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.zWarningText
	{
		font-size: 9pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	p.zTextNote
	{
		font-size: 9pt;
		line-height: 13pt;
		font-family: 'Open Sans', sans-serif;
	}

	p.zCautionText
	{
		font-size: 9pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	h1._1Heading
	{
		margin-top: 12pt;
		color: #0096d6;
		mc-heading-level: 2;
		font-size: 15pt;
		line-height: 16pt;
		font-family: 'HelveticaNeueLT Std';
	}

	h2._2Heading
	{
		margin-top: 12pt;
		page-break-after: avoid;
		mc-heading-level: 0;
		font-size: 12pt;
		line-height: 13pt;
		font-family: 'HelveticaNeueLT Std';
	}

	h3._3Heading
	{
		page-break-after: avoid;
		mc-heading-level: 0;
		color: #000000;
		font-size: 11pt;
		line-height: 12pt;
		font-family: 'HelveticaNeueLT Std';
	}

	img
	{
		mc-thumbnail-max-height: 4in;
		mc-thumbnail-max-width: 4in;
	}

	img.IG_Image
	{
		mc-thumbnail-max-height: 2in;
		mc-thumbnail-max-width: 2in;
		width: 3in;
		height: auto;
		display: table-caption;
		text-align: left;
	}

	h1
	{
		column-break-after: avoid;
		page-break-after: avoid;
	}

	MadCap|xref.Heading_And_Page__
	{
		color: #5289ae;
	}

	MadCap|xref.Heading_And_Page
	{
		color: #5289ae;
	}

	MadCap|xref.App____Title__And_Page__
	{
		color: #5289ae;
	}

	MadCap|xref.Chap____Title__And_Page__
	{
		color: #5289ae;
	}

	MadCap|xref.FigureNum
	{
		color: #5289ae;
	}

	MadCap|xref.Step___And_Page__
	{
		color: #5289ae;
	}

	MadCap|xref.Table_Figure___And_page__
	{
		color: #5289ae;
	}

	p.zIconNote
	{
		background-image: url('../../Common Files/graphics/aruba_note.png');
	}

	p.zIconCaution
	{
		background-image: url('../../Common Files/graphics/aruba_caution.png');
	}

	h1._1CmdHeading
	{
		color: #0096d6;
	}

	span.zTitleNo
	{
		font-size: 8pt;
		font-weight: bold;
		font-family: 'HelveticaNeueLT Standard';
	}

	MadCap|xref.Table_Figure_Only
	{
		color: #5289ae;
		mc-format: '{paranumonly}';
	}

	p.Chapter_Title
	{
		color: #ffffff;
		margin-top: 0;
		margin-bottom: 40pt;
		font-size: 16pt;
		font-family: 'HelveticaNeueLT Std';
		mc-heading-level: 1;
	}

	p.Chapter_Number
	{
		line-height: 14pt;
		margin-top: 10pt;
		margin-bottom: 6pt;
		font-size: 16pt;
		font-family: 'HelveticaNeueLT Std';
		mc-auto-number-format: '{ }';
	}

	p.Doc_Title
	{
		font-family: 'HelveticaNeueLT Std';
		font-weight: bold;
		font-style: normal;
		font-size: 36pt;
		color: #000000;
		mc-hyphenate: never;
	}

	p.Doc_Type
	{
		font-family: 'HelveticaNeueLT Std';
		font-weight: bold;
		font-style: normal;
	}

	p.TOC1
	{
		color: #1e90ff;
		font-family: 'HelveticaNeueLT Standard';
	}

	p.TOC2
	{
		font-family: 'HelveticaNeueLT Standard';
		font-weight: normal;
		font-style: normal;
	}

	p.TOC3
	{
		font-family: 'HelveticaNeueLT Standard';
		font-size: 10pt;
		color: #000000;
	}

	p.TOC4
	{
		font-family: 'HelveticaNeueLT Standard';
		color: #000000;
		font-size: 9pt;
	}

	h4._4Heading
	{
		color: #000000;
		mc-heading-level: 0;
		font-size: 10pt;
		font-family: 'HelveticaNeueLT Std';
	}

	h4
	{
		mc-heading-level: 0;
		font-family: 'HelveticaNeueLT Std';
	}

	h5
	{
		mc-heading-level: 0;
		font-size: 9pt;
		line-height: 10px;
		font-weight: bold;
		font-family: 'HelveticaNeueLT Std';
	}

	h2
	{
		color: #000000;
		font-family: 'HelveticaNeueLT Std';
	}

	p.TOC5
	{
		color: #000000;
	}

	p.TOC6
	{
		color: #000000;
	}

	a:link
	{
		color: #5289ae;
		text-decoration: none;
	}

	MadCap|xref:focus
	{
		color: #5289ae;
	}

	MadCap|xref:hover
	{
		color: #5289ae;
	}

	MadCap|relatedTopics:focus
	{
		color: #5289ae;
	}

	MadCap|relatedTopics:hover
	{
		color: #5289ae;
	}

	MadCap|xref
	{
		color: #5289ae;
		text-decoration: none;
	}

	caption
	{
		
	}

	table
	{
		
	}

	col
	{
		mc-caption-continuation: ' ';
	}

	colgroup
	{
		
	}

	p.Table_Bullet2
	{
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Step_1st
	{
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Step_Next
	{
		font-family: 'HelveticaNeueLT Std';
	}

	p.Table_Note
	{
		font-family: 'HelveticaNeueLT Std';
	}

	span.Navigation
	{
		
	}

	p
	{
		font-family: 'HelveticaNeueLT Std';
	}

	p.zIconWarning
	{
		background-image: url('../../Common Files/graphics/aruba_warning.png');
	}

	img.IG_Image
	{
		mc-thumbnail-max-height: auto;
		mc-thumbnail: popup;
		mc-thumbnail-max-width: 300px;
		width: 412px;
		height: 133px;
	}

	h5
	{
		mc-heading-level: 0;
	}

	h6
	{
		mc-heading-level: 0;
	}

	p.Table_Bullet2
	{
		mc-auto-number-class: Bullet;
		margin-left: 0.40in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		line-height: 10pt;
		font-size: 9pt;
		font-family: 'Open Sans';
	}

	MadCap|topicToolbarProxy
	{
		text-align: right;
	}

	a
	{
		color: #064a76;
	}

	a:link
	{
		color: #064a76;
	}

	a:active
	{
		color: #064a76;
	}

	MadCap|xref.Heading_And_Page
	{
		color: #5289ae;
	}

	MadCap|xref.FigureNum
	{
		color: #5289ae;
	}

	MadCap|xref.Table_Figure_Only
	{
		color: #5289ae;
	}

	MadCap|searchResultsProxy
	{
		mc-disable-glossary-terms: true;
	}

	img.FullWidth
	{
		max-width: 100%;
	}

	ul
	{
		font-size: 10pt;
		font-family: 'Open Sans';
		margin-bottom: 5px;
		margin-left: 10px;
		margin-top: 10px;
	}

	li
	{
		font-family: 'Open Sans';
		line-height: 14pt;
		font-size: 10pt;
		padding-top: 2px;
		padding-bottom: 2px;
		margin-left: 5px;
	}

	div.sideContent
	{
		display: inline-block;
	}

	div.mainContent
	{
		display: inline-block;
	}
}

code
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 14pt;
	text-decoration: none;
	white-space: pre;
}

div.warning &gt; p
{
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	vertical-align: middle;
}

div.warning
{
	width: 97%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 20pt;
	margin-bottom: 20pt;
	padding-left: 30pt;
	padding-bottom: 20pt;
	padding-top: 20pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_warning.png');
	background-size: 40px 40px;
	background-position: left center;
}

div.caution &gt; p
{
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	vertical-align: middle;
}

div.caution
{
	width: 97%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 20pt;
	margin-bottom: 20pt;
	padding-left: 30pt;
	padding-bottom: 20pt;
	padding-top: 20pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_caution.png');
	background-size: 40px 40px;
	background-position: left center;
}

div.notes p:last-of-type
{
	border-bottom: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	margin-bottom: 10px;
	color: #515151;
	font-size: 9pt;
	vertical-align: middle;
}

div.notes p:first-child
{
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	font-size: 9pt;
	vertical-align: middle;
}

div.notes p
{
	margin-left: 20pt;
	color: #515151;
	font-size: 9pt;
	vertical-align: middle;
}

div.notes
{
	width: 88%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	padding-left: 30pt;
	padding-bottom: 0pt;
	padding-top: 0pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_note.png');
	background-size: 34px 42px;
	background-position: left center;
}

div.note &gt; p
{
	border-bottom: solid 1px #000000;
	border-top: solid 1px #000000;
	padding-bottom: 0pt;
	padding-top: 0pt;
	margin-left: 20pt;
	color: #515151;
	vertical-align: middle;
}

div.note
{
	width: 88%;
	text-align: center;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 0pt;
	margin-bottom: 0pt;
	padding-left: 30pt;
	padding-bottom: 0pt;
	padding-top: 0pt;
	font-family: 'Open Sans';
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 24pt;
	text-decoration: none;
	min-height: 70px;
	background-repeat: no-repeat;
	background-image: url('../../Common Files/graphics/aruba_note.png');
	background-size: 34px 42px;
	background-position: left center;
}

.tabletitletext
{
	font-family: "Open Sans", sans-serif;
	font-style: italic;
	font-size: 9pt;
	color: #000000;
	line-height: 11pt;
	text-align: left;
}

.tabletitle
{
	mc-auto-number-format: 'Table {Gn+}: ';
	font-family: "Open Sans", sans-serif;
	font-style: normal;
	font-size: 9pt;
	font-weight: bold;
	color: #000000;
	line-height: 11pt;
	text-align: left;
}

ul.menu,
ul.menu ul,
ul.menu li
{
	text-indent: 0pt;
}

ul &gt; li &gt; p
{
	margin-left: 0pt;
}

ol &gt; li &gt; ol &gt; li &gt; ol &gt; li
{
	margin: 5pt 0pt 5pt -30pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	list-style-type: lower-roman;
}

ol &gt; li &gt; ol &gt; li
{
	margin: 5pt 0pt 5pt -25pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	list-style-type: lower-alpha;
}

ol &gt; li &gt; ol
{
	margin: 5pt 0pt 5pt 15pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
}

ol &gt; li
{
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
}

ul &gt; li &gt; ul &gt; li &gt; ul &gt; li
{
	margin-top: 4pt;
	margin-left: -20pt;
	padding-top: 0;
	padding-bottom: 0;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0pt;
	list-style-type: disc;
}

ul &gt; li &gt; ul &gt; li
{
	margin-top: 4pt;
	margin-left: -20pt;
	padding-top: 0;
	padding-bottom: 0;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0pt;
	list-style-type: circle;
}

ul &gt; li &gt; ul
{
	margin-left: 5pt;
}

ul &gt; li
{
	margin: 0pt;
	padding-top: 0;
	padding-bottom: 0;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	list-style-type: square;
}

ul
{
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	margin-left: -15pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0pt;
	line-height: 13pt;
	text-decoration: none;
}

ol
{
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	line-height: 13pt;
	text-decoration: none;
}

.dlentry
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

dl
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

dt
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 11pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

.dl
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

.dt
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 6pt;
	margin-bottom: 6pt;
	font-family: "Open Sans", sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 11pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

caption
{
	text-align: left;
	margin-bottom: 4pt;
	line-height: 15pt;
}

.figtitle
{
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	font-style: italic;
	text-align: left;
}

div.screen &gt; p
{
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
	color: #000000;
}

div.screen
{
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
	background-color: #eeeeee;
	margin: 10pt;
	padding: 10pt;
	color: #000000;
}

p.screen
{
	font-family: 'Courier New';
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 10pt;
	text-decoration: none;
	white-space: pre;
	word-wrap: break-word;
	background-color: #eeeeee;
	margin: 10pt;
	padding: 10pt;
	color: #000000;
}

h4
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 10pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #515151;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 12pt;
	text-decoration: none;
	mc-next-tag: p;
}

h3
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 12pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 11pt;
	letter-spacing: 0em;
	color: #5289ae;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 12pt;
	text-decoration: none;
	mc-next-tag: p;
}

h2
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 15pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 14pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
	mc-next-tag: p;
}

h1
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 23pt;
	margin-bottom: 6pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;
	font-style: normal;
	font-size: 18pt;
	letter-spacing: 0em;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 16pt;
	text-decoration: none;
	mc-next-tag: p;
	color: #f36f21;
}

p
{
	text-align: left;
	margin-left: 0in;
	margin-right: 0in;
	margin-top: 4pt;
	margin-bottom: 2pt;
	font-family: "Open Sans", sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 10pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	text-indent: 0px;
	line-height: 13pt;
	text-decoration: none;
}

p.hidden
{
	display: none;
}

button.tablinks
{
	border-bottom-length: 2px;
	border-bottom-style: solid;
	border-bottom-color: #02a7ec;
	margin-left: 20px;
	margin-right: 20px;
	background-color: transparent;
	color: #000000;
	margin-top: 5px;
	padding-top: 5px;
}

div.rightContent
{
	float: right;
	background-color: transparent;
	clear: right;
	margin-left: 0px;
	margin-top: 2px;
	margin-bottom: 2px;
	padding-bottom: 5px;
	margin-right: 0;
	padding-top: 0px;
	width: 30%;
}

div.introPage
{
	width: 100%;
	min-height: 1000px;
	position: relative;
	float: left;
	padding: 0px;
	border-left-color: #cccccc;
	padding-left: 5px;
	border-top-width: 2px;
	background-color: #ffffff;
	margin-left: 5px;
	margin-right: 5px;
	border-top: solid 1px #c3c5c8;
	padding-right: 10px;
	border-left: none 1px #c3c5c8;
	border-right: none 1px #c3c5c8;
	padding-bottom: 0px;
	margin-bottom: 0px;
	height: 100%;
	margin-top: 0px;
	padding-top: 45px;
}

MadCap|dropDownHotspot.chklst_h1
{
	font-weight: bold;
	color: #02a7ec;
}

MadCap|dropDownHead.chk_h1
{
	font-weight: bold;
	mc-image-position: right;
	mc-image-spacing: 5px;
	color: #02a7ec;
	line-height: 16pt;
}

MadCap|expandingHead
{
	mc-closed-image: url('../Images/icon_bullet.png');
	mc-open-image: none;
}

MadCap|expanding
{
	mc-closed-image: url('../Images/icon_bullet.png');
}

MadCap|toggler
{
	mc-open-image: none;
	mc-closed-image: none;
	color: #000000;
}

p.cklstBody
{
	mc-disable-glossary-terms: true;
	line-height: 20px;
	margin-bottom: 10px;
	font-size: 10pt;
	text-align: left;
	margin-top: 5px;
	font-family: 'Open Sans', sans-serif;
}

p.cklstHead
{
	font-family: 'Open Sans', sans-serif, Regular;
	font-style: normal;
	line-height: 18pt;
	text-align: left;
	border-bottom: none 0px #000000;
	color: #02a7ec;
	font-weight: bold;
	margin-bottom: 5px;
	font-size: 11pt;
	padding-top: 2px;
	padding-bottom: 2px;
	margin-top: 5px;
}

div.cklstBlk
{
	padding-left: 10px;
	position: relative;
	padding-right: 5px;
	margin-right: 5px;
	color: #000000;
	padding-top: 5px;
	background-color: transparent;
	border: solid 1px #ffffff;
	border-bottom-color: #cccccc;
	border-right-color: #cccccc;
	margin-left: 2px;
	border-top-color: #cccccc;
	border-top-width: 1px;
	border-left-width: 2px;
	height: auto;
	margin-top: 5px;
	float: left;
	margin-bottom: 5px;
	width: 70%;
	padding-bottom: 10px;
	border-left-color: #02a7ec;
}

div.containerCklst
{
	height: 100%;
	max-width: 1200px;
	margin: 0 auto;
	overflow: hidden;
	clear: both;
	padding-top: 30px;
	padding: 10px 0px 60px;
	padding-bottom: 20px;
	border: none 2px #cccccc;
	margin-left: 5em;
	margin-bottom: 20px;
}

img.FullWidth
{
	
}

a:link
{
	color: #5289ae;
	text-decoration: underline;
}

a:focus
{
	text-decoration: underline;
	color: #02a7ec;
}

a:hover
{
	color: #5289ae;
}

.modal &gt; a:hover
{
	border: 1px solid #ccccc;
	color: #000000;
}

a:active
{
	color: #5289ae;
}

div.GlossaryPageTerm
{
	color: #000000;
}

div.GlossaryPageHeading
{
	color: #000000;
}

div.GlossaryPageEntry
{
	color: #000000;
}

div.GlossaryPageDefinition
{
	color: #000000;
}

MadCap|xref.Table_Figure_Only
{
	color: #5289ae;
}

MadCap|xref.Heading_And_Page
{
	color: #5289ae;
}

MadCap|xref.FigureNum
{
	color: #5289ae;
}

table
{
	
}

span.zTitleNo
{
	mc-disable-glossary-terms: true;
}

span.Superscript
{
	mc-disable-glossary-terms: true;
}

span.Subscript
{
	mc-disable-glossary-terms: true;
}

span.PMS_646
{
	mc-disable-glossary-terms: true;
}

span.PMS_144
{
	mc-disable-glossary-terms: true;
}

span.Navigation
{
	mc-disable-glossary-terms: true;
}

span.Emphasis
{
	mc-disable-glossary-terms: true;
}

span.Cool_Grey_9
{
	mc-disable-glossary-terms: true;
}

span.Cool_Grey_11
{
	mc-disable-glossary-terms: true;
}

span.CLI_Bold
{
	mc-disable-glossary-terms: true;
}

span.CLI
{
	mc-disable-glossary-terms: true;
}

span
{
	mc-disable-glossary-terms: true;
}

p.TOC_Title
{
	mc-disable-glossary-terms: true;
}

p.Doc_Type
{
	mc-disable-glossary-terms: true;
}

p.Doc_Title_single_pdf
{
	mc-disable-glossary-terms: true;
}

p.Appendix_Number
{
	mc-disable-glossary-terms: true;
}

MadCap|xref.App____Title__And_Page__
{
	mc-disable-glossary-terms: true;
	color: #5289ae;
}

img
{
	mc-disable-glossary-terms: true;
}

div.mainContent
{
	mc-disable-glossary-terms: true;
	position: relative;
	height: 100%;
	min-height: 1000px;
	background-color: #ffffff;
	padding-top: 2px;
	border-top: none 1px #646569;
	border-right: none 1px #ededeb;
	margin-left: 0px;
	float: right;
	margin-right: 5px;
	padding-right: 10px;
	padding-left: 10px;
	border-left: solid 1px #cccccc;
	width: 76%;
}

div.button-group
{
	mc-disable-glossary-terms: true;
}

caption
{
	mc-disable-glossary-terms: true;
}

button.active
{
	mc-disable-glossary-terms: true;
}

button
{
	mc-disable-glossary-terms: true;
	margin-top: 0px;
	padding-top: 0px;
}

html.templateTopic div.sideContent
{
	mc-disable-glossary-terms: true;
}

.right-section div.button-group
{
	mc-disable-glossary-terms: true;
}

.mc-blurb
{
	mc-disable-glossary-terms: true;
}

p.zTextCaution
{
	font-family: 'Open Sans', sans-serif;
}

#contentBody
{
	width: 100%;
	mc-disable-glossary-terms: true;
	position: relative;
	float: none;
	padding-top: 55px;
	padding-bottom: 0px;
	margin-bottom: 0px;
}

div.sideContent
{
	mc-disable-glossary-terms: true;
	position: relative;
	min-height: 1000px;
	height: 100%;
	float: left;
	margin-right: 0px;
	margin-left: 0px;
	padding-bottom: 0px;
	margin-bottom: 0px;
	margin-top: 0px;
	border-right-width: 1px;
	border-left-color: #ededeb;
	clear: none;
	padding-top: 0px;
	background-color: transparent;
	border-right-color: #c3c5c8;
	border-right: solid 1px #c3c5c8;
	padding-left: 0px;
	padding-right: 5px;
	border-left: none 1px #c3c5c8;
	border-right-style: none;
	width: 22%;
}

div.header
{
	background-image: none;
	width: 100%;
	mc-disable-glossary-terms: true;
	padding-bottom: 5px;
	margin-left: 0px;
	margin-right: 0px;
	padding-left: 0px;
	padding-right: 0px;
	border-left-width: 1px;
	border-color: #c3c5c8;
	border-right-width: 1px;
	border-left-style: none;
	border-right-style: none;
	border-top: none 1px #cccccc;
	position: fixed;
	z-index: 8;
	margin-top: ;
	border-bottom: solid 1px #ffffff;
	height: 3em;
	padding-top: 5px;
	background-color: #ededeb;
}

.feedback_link
{
	font-family: 'Open Sans', sans-serif;
	text-decoration: underline;
	font-size: 11pt;
	color: #000000;
	mc-disable-glossary-terms: true;
}

div.feedback_no
{
	display: none;
	border-color: #d6e9c6;
	font-family: 'Open Sans';
	font-size: 13pt;
	padding-left: 5px;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-top: 10px;
	margin-bottom: 5px;
	color: #000000;
	mc-disable-glossary-terms: true;
	background-color: #ededeb;
}

div.feedback_yes
{
	margin-top: 10px;
	margin-bottom: 5px;
	display: none;
	font-family: 'Open Sans';
	padding-left: 5px;
	padding-right: 0px;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 14pt;
	color: #000000;
	mc-disable-glossary-terms: true;
	background-color: #ededeb;
}

.modal__wrap
{
	padding: 1em;
	position: relative;
	vertical-align: middle;
	max-width: 500px;
	width: 20%;
	background: #f6f6f6;
	margin-bottom: 100px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
	border-radius: 10px;
	mc-disable-glossary-terms: true;
}

.modal__overlay
{
	background: rgba(0,0,0,0.4);
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	text-align: center;
	text-shadow: none;
	top: 0;
	z-index: 600;
	justify-content: center;
	align-items: flex-end;
	mc-disable-glossary-terms: true;
}

.modal a
{
	background: #f6f6f6;
	border: 1px solid #cccccc;
	border-radius: .2em;
	color: #000000;
	cursor: pointer;
	display: inline-block;
	font-weight: normal;
	font-variant: normal;
	text-decoration: none;
	font-size: 13pt;
	font-family: 'Open Sans', sans-serif;
	padding: 0.5em 0.8em;
	margin: 0.5em 0.5em 0.5em .2em;
	text-shadow: 1px 1px 1px #fff;
}

.modal &gt; label:hover
{
	border: 1px solid #cccccc;
	color: #000000;
}

.modal &gt; label
{
	background: #f6f6f6;
	border: 1px solid #cccccc;
	border-radius: .2em;
	color: #01a982;
	cursor: pointer;
	display: inline-block;
	font-weight: normal;
	font-variant: normal;
	font-size: 13pt;
	font-family: 'Open Sans', sans-serif;
	padding: 0.5em 0.8em;
	text-shadow: 1px 1px 1px #fff;
}

.question
{
	color: #000000;
	font-size: 11pt;
	padding: 0.3em -3em;
	font-family: 'Open Sans', sans-serif;
}

.modal
{
	background: rgba(236,236,236,0);
	display: inline-block;
	width: auto;
	text-align: center;
	font-family: 'Open Sans', sans-serif;
	mc-disable-glossary-terms: true;
	padding-top: 20px;
	padding-bottom: 10px;
	margin-bottom: 20px;
}

div.footer
{
	padding-bottom: 20px;
	display: block;
	mc-disable-glossary-terms: true;
	padding-top: 10px;
	margin-top: 0px;
	background-color: #cccccc;
	border-top: solid 2px #cccccc;
	width: 100%;
	margin-right: 0px;
	margin-left: 0px;
}

span.Red
{
	background-color: #faf7b7;
	font-weight: bold;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownHotspot.h4
{
	font-size: 11pt;
	line-height: 10pt;
	margin-top: 5pt;
	padding-bottom: 5px;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownHotspot.h3
{
	font-size: 11pt;
	line-height: 10pt;
	margin-top: 5pt;
	padding-bottom: 5px;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownHotspot.h1
{
	padding-bottom: 5px;
	font-size: 11pt;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownHotspot.h2
{
	line-height: 10pt;
	margin-top: 5pt;
	padding-bottom: 5px;
	font-size: 11pt;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

.tabcontent
{
	display: none;
	padding-bottom: 10px;
	border-bottom-color: transparent;
	border: none 0px transparent;
	padding: 5px 12px 5px 5px;
	mc-disable-glossary-terms: false;
}

div.tab button.active
{
	font-family: 'Open Sans';
	font-weight: bold;
	font-color: #02a7ec;
	border-bottom-style: solid;
	border-bottom-width: 2px;
	border-bottom-color: #02a7ec;
	padding: 25px 2px 3px 5px;
	mc-disable-glossary-terms: true;
}

div.tab button:hover
{
	color: #000000;
	font-family: 'Open Sans';
	border-bottom-color: #02a7ec;
	border-bottom: solid 2px;
	padding: 25px 2px 3px 5px;
	mc-disable-glossary-terms: true;
}

div.tab button
{
	outline: none;
	cursor: pointer;
	transition: 0.3s;
	font-family: 'Open Sans';
	font-weight: bold;
	font-color: #000000;
	border-color: transparent;
	font-size: 11pt;
	padding: 25px 2px 3px 5px;
	mc-disable-glossary-terms: true;
}

div.tab
{
	overflow: hidden;
	mc-disable-glossary-terms: true;
	padding-left: 0;
	margin-bottom: 5px;
	padding-bottom: 2px;
	margin-top: 0px;
	padding-top: 0px;
	height: ;
	margin-left: 5px;
	margin-right: 5px;
	border: none 1px #000000;
	border-bottom-style: solid;
	border-bottom-color: #c3c5c8;
}

MadCap|dropDownHead.h4
{
	margin-top: 5pt;
	line-height: 10pt;
	font-size: 11pt;
	padding-bottom: 5px;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownHead.h2
{
	margin-top: 5pt;
	line-height: 10pt;
	font-size: 11pt;
	padding-bottom: 5px;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownHead.h1
{
	margin-top: 5pt;
	line-height: 10pt;
	font-size: 11pt;
	padding-bottom: 5px;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownHead.h3
{
	margin-top: 5pt;
	line-height: 10pt;
	font-size: 11pt;
	padding-bottom: 5px;
	font-weight: normal;
	color: #064a76;
	mc-disable-glossary-terms: true;
}

span.Bullet2
{
	display: block;
	mc-disable-glossary-terms: true;
}

MadCap|keywordLink
{
	color: #064a76;
	font-family: "Open Sans", sans-serif, Regular;
}

MadCap|conceptLink
{
	color: #064a76;
	font-family: "Open Sans", sans-serif, Regular;
}

MadCap|searchResultsProxy
{
	color: #000000;
	font: Open Sans;
	font-family: 'Open Sans';
	line-height: 13pt;
	font-size: 9pt;
	mc-breadcrumbs-divider: ' ';
	mc-breadcrumbs-prefix: ' ';
	background-color: #ffffff;
	border-color: #a9a9a9;
	width: 30%;
	float: right;
	mc-disable-glossary-terms: true;
}

hr
{
	width: 100%;
	border: solid 1px #cccccc;
	height: 1px;
}

MadCap|topicToolbarProxy
{
	text-align: right;
	margin-top: 5px;
	padding-top: 5px;
}

MadCap|relatedTopics
{
	font: Open Sans;
	font-family: 'Open Sans';
	color: #064a76;
	mc-disable-glossary-terms: true;
}

span.Bullet
{
	color: #000000;
	list-style-type: circle;
	mc-disable-glossary-terms: true;
}

MadCap|breadcrumbsProxy
{
	font-size: 0.78em;
	font: Open Sans;
	mc-breadcrumbs-divider: ' &gt; ';
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
	font-style: normal;
	margin-top: 5px;
	padding-top: 2px;
	mc-breadcrumbs-prefix: 'You are here:  ';
	color: #008475;
	mc-breadcrumbs-count: 3;
}

a.MCBreadcrumbsLink
{
	font-family: "Open Sans", sans-serif, Regular;
	font-weight: normal;
	font-style: normal;
	text-decoration: none;
	mc-disable-glossary-terms: true;
}

#content-section.mc-blurb .mc-bullets &gt; li
{
	color: #5a5a5a;
	list-style-image: url('../Images/icon_bullet.png');
	font-size: 14px;
	margin-top: 8px;
	line-height: 1.6em;
}

#content-section.mc-blurb .mc-bullets
{
	margin-top: 10px;
	padding-left: 30px;
	padding-right: 10px;
}

#content-section.mc-blurb p
{
	margin-top: 0;
	margin-bottom: 5px;
}

#content-section .right-section .table-images:first-of-type
{
	margin-bottom: 20px;
}

.left-section .left-content,
.right-section .right-content
{
	height: 270px;
}

#content-section .right-section
{
	padding-left: 20px;
}

#content-section .left-section
{
	padding-right: 20px;
}

.right-section div.button-group,
.left-section div.button-group
{
	margin-top: 20px;
}

#content-section h3
{
	font-weight: normal;
}

#content-section
{
	background-color: #f5f5f5;
	mc-disable-glossary-terms: true;
	width: auto;
	border-top-color: #646569;
	border-top: none 0px #000000;
	position: relative;
	margin-top: 10px;
	padding-bottom: 0px;
	margin-bottom: 0px;
	padding-top: 75px;
}

#contentBody &gt; .responsive-header
{
	background-color: #f5f5f5;
}

p.Table_Bullet2
{
	margin-top: 2pt;
	margin-bottom: 2pt;
	line-height: 10pt;
	font-size: 9pt;
	margin-left: 0.4in;
	mc-auto-number-class: Bullet2;
	list-style: ;
	display: list-item;
	list-style-type: circle;
	mc-disable-glossary-terms: false;
}

MadCap|bodyProxy
{
	background-color: #ffffff;
	color: #000000;
	padding-left: 5px;
}

td
{
	font-family: "Open Sans", sans-serif, Regular;
	color: #000000;
}

td.footer
{
	
}

a
{
	color: #02a7ec;
}

tr
{
	
}

span.URL
{
	font-size: ;
	mc-disable-glossary-terms: true;
}

MadCap|dropDown
{
	font-size: 10pt;
	font-family: "Open Sans", sans-serif, Regular;
	margin-top: 5pt;
	color: #064a76;
	line-height: 10pt;
	padding-top: 2px;
	mc-open-image: url('../Images/icon_dropdown_open.png');
	mc-closed-image: url('../Images/icon_dropdown_close.png');
}

MadCap|dropDownHotspot
{
	font-family: "Open Sans", sans-serif, Regular;
	font-size: 11pt;
	color: #064a76;
	font-weight: normal;
	line-height: 10pt;
	mc-disable-glossary-terms: true;
}

MadCap|dropDownBody
{
	font-family: "Open Sans", sans-serif, Regular;
	color: #064a76;
}

p.TableFootnote
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

p.Anchor
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

MadCap|popupBody
{
	font-size: 9pt;
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
	color: #ffffff;
	background-color: #000000;
}

MadCap|popupHead
{
	color: #5289ae;
}

MadCap|dropDownHead
{
	font-family: "Open Sans", sans-serif, Regular;
	margin-top: 5pt;
	font-size: 11pt;
	font-weight: normal;
	color: #064a76;
	line-height: 10pt;
	mc-disable-glossary-terms: true;
	mc-closed-image: none;
}

p.Table_Title
{
	mc-auto-number-format: 'Table {n+}: ';
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

MadCap|xref.Step___And_Page__
{
	mc-format: 'step {paranumonly}';
	color: #5289ae;
}

MadCap|xref.Table_Figure___And_page__
{
	mc-format: '{paranumonly}';
	color: #5289ae;
}

MadCap|xref.Chap____Title__And_Page__
{
	mc-format: '{paratext}';
	mc-disable-glossary-terms: true;
	color: #5289ae;
	mc-help-control-display: popup;
}

MadCap|xref.Heading_And_Page__
{
	color: #5289ae;
	mc-format: '{paratext}';
}

tbody
{
	font-size: 9pt;
	font-family: "Open Sans", sans-serif, Regular;
}

p
{
	font-size: 10pt;
	font-family: "Open Sans", sans-serif, Regular;
	color: #000000;
}

body
{
	font-family: "Open Sans", sans-serif, Regular;
	border-bottom: none 0px #000000;
	border-top: solid 0px #ededeb;
	background-color: #ffffff;
}

a.GlossaryPageTerm:link
{
	
}

a.GlossaryPageTerm:focus
{
	
}

a.GlossaryPageTerm:hover
{
	
}

a.GlossaryPageTerm:active
{
	font-style: inherit;
}

MadCap|glossaryTerm.Hyperlink
{
	
}

MadCap|glossaryTerm.Expanding
{
	
}

a.Popup
{
	color: #ffffff;
	background-color: #000000;
}

a.GlossaryPageTerm
{
	mc-hyphenate: never;
	font-family: 'Open Sans', sans-serif;
	mc-disable-glossary-terms: true;
	color: #5289ae;
	mc-closed-image: none;
	mc-image: none;
	mc-open-image: none;
}

MadCap|glossaryTerm
{
	font-family: 'Open Sans', sans-serif;
	mc-closed-image: none;
	mc-open-image: none;
	font-weight: inherit;
	mc-image-position: none;
	mc-hyphenate: never;
	text-decoration: none;
	mc-term-display: popup;
	mc-disable-glossary-terms: true;
	color: #02a7ec;
}

MadCap|xref.ListOfPageNumber
{
	font-family: "Open Sans", sans-serif, Regular;
}

MadCap|xref.ConceptPageNumber
{
	font-family: "Open Sans", sans-serif, Regular;
	color: #5289ae;
}

MadCap|xref.IndexPageNumber
{
	font-family: "Open Sans", sans-serif, Regular;
	color: #5289ae;
}

MadCap|xref.TOCPageNumber
{
	font-family: "Open Sans", sans-serif, Regular;
}

MadCap|xref
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
	color: #5289ae;
	text-decoration: underline;
}

h4._4Heading
{
	font-family: "Open Sans", sans-serif, Regular;
	font-weight: bold;
}

h3._3Heading
{
	font-family: "Open Sans", sans-serif, Regular;
	font-weight: bold;
	color: #000000;
}

h2._2Heading
{
	font-family: "Open Sans", sans-serif, Regular;
	font-weight: bold;
}

h1._1Heading
{
	font-family: "Open Sans", sans-serif, Regular;
	color: #000000;
	margin-top: 5pt;
	margin-bottom: 10pt;
	line-height: 19pt;
	font-size: 18pt;
	font-weight: normal;
	mc-disable-glossary-terms: true;
	border-bottom-width: 1px;
	border-bottom-color: #cccccc;
	border-top-width: 1px;
	border-top-color: #cccccc;
	padding-bottom: 10px;
	padding-top: 10px;
	border-bottom-style: solid;
	border-top-style: none;
}

h1._1CmdHeading
{
	color: #f36f21;
	font-family: "Open Sans", sans-serif, Regular;
}

p.zWarningText
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.zTextNote
{
	font-family: 'Open Sans', sans-serif;
}

p.zIconWarning
{
	font-family: "Open Sans", sans-serif, Regular;
	background-image: url('../../Common Files/graphics/aruba_warning.png');
}

p.zIconNote
{
	font-family: 'Open Sans', sans-serif, Regular;
	background-image: url('../../Common Files/graphics/aruba_note.png');
}

p.zIconCaution
{
	font-family: "Open Sans", sans-serif, Regular;
	background-image: url('../../Common Files/graphics/aruba_caution.png');
}

p.zCautionText
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.URL
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

p.TOC6
{
	font-family: 'Open Sans';
}

p.TOC5
{
	font-family: 'Open Sans';
}

p.TOC4
{
	font-family: 'Open Sans';
}

p.TOC3
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.TOC2
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.TOC1
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Table_Step_Next
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: false;
}

p.Table_Step_1st
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: false;
}

p.Table_Note
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: false;
}

p.Table_Heading
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

p.Table_Bullet
{
	font-family: "Open Sans", sans-serif, Regular;
	display: list-item;
	list-style: ;
	list-style-type: square;
	mc-disable-glossary-terms: false;
}

p.Table_Body_in_Bullet_Step
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: false;
}

p.Table_Body
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: false;
}

p.Step_Sub_Next
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Step_Sub_1st
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Step_Next_in_Bullet
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Step_Next
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Step_1st_in_Bullet
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Step_1st
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.footerHead
{
	font-family: 'Open Sans', sans-serif;
	color: #646569;
	padding-bottom: 10px;
	padding-left: 0px;
	padding-right: 10px;
	padding-top: 10px;
	font-size: 11pt;
	font-weight: bold;
	mc-disable-glossary-terms: true;
	line-height: 16pt;
}

p.slideHead
{
	font-family: 'Open Sans', sans-serif;
	color: #ffffff;
	line-height: 16pt;
	padding-bottom: 20px;
	padding-left: 20px;
	padding-right: 10px;
	padding-top: 10px;
	font-size: 10pt;
	font-weight: bold;
	mc-disable-glossary-terms: true;
}

p.Output
{
	font-family: monospace;
	mc-disable-glossary-terms: true;
}

p.Index9
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index8
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index7
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index6
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index5
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index4
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index3
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index2
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Index1
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Footnote
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

p.Figure_Title
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

p.Doc_Title
{
	mc-hyphenate: never;
	font-family: "Open Sans", sans-serif, Regular;
	mc-disable-glossary-terms: true;
}

p.ConceptContext
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Concept
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.CLI_Indented_3
{
	color: #000000;
	font-family: 'Courier New';
	font-size: 9pt;
	font-style: normal;
	font-weight: normal;
	letter-spacing: 0em;
	line-height: 10pt;
	margin-bottom: 2pt;
	margin-left: 0.6in;
	margin-right: 0in;
	margin-top: 2pt;
	text-align: left;
	text-decoration: none;
	text-indent: 0px;
	white-space: pre;
}

p.CLI_Indented_2
{
	color: #000000;
	font-size: 9pt;
	font-family: 'Courier New';
	font-style: normal;
	font-weight: normal;
	letter-spacing: 0em;
	line-height: 10pt;
	margin-bottom: 2pt;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 2pt;
	text-align: left;
	text-decoration: none;
	text-indent: 0px;
	white-space: pre;
}

p.CLI_Indented
{
	font-family: monospace;
	mc-disable-glossary-terms: true;
}

p.CLI
{
	font-family: monospace;
	mc-disable-glossary-terms: true;
}

p.Chapter_Title
{
	margin-bottom: 7px;
	font-family: "Open Sans", sans-serif, Regular;
	color: #000000;
	margin-top: 5pt;
	font-size: 18pt;
	font-weight: normal;
	border-bottom-color: #cccccc;
	border-bottom-width: 1px;
	padding-bottom: 10px;
	border-bottom-style: solid;
	padding-top: 10px;
	border-top: none 1px #cccccc;
}

p.Chapter_Number
{
	line-height: 4pt;
	font-family: "Open Sans", sans-serif, Regular;
	mc-auto-number-format: '{ }';
}

p.Callout
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Bullet_in_Sub-Steps
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-auto-number-position: inside-head;
	display: list-item;
	list-style: ;
	list-style-type: square;
}

p.Bullet_in_Steps
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-auto-number-position: inside-head;
	display: list-item;
	list-style: ;
	list-style-type: square;
}

p.Bullet_2_in_Steps
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-auto-number-position: inside-head;
	display: list-item;
	mc-auto-number-class: Bullet2;
	list-style: ;
	list-style-type: circle;
}

p.Bullet_2
{
	font-family: "Open Sans", sans-serif, Regular;
	mc-auto-number-position: inside-head;
	display: list-item;
	mc-auto-number-class: Bullet2;
	list-style: ;
	list-style-type: circle;
}

p.Bullet_1
{
	font-family: "Open Sans", sans-serif, Regular;
	display: list-item;
	list-style: ;
	list-style-type: square;
}

.footer a
{
	text-decoration: none;
	color: #646569;
	font-size: 10pt;
	line-height: 10pt;
}

p.Body_Lead-in
{
	page-break-after: avoid;
	font-family: "Open Sans", sans-serif, Regular;
}

p.Body_in_Sub-Bullet_Sub-Step
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.Body_in_Bullet_Step
{
	font-family: "Open Sans", sans-serif, Regular;
}

p.homeCardList
{
	margin-bottom: 12px;
	margin-top: 10pt;
	text-align: center;
	mc-disable-glossary-terms: true;
	font-size: 10pt;
	line-height: 23px;
}

div.CardBody
{
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 10px;
	padding-right: 10px;
}

div.CardContainer
{
	height: 100%;
	max-width: 1200px;
	overflow: hidden;
	width: 100%;
	clear: both;
	padding-left: 5px;
	padding-right: 5px;
	border: none 2px #cccccc;
	padding-top: 20px;
	padding-bottom: 10px;
	padding: 20px 0px;
	margin: 0 auto;
	margin-left: 5em;
	margin-right: 5em;
}

div.card
{
	padding-bottom: 10px;
	padding-left: 10px;
	border-top-style: solid;
	border-bottom-style: solid;
	float: left;
	position: relative;
	padding-right: 5px;
	padding-top: 10px;
	margin-right: 5px;
	border-left-color: #f6f6f7 #;
	border-right-color: #f6f6f7;
	border-right-style: solid;
	color: #000000;
	border-bottom-color: #c3c5c8;
	border-right: solid 3px #c3c5c8;
	border-right-width: 2px;
	border-left-width: 2px;
	border-left: solid 2px #c3c5c8;
	border-bottom-width: 2px;
	clear: none;
	margin-left: 2%;
	width: 24%;
	background-color: #ffffff;
	border-top-color: #c3c5c8;
	border-top-width: 2px;
	height: 400px;
}

p.cardHead
{
	font-family: 'Open Sans', sans-serif, Regular;
	font-style: normal;
	border-bottom: solid 1px #c3c5c8;
	margin-bottom: 16px;
	padding-bottom: 16px;
	text-align: center;
	mc-disable-glossary-terms: true;
	font-size: 1.57em;
	color: #02a7ec;
	line-height: 16pt;
	font-weight: normal;
}

p.IntroText
{
	mc-disable-glossary-terms: true;
	line-height: 20px;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 10.5pt;
	text-align: center;
	font-family: 'Open Sans', sans-serif;
}

p.IntroList
{
	margin-bottom: 12px;
	margin-top: 10pt;
	mc-disable-glossary-terms: true;
	font-size: 10pt;
	line-height: 23px;
	text-align: center;
	font-family: 'Open Sans', sans-serif;
}

div.introCardBody
{
	text-align: center;
	padding-bottom: 10px;
	padding-left: 10px;
	padding-right: 10px;
	margin-top: 0px;
	padding-top: 0px;
}

div.container
{
	position: relative;
	padding: 0px;
	border-left-color: #cccccc;
	margin-right: 0px;
	border-right-style: solid;
	border-right-width: 1px;
	margin-left: 0px;
	min-height: 800px;
	border-top: none 1px #c3c5c8;
	background-color: transparent;
	border-left: none 1px #c3c5c8;
	border-right: none 1px #c3c5c8;
	margin-bottom: 0px;
	padding-bottom: 0px;
	padding-right: 0px;
	width: 100%;
	padding-left: 5px;
	height: 100%;
	padding-top: 35px;
	margin-top: 2px;
}

div.introContainer
{
	max-width: 1200px;
	margin: 0;
	overflow: hidden;
	padding-top: 10px;
	padding: 10px 0px 60px;
	padding-bottom: 40px;
	margin-right: 0px;
	margin-bottom: 40px;
	max-width: 1400px;
	height: 100%;
	border: none 1px #f6f6f7;
	padding-left: 5px;
	width: 100%;
	margin-left: 5px;
}

div.introCard
{
	padding-bottom: 10px;
	padding-left: 10px;
	float: left;
	padding-right: 5px;
	color: #000000;
	padding-top: 5px;
	margin-bottom: 30px;
	border-bottom-color: #cccccc;
	border-left-color: #cccccc;
	border-right-color: #cccccc;
	border-top-color: #ff8300;
	border-top-width: 3px;
	background-color: #ffffff;
	margin-right: 3px;
	border: solid 1px #c3c5c8;
	border-radius: 8px;
	margin-left: 1%;
	width: 28%;
	height: 250px;
	position: relative;
}

::-webkit-scrollbar-thumb:hover
{
	background: #c3c5c8;
}

::-webkit-scrollbar-thumb
{
	background: #f6f6f7;
}

::-webkit-scrollbar-track
{
	background: #ffffff;
}

::-webkit-scrollbar
{
	width: 10px;
}

.active:after
{
	content: "\02796";
	font-size: 13px;
	color: #777;
	float: right;
	margin-left: 5px;
}

.accordion:after
{
	content: '\02795';
	font-size: 13px;
	color: #777;
	float: right;
	margin-left: 5px;
}

.panel
{
	padding: 0 18px;
	background-color: white;
	width: 100%;
	display: block;
	padding-bottom: 5px;
	margin-bottom: 0px;
}

.panelheader
{
	background-color: #eee;
	color: #000000;
	cursor: pointer;
	padding: 10px;
	width: 100%;
	text-align: left;
	outline: none;
	transition: 0.4s;
	font-size: 13pt;
	font-family: 'open sans', sans-serif;
	border-bottom: solid 1px #c3c5c8;
}

.taskpanel
{
	padding: 0;
	border: solid 1px #c3c5c8;
	width: 100%;
	margin-bottom: 20px;
	display: block;
}

.active,
.accordion:hover
{
	background-color: #ccc;
	display: block;
}

.accordion
{
	background-color: #eee;
	color: #444;
	cursor: pointer;
	padding: 18px;
	width: 100%;
	text-align: left;
	outline: none;
	transition: 0.4s;
	border: solid 1px #c3c5c8;
	font-size: 13pt;
	font-family: 'open sans', sans-serif;
}

p.Table_Step_Sub_Next_Instantonly
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 's:{a+}. ';
	mc-auto-number-offset: 19.2px;
	line-height: 10pt;
	text-decoration: none;
	display: list-item;
	list-style: lower-alpha;
}

p.Table_Step_Sub_1st_Instantonly
{
	text-align: left;
	margin-left: 0.4in;
	margin-right: 0in;
	margin-top: 2pt;
	margin-bottom: 2pt;
	font-family: 'Open Sans', sans-serif;
	font-weight: normal;
	font-style: normal;
	font-size: 9pt;
	letter-spacing: 0em;
	color: #000000;
	mc-hyphenate: never;
	mc-auto-number-format: 's:{a=1}. ';
	mc-auto-number-offset: 19.2px;
	mc-next-tag: p;
	mc-next-class: Step_Sub_Next;
	line-height: 10pt;
	text-decoration: none;
	display: list-item;
	list-style: lower-alpha;
}

p.introHead
{
	font-family: 'Open Sans', sans-serif;
	font-style: normal;
	font-size: 15pt;
	color: #000000;
	padding-top: 5px;
	line-height: 18pt;
	border-bottom: solid 1px #cccccc;
	margin-bottom: 20pt;
	padding-bottom: 10pt;
	margin-top: 12pt;
	font-weight: normal;
	mc-disable-glossary-terms: true;
	border-bottom-color: #ff8300;
	text-align: center;
}

div.logo
{
	float: left;
	margin-left: 0px;
	padding-left: 0px;
	margin-right: 0px;
	clear: left;
	width: 20%;
	padding-top: 0px;
	padding-bottom: 2px;
	margin-top: 2px;
}

.cardHead
{
	font-family: 'Open Sans', sans-serif;
	font-style: normal;
	color: #000000;
	padding-top: 5px;
}

.Body
{
	font-family: 'Open Sans', sans-serif, Regular;
}

p.logo
{
	text-align: center;
	margin-bottom: 100pt;
}

@media only screen and (max-width: 1279px)
{
	p.Body
	{
		line-height: 13pt;
	}

	div.sideContent
	{
		display: none;
	}

	div.mainContent
	{
		float: left;
		width: 100%;
		border-left: none 2px #cccccc;
	}

	.row.nav-search
	{
		display: block;
	}

	div.card
	{
		border: solid 2px #c3c5c8;
		background-color: #ffffff;
		width: 22%;
	}

	div.container
	{
		padding-top: 45px;
	}
}

@media screen and (max-width: 600px)
{
	div.tab
	{
		width: 100%;
	}

	div.tabcontent
	{
		display: none;
	}

	button.tablinks
	{
		width: 100%;
		text-align: center;
	}

	button
	{
		width: auto;
	}

	.row.nav-search
	{
		display: block;
	}

	.question
	{
		font-size: 10pt;
		text-align: left;
	}

	MadCap|dropDown
	{
		line-height: 13pt;
	}

	div.sideContent
	{
		display: none;
	}

	div.mainContent
	{
		float: left;
		width: 100%;
		padding-right: 5px;
		padding-left: 5px;
		border-left: none 1px #cccccc;
	}

	div.IntroPage
	{
		padding-right: 5px;
		padding-left: 5px;
	}

	div.introCard
	{
		width: 100%;
		margin: 0;
		padding-left: 5px;
		padding-right: 5px;
	}

	div.containerCklst
	{
		margin-left: 5px;
		margin-right: 5px;
	}

	p.introHead
	{
		border-bottom: solid 1px #ff8300;
	}

	p.IntroText
	{
		width: 100%;
	}

	ul.cheklist
	{
		list-style-image: url('../Images/icon_bullet.png');
	}

	ul.cheklist &gt; li &gt; ul
	{
		list-style-image: none;
	}

	p.hidden
	{
		display: none;
	}

	MadCap|dropDownHead.chk_h1
	{
		line-height: 14pt;
	}

	MadCap|dropDownHead.h4
	{
		line-height: 13pt;
	}

	p.Chapter_Title
	{
		color: #000000;
		line-height: 18pt;
	}

	p.Body
	{
		line-height: 13pt;
	}

	h1._1Heading
	{
		line-height: 18pt;
		color: #000000;
	}

	div.cklstBlk
	{
		width: 100%;
	}
}

@media (min-height: 30.5em)
{
	.modal__wrap
	{
		position: relative;
		top: 50%;
		-webkit-transform: translate(-50%, -80%);
		transform: translate(-50%, -80%);
		position: relative;
		left: 50%;
	}

	.modal__wrap label
	{
		background: #01a982;
		border-radius: 50%;
		color: #f6f6f6;
		cursor: pointer;
		display: inline-block;
		height: 1.5em;
		line-height: 2;
		position: absolute;
		right: 0.3em;
		top: 15%;
		width: 1.7em;
	}

	.modal__wrap p
	{
		color: #000000;
		text-align: left;
		padding: 0px;
		margin: 0px;
	}

	.modal input:focus ~ label
	{
		-webkit-transform: scale(0.97);
		transform: scale(0.97);
	}

	input
	{
		position: absolute;
		top: -1000px;
	}

	.modal__overlay
	{
		opacity: 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-transition: all 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transition: all 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		z-index: -100;
	}

	input:checked ~ .modal__overlay
	{
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1);
		z-index: 800;
	}

	.thumbs_up
	{
		background-image: url('../Images/icon_thumbs_up.png');
		background-position: left center;
		background-repeat: no-repeat;
		padding-left: 20px;
	}

	.thumbs_down
	{
		background-image: url('../Images/icon_thumbs_down.png');
		background-position: left center;
		background-repeat: no-repeat;
		padding-left: 20px;
	}
}

@media only screen and (min-width: 400px)
{
	h1
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 15pt;
		letter-spacing: 0em;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #f36f21;
	}

	h2
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 15pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 14pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h3
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #5289ae;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h4
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	div.note
	{
		width: 88%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	ul
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		line-height: 13pt;
		text-decoration: none;
	}
}

@media print-large-docs
{
	p.Chapternumber
	{
		text-align: right;
		margin-right: 0in;
		margin-bottom: 10pt;
		color: #ffffff;
		font-size: 16pt;
		font-weight: bold;
	}

	h1.Chaptertitle
	{
		text-align: right;
		margin-right: 0in;
		margin-top: 0pt;
		color: #ffffff;
		font-size: 16pt;
		font-weight: bold;
	}

	p.Doc_Title
	{
		font: Open Sans;
		font-size: 25pt;
		color: #064a76;
		font-weight: bolder;
		font-family: 'Open Sans Extrabold';
		margin: 5pt 40pt 160pt 40pt;
		line-height: 36pt;
	}

	p.logo
	{
		text-align: center;
		margin-bottom: 100pt;
	}

	p.titlefooter
	{
		margin-left: 40pt;
	}

	h1
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 16pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 18pt;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		mc-header-level: 1;
		color: #ff8300;
	}

	h1.__1Heading
	{
		font-size: 18pt;
	}

	h2
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 16pt;
		letter-spacing: 0em;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #f36f21;
		mc-header-level: 2;
	}

	h2.__2Heading
	{
		font-size: 16pt;
	}

	h3
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 15pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 14pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
		mc-heading-level: 0;
		mc-next-tag: p;
	}

	h3.__3Heading
	{
		font-size: 14pt;
	}

	h4
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		letter-spacing: 0em;
		color: #5289ae;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
		mc-heading-level: 0;
	}

	p.subheading
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #5289ae;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h5
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
		mc-heading-level: 0;
	}

	p.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	div.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	div.screen &gt; p
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		text-decoration: none;
		white-space: pre;
		word-wrap: break-word;
		color: #000000;
	}

	p.TOC1
	{
		font-size: 14pt;
		margin-top: 10pt;
		margin-bottom: 1pt;
	}

	p.TOC2
	{
		font-size: 10pt;
		margin-top: 0pt;
		margin-bottom: 1pt;
		margin-left: 30pt;
		mc-leader-format: '.';
	}

	p.TOC3
	{
		font-size: 10pt;
		margin-top: 0pt;
		margin-bottom: 1pt;
		margin-left: 60pt;
	}

	p.TOC4
	{
		font-size: 10pt;
		margin-top: 0pt;
		margin-bottom: 1pt;
		margin-left: 80pt;
	}

	p.noticetitle
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #f36f21;
	}

	p.headingbold
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 8pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #000000;
	}

	/*

	ul
	{
		margin-bottom: 5px;
		margin-top: 10px;
		margin-left: 10px;
		font-size: 10pt;
	}

	li
	{
		font-family: 'Open Sans', sans-serif;
		line-height: 14pt;
		padding-top: 2px;
		padding-bottom: 2px;
		margin: 5px;
		margin-left: 5px;
		margin-bottom: 0px;
		margin-top: 0px;
		font-size: 10pt;
	}

*/

	ol
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		line-height: 13pt;
		text-decoration: none;
	}

	ul
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		margin-left: 0pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		line-height: 13pt;
		text-decoration: none;
	}

	ul &gt; li
	{
		margin: 0pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		list-style-type: square;
	}

	ul &gt; li &gt; ul
	{
		margin-left: 5pt;
	}

	ul &gt; li &gt; ul &gt; li
	{
		margin-top: 4pt;
		margin-left: -20pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		list-style-type: disc;
	}

	ul &gt; li &gt; ul &gt; li &gt; ul &gt; li
	{
		margin-top: 4pt;
		margin-left: -20pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		list-style-type: circle;
	}

	ol &gt; li
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ol &gt; li &gt; ol &gt; li
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ul &gt; li &gt; p
	{
		margin-left: 0pt;
		font-size: 10pt;
	}

	ul &gt; li &gt; ul &gt; li &gt; p
	{
		margin-left: 0pt;
		font-size: 10pt;
	}

	div.note
	{
		width: 88%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.note &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 16pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		vertical-align: middle;
	}

	div.note &gt; p &gt; code
	{
		color: #515151;
	}

	div.notes
	{
		width: 108%;
		text-align: center;
		margin-left: -0.65in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 110px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.notes p
	{
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:first-child
	{
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:last-child
	{
		border-bottom: solid 1px #000000;
		padding-bottom: 0pt;
		margin-bottom: 0px;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.noteCaution
	{
		width: 97%;
		text-align: center;
		margin-left: -0.55in;
		margin-right: 0in;
		margin-top: 20pt;
		margin-bottom: 20pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #aa0000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_caution.png');
		background-size: 60px 60px;
		background-position: left center;
	}

	div.noteCaution &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 10pt;
		padding-top: 10pt;
		margin-left: 20pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		vertical-align: middle;
	}

	div.caution
	{
		width: 97%;
		text-align: center;
		margin-left: -0.6in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 20px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_caution.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.caution &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 16pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		vertical-align: middle;
	}

	div.warning
	{
		width: 97%;
		text-align: center;
		margin-left: -0.63in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 20px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_warning.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.warning &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 16pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		vertical-align: middle;
	}
}

@media print-small-docs
{
	p.Chapternumber
	{
		text-align: right;
		margin-right: 0in;
		margin-bottom: 10pt;
		color: #ffffff;
		font-size: 16pt;
		font-weight: bold;
	}

	h1.Chaptertitle
	{
		text-align: right;
		margin-right: 0in;
		margin-top: 0pt;
		color: #ffffff;
		font-size: 16pt;
		font-weight: bold;
	}

	p.Doc_Title
	{
		font: Open Sans;
		font-size: 25pt;
		color: #064a76;
		font-weight: bolder;
		font-family: 'Open Sans Extrabold';
		margin: 5pt 40pt 160pt 40pt;
		line-height: 36pt;
	}

	p.logo
	{
		text-align: center;
		margin-bottom: 100pt;
	}

	p.titlefooter
	{
		margin-left: 40pt;
	}

	h1
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 16pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 0pt;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		mc-header-level: 1;
		color: #ffffff;
	}

	h1.__1Heading
	{
		font-size: 18pt;
	}

	h2
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 16pt;
		letter-spacing: 0em;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #f36f21;
		mc-header-level: 2;
	}

	h2.__2Heading
	{
		font-size: 16pt;
	}

	h3
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 15pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 14pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
		mc-heading-level: 0;
		mc-next-tag: p;
	}

	h3.__3Heading
	{
		font-size: 14pt;
		mc-heading-level: 0;
	}

	h4
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		letter-spacing: 0em;
		color: #5289ae;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
		mc-heading-level: 0;
	}

	p.subheading
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		letter-spacing: 0em;
		color: #5289ae;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
	}

	h5
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		mc-next-tag: p;
		mc-heading-level: 0;
	}

	p.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	div.screen
	{
		font-family: 'Courier New';
		font-weight: normal;
		font-style: normal;
		font-size: 9pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 10pt;
		text-decoration: none;
		white-space: pre;
		background-color: #eeeeee;
		margin: 10pt;
		padding: 10pt;
		color: #000000;
	}

	p.TOC1
	{
		font-size: 14pt;
		margin-top: 10pt;
		margin-bottom: 1pt;
	}

	p.TOC2
	{
		font-size: 10pt;
		margin-top: 0pt;
		margin-bottom: 1pt;
		margin-left: 30pt;
		mc-leader-format: '.';
	}

	p.TOC3
	{
		font-size: 10pt;
		margin-top: 0pt;
		margin-bottom: 1pt;
		margin-left: 60pt;
	}

	p.TOC4
	{
		font-size: 10pt;
		margin-top: 0pt;
		margin-bottom: 1pt;
		margin-left: 80pt;
	}

	p.noticetitle
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #f36f21;
	}

	p.headingbold
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 8pt;
		margin-bottom: 6pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		line-height: 16pt;
		text-decoration: none;
		mc-next-tag: p;
		color: #000000;
	}

	ul
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		margin-left: 25pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0pt;
		line-height: 13pt;
		text-decoration: none;
	}

	ul &gt; li
	{
		margin: 4pt -10pt;
		padding-top: 0;
		padding-bottom: 0;
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		list-style-type: square;
	}

	ul &gt; li &gt; ul
	{
		margin-left: 10pt;
	}

	ul &gt; li &gt; ul &gt; li
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 4pt;
		margin-bottom: 4pt;
		font-family: 'Open Sans', sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		mc-auto-number-position: outside-head;
		mc-auto-number-offset: 19.2px;
		mc-auto-number-class: Bullet;
		line-height: 13pt;
		text-decoration: none;
		list-style-position: outside;
		list-style-tyle: disc;
	}

	ol &gt; li
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ol &gt; li &gt; ol &gt; li
	{
		font-family: "Open Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
	}

	ul &gt; li &gt; p
	{
		margin-left: 0pt;
		font-size: 10pt;
	}

	ul &gt; li &gt; ul &gt; li &gt; p
	{
		margin-left: 0pt;
		font-size: 10pt;
	}

	div.note
	{
		width: 88%;
		text-align: center;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.note &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 16pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		vertical-align: middle;
	}

	div.note &gt; p &gt; code
	{
		color: #515151;
	}

	div.notes
	{
		width: 108%;
		text-align: center;
		margin-left: -0.65in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 0pt;
		padding-top: 0pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 110px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_note.png');
		background-size: 34px 42px;
		background-position: left center;
	}

	div.notes p
	{
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:first-child
	{
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.notes p:last-child
	{
		border-bottom: solid 1px #000000;
		padding-bottom: 0pt;
		margin-bottom: 0px;
		padding-top: 0pt;
		margin-left: 20pt;
		color: #515151;
		font-size: 9pt;
		vertical-align: middle;
	}

	div.noteCaution
	{
		width: 97%;
		text-align: center;
		margin-left: -0.55in;
		margin-right: 0in;
		margin-top: 20pt;
		margin-bottom: 20pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #aa0000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 70px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_caution.png');
		background-size: 60px 60px;
		background-position: left center;
	}

	div.noteCaution &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 10pt;
		padding-top: 10pt;
		margin-left: 20pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		vertical-align: middle;
	}

	div.caution
	{
		width: 97%;
		text-align: center;
		margin-left: -0.6in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 20px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_caution.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.caution &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 16pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		vertical-align: middle;
	}

	div.warning
	{
		width: 97%;
		text-align: center;
		margin-left: -0.63in;
		margin-right: 0in;
		margin-top: 0pt;
		margin-bottom: 0pt;
		padding-left: 30pt;
		padding-bottom: 20pt;
		padding-top: 20pt;
		font-family: 'Open Sans';
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 24pt;
		text-decoration: none;
		min-height: 20px;
		background-repeat: no-repeat;
		background-image: url('../../Common Files/graphics/aruba_warning.png');
		background-size: 40px 40px;
		background-position: left center;
	}

	div.warning &gt; p
	{
		border-bottom: solid 1px #000000;
		border-top: solid 1px #000000;
		padding-bottom: 0pt;
		padding-top: 0pt;
		margin-left: 16pt;
		color: #515151;
		mc-hyphenate: never;
		text-indent: 0px;
		vertical-align: middle;
	}
}

@media print-small-docs
{
	MadCap|xref.Heading_And_Page__
	{
		color: #5289ae;
		mc-format: '{paratext} on page {page}';
	}

	MadCap|xref.Chap____Title__And_Page__
	{
		mc-format: '{paratext} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.Step___And_Page__
	{
		mc-format: 'step {paranumonly} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.Table_Figure___And_page__
	{
		color: #5289ae;
		mc-format: '{paranumonly}';
	}

	MadCap|xref.App____Title__And_Page__
	{
		mc-format: '{paratext} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.TOCPageNumber
	{
		mc-format: '{paratext} on page {page}';
	}

	div.cklstBlk
	{
		padding-left: 10px;
		position: relative;
		padding-right: 5px;
		margin-right: 5px;
		color: #000000;
		padding-top: 5px;
		background-color: transparent;
		border-bottom-color: #cccccc;
		border-right-color: #cccccc;
		margin-left: 2px;
		border-top-color: #cccccc;
		border-top-width: 1px;
		border-left-color: #02a7ec;
		border-left-width: 2px;
		height: auto;
		margin-top: 5px;
		float: left;
		margin-bottom: 5px;
		width: 70%;
		padding-bottom: 10px;
	}

	p.Table_Title
	{
		mc-auto-number-format: 'Table {Gn+}: ';
		page-break-after: avoid;
		line-height: 13pt;
	}

	MadCap|xref
	{
		text-decoration: underline;
		font-family: 'Open Sans';
		color: #5289ae;
	}

	p.Doc_Title
	{
		font: Open Sans;
		font-size: 25pt;
		mc-auto-number-position: none;
		color: #064a76;
		font-weight: bolder;
		font-family: 'Open Sans Extrabold';
	}

	p.Chapter_Number
	{
		margin: 0;
		text-align: right;
		font-size: 14pt;
		line-height: 14pt;
		margin-bottom: 6pt;
		margin-top: 10pt;
	}

	p.Chapter_Title
	{
		bottom: 10pt;
		color: #f5f5f5;
		margin: 0;
		margin-bottom: 40pt;
		text-align: right;
		mc-heading-level: 1;
	}

	p.Chapter_Title_single
	{
		font: 'Open Sans';
		color: #f5f5f5;
		margin-bottom: 30pt;
		font-size: 18pt;
		mc-heading-level: 1;
		mc-hyphenate: never;
		text-align: right;
		top: 0px;
		margin-top: 0;
		margin-left: -0.65in;
	}

	p.CLI_Indented_3
	{
		orphans: 3;
		widows: 3;
	}

	p.CLI_Indented_2
	{
		orphans: 3;
		widows: 3;
	}

	p.CLI_Indented
	{
		orphans: 3;
		widows: 3;
	}

	p.CLI
	{
		widows: 3;
		orphans: 3;
	}

	img
	{
		max-width: 5.6in;
		mc-printer-page-size: a4;
		border-left-style: none;
		border-bottom-style: none;
		border-style: none;
		border-width: 0px;
	}

	object
	{
		max-width: 5.6in;
	}

	h1.__1Heading
	{
		mc-heading-level: 2;
		color: #ff8300;
		font-size: 18pt;
	}

	p.Doc_Title_single_pdf
	{
		font: 'Open Sans';
		font-size: 24pt;
		color: #f5f5f5;
		font-weight: bold;
		margin-left: -0.65 in;
		margin-top: 14pt;
		margin-bottom: 6pt;
		mc-auto-number-position: none;
		mc-hyphenate: never;
		text-align: right;
	}

	p.Figure_Title
	{
		page-break-after: avoid;
		mc-auto-number-format: 'F:Figure {Gn+}  ';
		padding-bottom: 7px;
		font-family: 'Open Sans';
	}

	p.Footnote
	{
		text-align: left;
		margin-left: 0.2in;
		margin-right: 0.25in;
		margin-top: 1pt;
		margin-bottom: 1pt;
		font-family: 'Open Sans';
		font-weight: normal;
		font-style: normal;
		font-size: 8pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: -19px;
		line-height: 10pt;
		text-decoration: none;
	}

	h1._1CmdHeading
	{
		color: #f36f21;
	}

	h2._2Heading
	{
		mc-heading-level: 3;
		color: #000000;
	}

	h3._3Heading
	{
		mc-heading-level: 0;
		color: #5289ae;
	}

	h4._4Heading
	{
		mc-heading-level: 0;
	}

	p.Doc_Type
	{
		font: Open Sans;
		font-family: 'Open Sans';
	}

	p.Anchor
	{
		
	}

	p.TOC_Title
	{
		font-size: 15pt;
		font-family: 'Open Sans';
		line-height: 16pt;
		color: #f36f21;
	}

	p.TOC1
	{
		font-family: 'Open Sans';
		font-size: 12pt;
		line-height: 10pt;
		color: #f36f21;
	}

	p.TOC2
	{
		font-family: 'Open Sans';
		color: #5289ae;
		font-size: 10pt;
		line-height: 4pt;
	}

	p.TOC3
	{
		font-family: 'Open Sans';
		color: #000000;
		font-size: 10pt;
		line-height: 8pt;
	}

	p.TOC4
	{
		font-family: 'Open Sans';
		color: #a9a9a9;
		font-size: 10pt;
		line-height: 8pt;
	}

	p.TOC5
	{
		font-family: 'Open Sans';
		font-size: 8pt;
	}

	p.TOC6
	{
		font-family: 'Open Sans';
		font-size: 10pt;
	}

	p.TOC7
	{
		font-family: 'Open Sans';
	}

	p.TOC8
	{
		font-family: 'Open Sans';
	}

	p.TOC9
	{
		font-family: 'Open Sans';
		font-size: 10pt;
	}

	p.Table_Body
	{
		page-break-inside: avoid;
	}

	p.zTextCaution
	{
		
	}

	p.zWarningText
	{
		
	}

	span.zTitleNo
	{
		font-family: 'Open Sans';
	}

	p.Body_in_Bullet_Step
	{
		
	}

	h1
	{
		page-break-before: avoid;
	}

	MadCap|dropDownHead
	{
		font-family: 'Open Sans';
		font-weight: bold;
		line-height: 0pt;
	}

	MadCap|dropDownHead.h1
	{
		color: #f36f21;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 15pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		text-indent: 0px;
		page-break-after: avoid;
		mc-heading-level: 2;
		mc-hyphenate: never;
	}

	MadCap|dropDownHead.h2
	{
		color: #000000;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		text-align: left;
		text-indent: 0px;
		line-height: 13pt;
		margin-top: 15pt;
		margin-bottom: 6pt;
		text-decoration: none;
		page-break-after: avoid;
		mc-heading-level: 3;
		mc-hyphenate: never;
	}

	MadCap|dropDownHead.h3
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		color: #5289ae;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		page-break-after: avoid;
		padding-top: 10pt;
		mc-hyphenate: inherit;
	}

	MadCap|dropDownHead.h4
	{
		color: #515151;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		text-align: left;
		text-indent: 0px;
		line-height: 12pt;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		page-break-after: avoid;
		mc-hyphenate: never;
	}

	p
	{
		mc-hyphenate: never;
		font-family: "Open Sans", sans-serif, Regular;
		color: #000000;
		list-style: ;
		list-style-type: square;
		display: block;
	}

	MadCap|dropDown
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	tr
	{
		color: #000000;
	}

	a
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #5289ae;
	}

	span
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	a:link
	{
		color: #064a76;
	}

	p.Body_Lead-in
	{
		page-break-after: avoid;
	}

	p.Body
	{
		
	}

	MadCap|dropDownHotspot
	{
		font-size: 11pt;
		font-weight: bold;
		font-style: normal;
		color: #5289ae;
		font-family: "Open Sans", sans-serif, Regular;
	}

	MadCap|dropDownHotspot.h1
	{
		color: #f36f21;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 15pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		text-indent: 0px;
		page-break-after: avoid;
		line-height: 16pt;
	}

	MadCap|dropDownHotspot.h2
	{
		color: #000000;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		text-align: left;
		text-indent: 0px;
		margin-top: 15pt;
		margin-bottom: 6pt;
		line-height: 13pt;
		text-decoration: none;
		page-break-after: avoid;
	}

	MadCap|dropDownHotspot.h3
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		color: #5289ae;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		page-break-after: avoid;
	}

	MadCap|dropDownHotspot.h4
	{
		color: #515151;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		text-align: left;
		text-indent: 0px;
		line-height: 12pt;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		page-break-after: avoid;
	}

	td.footer
	{
		color: #000000;
	}

	td
	{
		color: #000000;
	}

	tbody
	{
		color: #000000;
	}

	caption
	{
		color: #000000;
	}

	table
	{
		color: #000000;
	}

	col
	{
		color: #000000;
	}

	colgroup
	{
		color: #000000;
	}

	tfoot
	{
		color: #000000;
	}

	thead
	{
		color: #000000;
	}

	th
	{
		color: #000000;
	}

	p.Bullet_in_Steps
	{
		mc-auto-number-position: outside-head;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_2_in_Steps
	{
		mc-auto-number-position: outside-head;
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_1
	{
		mc-auto-number-position: outside-head;
		list-style-type: square;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Appendix_Number
	{
		mc-auto-number-format: 'Appendix {chapnum}';
		text-align: right;
		margin-top: 10pt;
		margin-bottom: 14pt;
		line-height: 6pt;
		font-size: 14pt;
		font-weight: bold;
		font-style: normal;
		color: #ffffff;
	}

	p.Appendix_Title
	{
		font-size: 14pt;
		font-weight: bold;
		font-style: normal;
		font-family: 'Open Sans';
		color: #ffffff;
		text-align: right;
		margin-top: 0;
		margin-bottom: 40pt;
		line-height: 16pt;
		mc-heading-level: 1;
	}

	p.zIconCaution
	{
		background-image: url('../../Common Files/graphics/aruba_caution.png');
	}

	p.zIconNote
	{
		background-image: url('../../Common Files/graphics/aruba_note.png');
	}

	p.Table_Bullet2
	{
		margin-left: 0.40in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		line-height: 10pt;
		font-size: 9pt;
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_2
	{
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Table_Bullet
	{
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_in_Sub-Steps
	{
		mc-auto-number-format: ' ';
	}

	span.Bullet
	{
		font-size: 7pt;
	}

	span.Bullet2
	{
		font-size: 7pt;
	}

	span.Red
	{
		font-weight: bold;
		background-color: #fcf358;
	}

	div.GlossaryPageDefinition
	{
		font-size: 10pt;
		font-family: "Open Sans", sans-serif;
		color: #000000;
		margin-left: 0pt;
		margin-bottom: 6pt;
		margin-top: 6pt;
		color: #000000;
		mc-hyphenate: never;
		line-height: 13pt;
	}

	div.GlossaryPageEntry
	{
		
	}

	div.GlossaryPageHeading
	{
		font-family: 'Open Sans';
		font-size: 10pt;
		color: #000000;
	}

	div.GlossaryPageTerm
	{
		font-size: 9pt;
		color: #000000;
		font-family: 'Open Sans';
		font: Open Sans;
	}

	MadCap|xref
	{
		mc-format: '{paratext}';
		color: #064a76;
	}

	img
	{
		mc-thumbnail-max-height: auto;
		mc-thumbnail: popup;
		mc-thumbnail-max-width: 300px;
	}

	p.Doc_Type
	{
		font-size: 36pt;
	}

	p.TOC_Title
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	.accordion
	{
		color: #5289ae;
		font-family: 'Open Sans';
		font-size: 11pt;
		line-height: 12pt;
		font-weight: bold;
		margin-bottom: 6pt;
		margin-top: 12pt;
	}

	.panelheader
	{
		color: #5289ae;
		font-size: 11pt;
		font-family: 'Open Sans';
		line-height: 12pt;
		font-weight: bold;
		margin-bottom: 6pt;
		margin-top: 12pt;
		page-break-after: avoid;
	}
}

@media print-large-docs
{
	MadCap|xref.Heading_And_Page__
	{
		color: #5289ae;
		mc-format: '{paratext} on page {page}';
	}

	MadCap|xref.Chap____Title__And_Page__
	{
		mc-format: '{paratext} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.Step___And_Page__
	{
		mc-format: 'step {paranumonly} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.Table_Figure___And_page__
	{
		color: #5289ae;
		mc-format: '{paranumonly}';
	}

	MadCap|xref.App____Title__And_Page__
	{
		mc-format: '{paratext} on page {page}';
		color: #5289ae;
	}

	MadCap|xref.TOCPageNumber
	{
		mc-format: '{paratext} on page {page}';
	}

	div.cklstBlk
	{
		padding-left: 10px;
		position: relative;
		padding-right: 5px;
		margin-right: 5px;
		color: #000000;
		padding-top: 5px;
		background-color: transparent;
		border-bottom-color: #cccccc;
		border-right-color: #cccccc;
		margin-left: 2px;
		border-top-color: #cccccc;
		border-top-width: 1px;
		border-left-color: #02a7ec;
		border-left-width: 2px;
		height: auto;
		margin-top: 5px;
		float: left;
		margin-bottom: 5px;
		width: 70%;
		padding-bottom: 10px;
	}

	p.Table_Title
	{
		mc-auto-number-format: 'Table {Gn+}: ';
		page-break-after: avoid;
		line-height: 13pt;
	}

	MadCap|xref
	{
		text-decoration: underline;
		font-family: 'Open Sans';
		color: #5289ae;
	}

	p.Doc_Title
	{
		font: Open Sans;
		font-size: 25pt;
		mc-auto-number-position: none;
		color: #064a76;
		font-weight: bolder;
		font-family: 'Open Sans Extrabold';
	}

	p.Chapter_Number
	{
		margin: 0;
		text-align: right;
		font-size: 14pt;
		line-height: 14pt;
		margin-bottom: 6pt;
		margin-top: 10pt;
	}

	p.Chapter_Title
	{
		bottom: 10pt;
		color: #f5f5f5;
		margin: 0;
		margin-bottom: 40pt;
		text-align: right;
		mc-heading-level: 1;
	}

	p.Chapter_Title_single
	{
		font: 'Open Sans';
		color: #f5f5f5;
		margin-bottom: 30pt;
		font-size: 18pt;
		mc-heading-level: 1;
		mc-hyphenate: never;
		text-align: right;
		top: 0px;
		margin-top: 0;
		margin-left: -0.65in;
	}

	p.CLI_Indented_3
	{
		orphans: 3;
		widows: 3;
	}

	p.CLI_Indented_2
	{
		orphans: 3;
		widows: 3;
	}

	p.CLI_Indented
	{
		orphans: 3;
		widows: 3;
	}

	p.CLI
	{
		widows: 3;
		orphans: 3;
	}

	img
	{
		max-width: 5.6in;
		mc-printer-page-size: a4;
		border-left-style: none;
		border-bottom-style: none;
		border-style: none;
		border-width: 0px;
	}

	object
	{
		max-width: 5.6in;
	}

	h1.__1Heading
	{
		mc-heading-level: 2;
		color: #ff8300;
		font-size: 18pt;
	}

	p.Doc_Title_single_pdf
	{
		font: 'Open Sans';
		font-size: 24pt;
		color: #f5f5f5;
		font-weight: bold;
		margin-left: -0.65 in;
		margin-top: 14pt;
		margin-bottom: 6pt;
		mc-auto-number-position: none;
		mc-hyphenate: never;
		text-align: right;
	}

	p.Figure_Title
	{
		page-break-after: avoid;
		mc-auto-number-format: 'F:Figure {Gn+}  ';
		padding-bottom: 7px;
		font-family: 'Open Sans';
	}

	p.Footnote
	{
		text-align: left;
		margin-left: 0.2in;
		margin-right: 0.25in;
		margin-top: 1pt;
		margin-bottom: 1pt;
		font-family: 'Open Sans';
		font-weight: normal;
		font-style: normal;
		font-size: 8pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: -19px;
		line-height: 10pt;
		text-decoration: none;
	}

	h1._1CmdHeading
	{
		color: #f36f21;
	}

	h2._2Heading
	{
		mc-heading-level: 3;
		color: #000000;
	}

	h3._3Heading
	{
		mc-heading-level: 0;
		color: #5289ae;
	}

	h4._4Heading
	{
		mc-heading-level: 0;
	}

	p.Doc_Type
	{
		font: Open Sans;
		font-family: 'Open Sans';
	}

	p.Anchor
	{
		
	}

	p.TOC_Title
	{
		font-size: 15pt;
		font-family: 'Open Sans';
		line-height: 16pt;
		color: #f36f21;
	}

	p.TOC1
	{
		font-family: 'Open Sans';
		font-size: 12pt;
		line-height: 10pt;
		color: #f36f21;
	}

	p.TOC2
	{
		font-family: 'Open Sans';
		color: #5289ae;
		font-size: 10pt;
		line-height: 4pt;
	}

	p.TOC3
	{
		font-family: 'Open Sans';
		color: #000000;
		font-size: 10pt;
		line-height: 8pt;
	}

	p.TOC4
	{
		font-family: 'Open Sans';
		color: #a9a9a9;
		font-size: 10pt;
		line-height: 8pt;
	}

	p.TOC5
	{
		font-family: 'Open Sans';
		font-size: 8pt;
	}

	p.TOC6
	{
		font-family: 'Open Sans';
		font-size: 10pt;
	}

	p.TOC7
	{
		font-family: 'Open Sans';
	}

	p.TOC8
	{
		font-family: 'Open Sans';
	}

	p.TOC9
	{
		font-family: 'Open Sans';
		font-size: 10pt;
	}

	p.Table_Body
	{
		page-break-inside: avoid;
	}

	p.zTextCaution
	{
		
	}

	p.zWarningText
	{
		
	}

	span.zTitleNo
	{
		font-family: 'Open Sans';
	}

	p.Body_in_Bullet_Step
	{
		
	}

	h1
	{
		page-break-before: avoid;
	}

	MadCap|dropDownHead
	{
		font-family: 'Open Sans';
		font-weight: bold;
		line-height: 0pt;
	}

	MadCap|dropDownHead.h1
	{
		color: #f36f21;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 15pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		text-indent: 0px;
		page-break-after: avoid;
		mc-heading-level: 2;
		mc-hyphenate: never;
	}

	MadCap|dropDownHead.h2
	{
		color: #000000;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		text-align: left;
		text-indent: 0px;
		line-height: 13pt;
		margin-top: 15pt;
		margin-bottom: 6pt;
		text-decoration: none;
		page-break-after: avoid;
		mc-heading-level: 3;
		mc-hyphenate: never;
	}

	MadCap|dropDownHead.h3
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		color: #5289ae;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		page-break-after: avoid;
		padding-top: 10pt;
		mc-hyphenate: inherit;
	}

	MadCap|dropDownHead.h4
	{
		color: #515151;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		text-align: left;
		text-indent: 0px;
		line-height: 12pt;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		page-break-after: avoid;
		mc-hyphenate: never;
	}

	p
	{
		mc-hyphenate: never;
		font-family: "Open Sans", sans-serif, Regular;
		color: #000000;
		list-style: ;
		list-style-type: square;
		display: block;
	}

	MadCap|dropDown
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	tr
	{
		color: #000000;
	}

	a
	{
		font-family: "Open Sans", sans-serif, Regular;
		color: #5289ae;
	}

	span
	{
		font-family: "Open Sans", sans-serif, Regular;
	}

	a:link
	{
		color: #064a76;
	}

	p.Body_Lead-in
	{
		page-break-after: avoid;
	}

	p.Body
	{
		
	}

	MadCap|dropDownHotspot
	{
		font-size: 11pt;
		font-weight: bold;
		font-style: normal;
		color: #5289ae;
		font-family: "Open Sans", sans-serif, Regular;
	}

	MadCap|dropDownHotspot.h1
	{
		color: #f36f21;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 15pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 23pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		text-indent: 0px;
		page-break-after: avoid;
		line-height: 16pt;
	}

	MadCap|dropDownHotspot.h2
	{
		color: #000000;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 12pt;
		text-align: left;
		text-indent: 0px;
		margin-top: 15pt;
		margin-bottom: 6pt;
		line-height: 13pt;
		text-decoration: none;
		page-break-after: avoid;
	}

	MadCap|dropDownHotspot.h3
	{
		color: #064a76;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 11pt;
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 12pt;
		margin-bottom: 6pt;
		letter-spacing: 0em;
		color: #5289ae;
		text-indent: 0px;
		line-height: 12pt;
		text-decoration: none;
		page-break-after: avoid;
	}

	MadCap|dropDownHotspot.h4
	{
		color: #515151;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: bold;
		font-style: normal;
		font-size: 10pt;
		text-align: left;
		text-indent: 0px;
		line-height: 12pt;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 10pt;
		margin-bottom: 6pt;
		page-break-after: avoid;
	}

	td.footer
	{
		color: #000000;
	}

	td
	{
		color: #000000;
	}

	tbody
	{
		color: #000000;
	}

	caption
	{
		color: #000000;
	}

	table
	{
		color: #000000;
	}

	col
	{
		color: #000000;
	}

	colgroup
	{
		color: #000000;
	}

	tfoot
	{
		color: #000000;
	}

	thead
	{
		color: #000000;
	}

	th
	{
		color: #000000;
	}

	p.Bullet_in_Steps
	{
		mc-auto-number-position: outside-head;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_2_in_Steps
	{
		mc-auto-number-position: outside-head;
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_1
	{
		mc-auto-number-position: outside-head;
		list-style-type: square;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Appendix_Number
	{
		mc-auto-number-format: 'Appendix {chapnum}';
		text-align: right;
		margin-top: 10pt;
		margin-bottom: 14pt;
		line-height: 6pt;
		font-size: 14pt;
		font-weight: bold;
		font-style: normal;
		color: #ffffff;
	}

	p.Appendix_Title
	{
		font-size: 14pt;
		font-weight: bold;
		font-style: normal;
		font-family: 'Open Sans';
		color: #ffffff;
		text-align: right;
		margin-top: 0;
		margin-bottom: 40pt;
		line-height: 16pt;
		mc-heading-level: 1;
	}

	p.zIconCaution
	{
		background-image: url('../../Common Files/graphics/aruba_caution.png');
	}

	p.zIconNote
	{
		background-image: url('../../Common Files/graphics/aruba_note.png');
	}

	p.Table_Bullet2
	{
		margin-left: 0.40in;
		margin-top: 2pt;
		margin-bottom: 2pt;
		line-height: 10pt;
		font-size: 9pt;
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_2
	{
		list-style-type: circle;
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Table_Bullet
	{
		mc-auto-number-format: ' ';
		display: block;
	}

	p.Bullet_in_Sub-Steps
	{
		mc-auto-number-format: ' ';
	}

	span.Bullet
	{
		font-size: 7pt;
	}

	span.Bullet2
	{
		font-size: 7pt;
	}

	span.Red
	{
		font-weight: bold;
		background-color: #fcf358;
	}

	div.GlossaryPageDefinition
	{
		font-size: 10pt;
		font-family: "Open Sans", sans-serif;
		color: #000000;
		margin-left: 0pt;
		margin-bottom: 6pt;
		margin-top: 6pt;
		color: #000000;
		mc-hyphenate: never;
		line-height: 13pt;
	}

	div.GlossaryPageEntry
	{
		
	}

	div.GlossaryPageHeading
	{
		font-family: 'Open Sans';
		font-size: 10pt;
		color: #000000;
	}

	div.GlossaryPageTerm
	{
		font-size: 9pt;
		color: #000000;
		font-family: 'Open Sans';
		font: Open Sans;
	}

	MadCap|xref
	{
		mc-format: '{paratext}';
		color: #064a76;
	}

	img
	{
		mc-thumbnail-max-height: auto;
		mc-thumbnail: popup;
		mc-thumbnail-max-width: 300px;
	}

	p.Doc_Type
	{
		font-size: 36pt;
	}

	p.TOC_Title
	{
		text-align: left;
		margin-left: 0in;
		margin-right: 0in;
		margin-top: 6pt;
		margin-bottom: 6pt;
		font-family: "Open Sans", sans-serif, Regular;
		font-weight: normal;
		font-style: normal;
		font-size: 10pt;
		letter-spacing: 0em;
		color: #000000;
		mc-hyphenate: never;
		text-indent: 0px;
		line-height: 13pt;
		text-decoration: none;
	}

	.accordion
	{
		color: #5289ae;
		font-family: 'Open Sans';
		font-size: 11pt;
		line-height: 12pt;
		font-weight: bold;
		margin-bottom: 6pt;
		margin-top: 12pt;
	}

	.panelheader
	{
		color: #5289ae;
		font-size: 11pt;
		font-family: 'Open Sans';
		line-height: 12pt;
		font-weight: bold;
		margin-bottom: 6pt;
		margin-top: 12pt;
		page-break-after: avoid;
	}
}

</pre></body></html>