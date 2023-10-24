import{c as t,s as e,g as r,a as i,b as a,v as n,x as s,l as c,j as o,z as l,as as h,h as m,y as u,at as y,au as p}from"./mermaid.core-a0c0eb91.js";import"./app-f03e95cc.js";var g=function(){var t=function(t,e,r,i){for(r=r||{},i=t.length;i--;r[t[i]]=e);return r},e=[1,3],r=[1,6],i=[1,4],a=[1,5],n=[2,5],s=[1,12],c=[5,7,13,19,21,23,24,26,28,31,36,39,46],o=[7,13,19,21,23,24,26,28,31,36,39],l=[7,12,13,19,21,23,24,26,28,31,36,39],h=[7,13,46],m=[1,42],u=[1,41],y=[7,13,29,32,34,37,46],p=[1,55],g=[1,56],b=[1,57],d=[7,13,32,34,41,46],f={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,COMMIT_TAG:34,EMPTYSTR:35,MERGE:36,COMMIT_TYPE:37,commitType:38,COMMIT:39,commit_arg:40,COMMIT_MSG:41,NORMAL:42,REVERSE:43,HIGHLIGHT:44,ID:45,";":46,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"COMMIT_TAG",35:"EMPTYSTR",36:"MERGE",37:"COMMIT_TYPE",39:"COMMIT",41:"COMMIT_MSG",42:"NORMAL",43:"REVERSE",44:"HIGHLIGHT",45:"ID",46:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,5],[18,5],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[40,0],[40,1],[38,1],[38,1],[38,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(t,e,r,i,a,n,s){var c=n.length-1;switch(a){case 2:return n[c];case 3:return n[c-1];case 4:return i.setDirection(n[c-3]),n[c-1];case 6:i.setOptions(n[c-1]),this.$=n[c];break;case 7:n[c-1]+=n[c],this.$=n[c-1];break;case 9:this.$=[];break;case 10:n[c-1].push(n[c]),this.$=n[c-1];break;case 11:this.$=n[c-1];break;case 16:this.$=n[c].trim(),i.setAccTitle(this.$);break;case 17:case 18:this.$=n[c].trim(),i.setAccDescription(this.$);break;case 19:i.addSection(n[c].substr(8)),this.$=n[c].substr(8);break;case 21:i.checkout(n[c]);break;case 22:i.branch(n[c]);break;case 23:i.branch(n[c-2],n[c]);break;case 24:i.cherryPick(n[c],"",void 0);break;case 25:i.cherryPick(n[c-2],"",n[c]);break;case 26:case 28:i.cherryPick(n[c-2],"","");break;case 27:i.cherryPick(n[c],"",n[c-2]);break;case 29:i.merge(n[c],"","","");break;case 30:i.merge(n[c-2],n[c],"","");break;case 31:i.merge(n[c-2],"",n[c],"");break;case 32:i.merge(n[c-2],"","",n[c]);break;case 33:i.merge(n[c-4],n[c],"",n[c-2]);break;case 34:i.merge(n[c-4],"",n[c],n[c-2]);break;case 35:i.merge(n[c-4],"",n[c-2],n[c]);break;case 36:i.merge(n[c-4],n[c-2],n[c],"");break;case 37:i.merge(n[c-4],n[c-2],"",n[c]);break;case 38:i.merge(n[c-4],n[c],n[c-2],"");break;case 39:i.merge(n[c-6],n[c-4],n[c-2],n[c]);break;case 40:i.merge(n[c-6],n[c],n[c-4],n[c-2]);break;case 41:i.merge(n[c-6],n[c-4],n[c],n[c-2]);break;case 42:i.merge(n[c-6],n[c-2],n[c-4],n[c]);break;case 43:i.merge(n[c-6],n[c],n[c-2],n[c-4]);break;case 44:i.merge(n[c-6],n[c-2],n[c],n[c-4]);break;case 45:i.commit(n[c]);break;case 46:i.commit("","",i.commitType.NORMAL,n[c]);break;case 47:i.commit("","",n[c],"");break;case 48:i.commit("","",n[c],n[c-2]);break;case 49:i.commit("","",n[c-2],n[c]);break;case 50:i.commit("",n[c],i.commitType.NORMAL,"");break;case 51:i.commit("",n[c-2],i.commitType.NORMAL,n[c]);break;case 52:i.commit("",n[c],i.commitType.NORMAL,n[c-2]);break;case 53:i.commit("",n[c-2],n[c],"");break;case 54:i.commit("",n[c],n[c-2],"");break;case 55:i.commit("",n[c-4],n[c-2],n[c]);break;case 56:i.commit("",n[c-4],n[c],n[c-2]);break;case 57:i.commit("",n[c-2],n[c-4],n[c]);break;case 58:i.commit("",n[c],n[c-4],n[c-2]);break;case 59:i.commit("",n[c],n[c-2],n[c-4]);break;case 60:i.commit("",n[c-2],n[c],n[c-4]);break;case 61:i.commit(n[c],"",i.commitType.NORMAL,"");break;case 62:i.commit(n[c],"",i.commitType.NORMAL,n[c-2]);break;case 63:i.commit(n[c-2],"",i.commitType.NORMAL,n[c]);break;case 64:i.commit(n[c-2],"",n[c],"");break;case 65:i.commit(n[c],"",n[c-2],"");break;case 66:i.commit(n[c],n[c-2],i.commitType.NORMAL,"");break;case 67:i.commit(n[c-2],n[c],i.commitType.NORMAL,"");break;case 68:i.commit(n[c-4],"",n[c-2],n[c]);break;case 69:i.commit(n[c-4],"",n[c],n[c-2]);break;case 70:i.commit(n[c-2],"",n[c-4],n[c]);break;case 71:i.commit(n[c],"",n[c-4],n[c-2]);break;case 72:i.commit(n[c],"",n[c-2],n[c-4]);break;case 73:i.commit(n[c-2],"",n[c],n[c-4]);break;case 74:i.commit(n[c-4],n[c],n[c-2],"");break;case 75:i.commit(n[c-4],n[c-2],n[c],"");break;case 76:i.commit(n[c-2],n[c],n[c-4],"");break;case 77:i.commit(n[c],n[c-2],n[c-4],"");break;case 78:i.commit(n[c],n[c-4],n[c-2],"");break;case 79:i.commit(n[c-2],n[c-4],n[c],"");break;case 80:i.commit(n[c-4],n[c],i.commitType.NORMAL,n[c-2]);break;case 81:i.commit(n[c-4],n[c-2],i.commitType.NORMAL,n[c]);break;case 82:i.commit(n[c-2],n[c],i.commitType.NORMAL,n[c-4]);break;case 83:i.commit(n[c],n[c-2],i.commitType.NORMAL,n[c-4]);break;case 84:i.commit(n[c],n[c-4],i.commitType.NORMAL,n[c-2]);break;case 85:i.commit(n[c-2],n[c-4],i.commitType.NORMAL,n[c]);break;case 86:i.commit(n[c-6],n[c-4],n[c-2],n[c]);break;case 87:i.commit(n[c-6],n[c-4],n[c],n[c-2]);break;case 88:i.commit(n[c-6],n[c-2],n[c-4],n[c]);break;case 89:i.commit(n[c-6],n[c],n[c-4],n[c-2]);break;case 90:i.commit(n[c-6],n[c-2],n[c],n[c-4]);break;case 91:i.commit(n[c-6],n[c],n[c-2],n[c-4]);break;case 92:i.commit(n[c-4],n[c-6],n[c-2],n[c]);break;case 93:i.commit(n[c-4],n[c-6],n[c],n[c-2]);break;case 94:i.commit(n[c-2],n[c-6],n[c-4],n[c]);break;case 95:i.commit(n[c],n[c-6],n[c-4],n[c-2]);break;case 96:i.commit(n[c-2],n[c-6],n[c],n[c-4]);break;case 97:i.commit(n[c],n[c-6],n[c-2],n[c-4]);break;case 98:i.commit(n[c],n[c-4],n[c-2],n[c-6]);break;case 99:i.commit(n[c-2],n[c-4],n[c],n[c-6]);break;case 100:i.commit(n[c],n[c-2],n[c-4],n[c-6]);break;case 101:i.commit(n[c-2],n[c],n[c-4],n[c-6]);break;case 102:i.commit(n[c-4],n[c-2],n[c],n[c-6]);break;case 103:i.commit(n[c-4],n[c],n[c-2],n[c-6]);break;case 104:i.commit(n[c-2],n[c-4],n[c-6],n[c]);break;case 105:i.commit(n[c],n[c-4],n[c-6],n[c-2]);break;case 106:i.commit(n[c-2],n[c],n[c-6],n[c-4]);break;case 107:i.commit(n[c],n[c-2],n[c-6],n[c-4]);break;case 108:i.commit(n[c-4],n[c-2],n[c-6],n[c]);break;case 109:i.commit(n[c-4],n[c],n[c-6],n[c-2]);break;case 110:this.$="";break;case 111:this.$=n[c];break;case 112:this.$=i.commitType.NORMAL;break;case 113:this.$=i.commitType.REVERSE;break;case 114:this.$=i.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:e,7:r,13:i,46:a},{1:[3]},{3:7,4:2,5:e,7:r,13:i,46:a},{6:8,7:n,8:[1,9],9:[1,10],10:11,13:s},t(c,[2,117]),t(c,[2,118]),t(c,[2,119]),{1:[2,1]},{7:[1,13]},{6:14,7:n,10:11,13:s},{8:[1,15]},t(o,[2,9],{11:16,12:[1,17]}),t(l,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:n,10:11,13:s},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],36:[1,33],39:[1,32]},t(l,[2,7]),{1:[2,3]},{7:[1,36]},t(o,[2,10]),{4:37,7:r,13:i,46:a},t(o,[2,12]),t(h,[2,13]),t(h,[2,14]),t(h,[2,15]),{20:[1,38]},{22:[1,39]},t(h,[2,18]),t(h,[2,19]),t(h,[2,20]),{27:40,33:m,45:u},t(h,[2,110],{40:43,32:[1,46],33:[1,48],34:[1,44],37:[1,45],41:[1,47]}),{27:49,33:m,45:u},{32:[1,50],34:[1,51]},{27:52,33:m,45:u},{1:[2,4]},t(o,[2,11]),t(h,[2,16]),t(h,[2,17]),t(h,[2,21]),t(y,[2,115]),t(y,[2,116]),t(h,[2,45]),{33:[1,53]},{38:54,42:p,43:g,44:b},{33:[1,58]},{33:[1,59]},t(h,[2,111]),t(h,[2,29],{32:[1,60],34:[1,62],37:[1,61]}),{33:[1,63]},{33:[1,64],35:[1,65]},t(h,[2,22],{29:[1,66]}),t(h,[2,46],{32:[1,68],37:[1,67],41:[1,69]}),t(h,[2,47],{32:[1,71],34:[1,70],41:[1,72]}),t(d,[2,112]),t(d,[2,113]),t(d,[2,114]),t(h,[2,50],{34:[1,73],37:[1,74],41:[1,75]}),t(h,[2,61],{32:[1,78],34:[1,76],37:[1,77]}),{33:[1,79]},{38:80,42:p,43:g,44:b},{33:[1,81]},t(h,[2,24],{34:[1,82]}),{32:[1,83]},{32:[1,84]},{30:[1,85]},{38:86,42:p,43:g,44:b},{33:[1,87]},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{38:93,42:p,43:g,44:b},{33:[1,94]},{33:[1,95]},{38:96,42:p,43:g,44:b},{33:[1,97]},t(h,[2,30],{34:[1,99],37:[1,98]}),t(h,[2,31],{32:[1,101],34:[1,100]}),t(h,[2,32],{32:[1,102],37:[1,103]}),{33:[1,104],35:[1,105]},{33:[1,106]},{33:[1,107]},t(h,[2,23]),t(h,[2,48],{32:[1,108],41:[1,109]}),t(h,[2,52],{37:[1,110],41:[1,111]}),t(h,[2,62],{32:[1,113],37:[1,112]}),t(h,[2,49],{32:[1,114],41:[1,115]}),t(h,[2,54],{34:[1,116],41:[1,117]}),t(h,[2,65],{32:[1,119],34:[1,118]}),t(h,[2,51],{37:[1,120],41:[1,121]}),t(h,[2,53],{34:[1,122],41:[1,123]}),t(h,[2,66],{34:[1,125],37:[1,124]}),t(h,[2,63],{32:[1,127],37:[1,126]}),t(h,[2,64],{32:[1,129],34:[1,128]}),t(h,[2,67],{34:[1,131],37:[1,130]}),{38:132,42:p,43:g,44:b},{33:[1,133]},{33:[1,134]},{33:[1,135]},{33:[1,136]},{38:137,42:p,43:g,44:b},t(h,[2,25]),t(h,[2,26]),t(h,[2,27]),t(h,[2,28]),{33:[1,138]},{33:[1,139]},{38:140,42:p,43:g,44:b},{33:[1,141]},{38:142,42:p,43:g,44:b},{33:[1,143]},{33:[1,144]},{33:[1,145]},{33:[1,146]},{33:[1,147]},{33:[1,148]},{33:[1,149]},{38:150,42:p,43:g,44:b},{33:[1,151]},{33:[1,152]},{33:[1,153]},{38:154,42:p,43:g,44:b},{33:[1,155]},{38:156,42:p,43:g,44:b},{33:[1,157]},{33:[1,158]},{33:[1,159]},{38:160,42:p,43:g,44:b},{33:[1,161]},t(h,[2,36],{34:[1,162]}),t(h,[2,37],{37:[1,163]}),t(h,[2,35],{32:[1,164]}),t(h,[2,38],{34:[1,165]}),t(h,[2,33],{37:[1,166]}),t(h,[2,34],{32:[1,167]}),t(h,[2,59],{41:[1,168]}),t(h,[2,72],{32:[1,169]}),t(h,[2,60],{41:[1,170]}),t(h,[2,83],{37:[1,171]}),t(h,[2,73],{32:[1,172]}),t(h,[2,82],{37:[1,173]}),t(h,[2,58],{41:[1,174]}),t(h,[2,71],{32:[1,175]}),t(h,[2,57],{41:[1,176]}),t(h,[2,77],{34:[1,177]}),t(h,[2,70],{32:[1,178]}),t(h,[2,76],{34:[1,179]}),t(h,[2,56],{41:[1,180]}),t(h,[2,84],{37:[1,181]}),t(h,[2,55],{41:[1,182]}),t(h,[2,78],{34:[1,183]}),t(h,[2,79],{34:[1,184]}),t(h,[2,85],{37:[1,185]}),t(h,[2,69],{32:[1,186]}),t(h,[2,80],{37:[1,187]}),t(h,[2,68],{32:[1,188]}),t(h,[2,74],{34:[1,189]}),t(h,[2,75],{34:[1,190]}),t(h,[2,81],{37:[1,191]}),{33:[1,192]},{38:193,42:p,43:g,44:b},{33:[1,194]},{33:[1,195]},{38:196,42:p,43:g,44:b},{33:[1,197]},{33:[1,198]},{33:[1,199]},{33:[1,200]},{38:201,42:p,43:g,44:b},{33:[1,202]},{38:203,42:p,43:g,44:b},{33:[1,204]},{33:[1,205]},{33:[1,206]},{33:[1,207]},{33:[1,208]},{33:[1,209]},{33:[1,210]},{38:211,42:p,43:g,44:b},{33:[1,212]},{33:[1,213]},{33:[1,214]},{38:215,42:p,43:g,44:b},{33:[1,216]},{38:217,42:p,43:g,44:b},{33:[1,218]},{33:[1,219]},{33:[1,220]},{38:221,42:p,43:g,44:b},t(h,[2,39]),t(h,[2,41]),t(h,[2,40]),t(h,[2,42]),t(h,[2,44]),t(h,[2,43]),t(h,[2,100]),t(h,[2,101]),t(h,[2,98]),t(h,[2,99]),t(h,[2,103]),t(h,[2,102]),t(h,[2,107]),t(h,[2,106]),t(h,[2,105]),t(h,[2,104]),t(h,[2,109]),t(h,[2,108]),t(h,[2,97]),t(h,[2,96]),t(h,[2,95]),t(h,[2,94]),t(h,[2,92]),t(h,[2,93]),t(h,[2,91]),t(h,[2,90]),t(h,[2,89]),t(h,[2,88]),t(h,[2,86]),t(h,[2,87])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)},parse:function(t){var e=this,r=[0],i=[],a=[null],n=[],s=this.table,c="",o=0,l=0,h=n.slice.call(arguments,1),m=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);m.setInput(t,u.yy),u.yy.lexer=m,u.yy.parser=this,void 0===m.yylloc&&(m.yylloc={});var p=m.yylloc;n.push(p);var g=m.options&&m.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,d,f,k,$,x,_,w,T,E={};;){if(d=r[r.length-1],this.defaultActions[d]?f=this.defaultActions[d]:(null==b&&(T=void 0,"number"!=typeof(T=i.pop()||m.lex()||1)&&(T instanceof Array&&(T=(i=T).pop()),T=e.symbols_[T]||T),b=T),f=s[d]&&s[d][b]),void 0===f||!f.length||!f[0]){var L="";for($ in w=[],s[d])this.terminals_[$]&&$>2&&w.push("'"+this.terminals_[$]+"'");L=m.showPosition?"Parse error on line "+(o+1)+":\n"+m.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(L,{text:m.match,token:this.terminals_[b]||b,line:m.yylineno,loc:p,expected:w})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+d+", token: "+b);switch(f[0]){case 1:r.push(b),a.push(m.yytext),n.push(m.yylloc),r.push(f[1]),b=null,l=m.yyleng,c=m.yytext,o=m.yylineno,p=m.yylloc;break;case 2:if(x=this.productions_[f[1]][1],E.$=a[a.length-x],E._$={first_line:n[n.length-(x||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(x||1)].first_column,last_column:n[n.length-1].last_column},g&&(E._$.range=[n[n.length-(x||1)].range[0],n[n.length-1].range[1]]),void 0!==(k=this.performAction.apply(E,[c,l,o,u.yy,f[1],a,n].concat(h))))return k;x&&(r=r.slice(0,-1*x*2),a=a.slice(0,-1*x),n=n.slice(0,-1*x)),r.push(this.productions_[f[1]][0]),a.push(E.$),n.push(E._$),_=s[r[r.length-2]][r[r.length-1]],r.push(_);break;case 3:return!0}}return!0}},k={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===i.length?this.yylloc.first_column:0)+i[i.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,i,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var n in a)this[n]=a[n];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),n=0;n<a.length;n++)if((r=this._input.match(this.rules[a[n]]))&&(!e||r[0].length>e[0].length)){if(e=r,i=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,a[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,i){switch(r){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 29:case 33:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 39;case 12:return 32;case 13:return 37;case 14:return 41;case 15:return 42;case 16:return 43;case 17:return 44;case 18:return 34;case 19:return 28;case 20:return 29;case 21:return 36;case 22:return 31;case 23:return 26;case 24:case 25:return 9;case 26:return 8;case 27:return"CARET";case 28:this.begin("options");break;case 30:return 12;case 31:return 35;case 32:this.begin("string");break;case 34:return 33;case 35:return 30;case 36:return 45;case 37:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[29,30],inclusive:!1},string:{rules:[33,34],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,35,36,37,38],inclusive:!0}}};function $(){this.yy={}}return f.lexer=k,$.prototype=f,f.Parser=$,new $}();g.parser=g;const b=g;let d=t().gitGraph.mainBranchName,f=t().gitGraph.mainBranchOrder,k={},$=null,x={};x[d]={name:d,order:f};let _={};_[d]=$;let w=d,T="LR",E=0;function L(){return p({length:7})}let v={};const M=function(e){if(e=o.sanitizeText(e,t()),void 0===_[e]){let t=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+e+'")');throw t.hash={text:"checkout "+e,token:"checkout "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+e+'"']},t}{w=e;const t=_[w];$=k[t]}};function A(t,e,r){const i=t.indexOf(e);-1===i?t.push(r):t.splice(i,1,r)}function I(t){const e=t.reduce(((t,e)=>t.seq>e.seq?t:e),t[0]);let r="";t.forEach((function(t){r+=t===e?"\t*":"\t|"}));const i=[r,e.id,e.seq];for(let a in _)_[a]===e.id&&i.push(a);if(c.debug(i.join(" ")),e.parents&&2==e.parents.length){const r=k[e.parents[0]];A(t,e,r),t.push(k[e.parents[1]])}else{if(0==e.parents.length)return;{const r=k[e.parents];A(t,e,r)}}I(t=function(t,e){const r=Object.create(null);return t.reduce(((t,i)=>{const a=e(i);return r[a]||(r[a]=!0,t.push(i)),t}),[])}(t,(t=>t.id)))}const R=function(){const t=Object.keys(k).map((function(t){return k[t]}));return t.forEach((function(t){c.debug(t.id)})),t.sort(((t,e)=>t.seq-e.seq)),t},O={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4};let C={};const S=0,B=1,P=2,N=3,G=4;let H={},j={},z=[],D=0,q="LR";const F=t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text");let r=[];r="string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[];for(const i of r){const t=document.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","0"),t.setAttribute("class","row"),t.textContent=i.trim(),e.appendChild(t)}return e},Y=(t,e,r)=>{const i=h().gitGraph,a=t.append("g").attr("class","commit-bullets"),n=t.append("g").attr("class","commit-labels");let s=0;"TB"===q&&(s=30);Object.keys(e).sort(((t,r)=>e[t].seq-e[r].seq)).forEach((t=>{const c=e[t],o="TB"===q?s+10:H[c.branch].pos,l="TB"===q?H[c.branch].pos:s+10;if(r){let t,e=void 0!==c.customType&&""!==c.customType?c.customType:c.type;switch(e){case S:t="commit-normal";break;case B:t="commit-reverse";break;case P:t="commit-highlight";break;case N:t="commit-merge";break;case G:t="commit-cherry-pick";break;default:t="commit-normal"}if(e===P){const e=a.append("rect");e.attr("x",l-10),e.attr("y",o-10),e.attr("height",20),e.attr("width",20),e.attr("class",`commit ${c.id} commit-highlight${H[c.branch].index%8} ${t}-outer`),a.append("rect").attr("x",l-6).attr("y",o-6).attr("height",12).attr("width",12).attr("class",`commit ${c.id} commit${H[c.branch].index%8} ${t}-inner`)}else if(e===G)a.append("circle").attr("cx",l).attr("cy",o).attr("r",10).attr("class",`commit ${c.id} ${t}`),a.append("circle").attr("cx",l-3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${c.id} ${t}`),a.append("circle").attr("cx",l+3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${c.id} ${t}`),a.append("line").attr("x1",l+3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${c.id} ${t}`),a.append("line").attr("x1",l-3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${c.id} ${t}`);else{const r=a.append("circle");if(r.attr("cx",l),r.attr("cy",o),r.attr("r",c.type===N?9:10),r.attr("class",`commit ${c.id} commit${H[c.branch].index%8}`),e===N){const e=a.append("circle");e.attr("cx",l),e.attr("cy",o),e.attr("r",6),e.attr("class",`commit ${t} ${c.id} commit${H[c.branch].index%8}`)}if(e===B){a.append("path").attr("d",`M ${l-5},${o-5}L${l+5},${o+5}M${l-5},${o+5}L${l+5},${o-5}`).attr("class",`commit ${t} ${c.id} commit${H[c.branch].index%8}`)}}}if(j[c.id]="TB"===q?{x:l,y:s+10}:{x:s+10,y:o},r){const t=4,e=2;if(c.type!==G&&(c.customId&&c.type===N||c.type!==N)&&i.showCommitLabel){const r=n.append("g"),a=r.insert("rect").attr("class","commit-label-bkg"),h=r.append("text").attr("x",s).attr("y",o+25).attr("class","commit-label").text(c.id);let m=h.node().getBBox();if(a.attr("x",s+10-m.width/2-e).attr("y",o+13.5).attr("width",m.width+2*e).attr("height",m.height+2*e),"TB"===q&&(a.attr("x",l-(m.width+4*t+5)).attr("y",o-12),h.attr("x",l-(m.width+4*t)).attr("y",o+m.height-12)),"TB"!==q&&h.attr("x",s+10-m.width/2),i.rotateCommitLabel)if("TB"===q)h.attr("transform","rotate(-45, "+l+", "+o+")"),a.attr("transform","rotate(-45, "+l+", "+o+")");else{let t=-7.5-(m.width+10)/25*9.5,e=10+m.width/25*8.5;r.attr("transform","translate("+t+", "+e+") rotate(-45, "+s+", "+o+")")}}if(c.tag){const r=n.insert("polygon"),i=n.append("circle"),a=n.append("text").attr("y",o-16).attr("class","tag-label").text(c.tag);let h=a.node().getBBox();a.attr("x",s+10-h.width/2);const m=h.height/2,u=o-19.2;r.attr("class","tag-label-bkg").attr("points",`\n          ${s-h.width/2-t/2},${u+e}\n          ${s-h.width/2-t/2},${u-e}\n          ${s+10-h.width/2-t},${u-m-e}\n          ${s+10+h.width/2+t},${u-m-e}\n          ${s+10+h.width/2+t},${u+m+e}\n          ${s+10-h.width/2-t},${u+m+e}`),i.attr("cx",s-h.width/2+t/2).attr("cy",u).attr("r",1.5).attr("class","tag-hole"),"TB"===q&&(r.attr("class","tag-label-bkg").attr("points",`\n            ${l},${s+e}\n            ${l},${s-e}\n            ${l+10},${s-m-e}\n            ${l+10+h.width+t},${s-m-e}\n            ${l+10+h.width+t},${s+m+e}\n            ${l+10},${s+m+e}`).attr("transform","translate(12,12) rotate(45, "+l+","+s+")"),i.attr("cx",l+t/2).attr("cy",s).attr("transform","translate(12,12) rotate(45, "+l+","+s+")"),a.attr("x",l+5).attr("y",s+3).attr("transform","translate(14,14) rotate(45, "+l+","+s+")"))}}s+=50,s>D&&(D=s)}))},U=(t,e,r=0)=>{const i=t+Math.abs(t-e)/2;if(r>5)return i;if(z.every((t=>Math.abs(t-i)>=10)))return z.push(i),i;const a=Math.abs(t-e);return U(t,e-a/5,r+1)},K=(t,e,r,i)=>{const a=j[e.id],n=j[r.id],s=((t,e,r)=>Object.keys(r).filter((i=>r[i].branch===e.branch&&r[i].seq>t.seq&&r[i].seq<e.seq)).length>0)(e,r,i);let c,o="",l="",h=0,m=0,u=H[r.branch].index;if(s){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10,u=H[r.branch].index;const t=a.y<n.y?U(a.y,n.y):U(n.y,a.y),e=a.x<n.x?U(a.x,n.x):U(n.x,a.x);c="TB"===q?a.x<n.x?`M ${a.x} ${a.y} L ${e-h} ${a.y} ${l} ${e} ${a.y+m} L ${e} ${n.y-h} ${o} ${e+m} ${n.y} L ${n.x} ${n.y}`:`M ${a.x} ${a.y} L ${e+h} ${a.y} ${o} ${e} ${a.y+m} L ${e} ${n.y-h} ${l} ${e-m} ${n.y} L ${n.x} ${n.y}`:a.y<n.y?`M ${a.x} ${a.y} L ${a.x} ${t-h} ${o} ${a.x+m} ${t} L ${n.x-h} ${t} ${l} ${n.x} ${t+m} L ${n.x} ${n.y}`:`M ${a.x} ${a.y} L ${a.x} ${t+h} ${l} ${a.x+m} ${t} L ${n.x-h} ${t} ${o} ${n.x} ${t-m} L ${n.x} ${n.y}`}else"TB"===q?(a.x<n.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=H[r.branch].index,c=`M ${a.x} ${a.y} L ${n.x-h} ${a.y} ${l} ${n.x} ${a.y+m} L ${n.x} ${n.y}`),a.x>n.x&&(o="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",h=20,m=20,u=H[e.branch].index,c=`M ${a.x} ${a.y} L ${a.x} ${n.y-h} ${l} ${a.x-m} ${n.y} L ${n.x} ${n.y}`),a.x===n.x&&(u=H[e.branch].index,c=`M ${a.x} ${a.y} L ${a.x+h} ${a.y} ${o} ${a.x+m} ${n.y+h} L ${n.x} ${n.y}`)):(a.y<n.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=H[r.branch].index,c=`M ${a.x} ${a.y} L ${a.x} ${n.y-h} ${o} ${a.x+m} ${n.y} L ${n.x} ${n.y}`),a.y>n.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=H[e.branch].index,c=`M ${a.x} ${a.y} L ${n.x-h} ${a.y} ${o} ${n.x} ${a.y-m} L ${n.x} ${n.y}`),a.y===n.y&&(u=H[e.branch].index,c=`M ${a.x} ${a.y} L ${a.x} ${n.y-h} ${o} ${a.x+m} ${n.y} L ${n.x} ${n.y}`));t.append("path").attr("d",c).attr("class","arrow arrow"+u%8)},V={parser:b,db:{getConfig:()=>t().gitGraph,setDirection:function(t){T=t},setOptions:function(t){c.debug("options str",t),t=(t=t&&t.trim())||"{}";try{v=JSON.parse(t)}catch(e){c.error("error while parsing gitGraph options",e.message)}},getOptions:function(){return v},commit:function(e,r,i,a){c.debug("Entering commit:",e,r,i,a),r=o.sanitizeText(r,t()),e=o.sanitizeText(e,t()),a=o.sanitizeText(a,t());const n={id:r||E+"-"+L(),message:e,seq:E++,type:i||O.NORMAL,tag:a||"",parents:null==$?[]:[$.id],branch:w};$=n,k[n.id]=n,_[w]=n.id,c.debug("in pushCommit "+n.id)},branch:function(e,r){if(e=o.sanitizeText(e,t()),void 0!==_[e]){let t=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+e+'")');throw t.hash={text:"branch "+e,token:"branch "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+e+'"']},t}_[e]=null!=$?$.id:null,x[e]={name:e,order:r?parseInt(r,10):null},M(e),c.debug("in createBranch")},merge:function(e,r,i,a){e=o.sanitizeText(e,t()),r=o.sanitizeText(r,t());const n=k[_[w]],s=k[_[e]];if(w===e){let t=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw t.hash={text:"merge "+e,token:"merge "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},t}if(void 0===n||!n){let t=new Error('Incorrect usage of "merge". Current branch ('+w+")has no commits");throw t.hash={text:"merge "+e,token:"merge "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},t}if(void 0===_[e]){let t=new Error('Incorrect usage of "merge". Branch to be merged ('+e+") does not exist");throw t.hash={text:"merge "+e,token:"merge "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+e]},t}if(void 0===s||!s){let t=new Error('Incorrect usage of "merge". Branch to be merged ('+e+") has no commits");throw t.hash={text:"merge "+e,token:"merge "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},t}if(n===s){let t=new Error('Incorrect usage of "merge". Both branches have same head');throw t.hash={text:"merge "+e,token:"merge "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},t}if(r&&void 0!==k[r]){let t=new Error('Incorrect usage of "merge". Commit with id:'+r+" already exists, use different custom Id");throw t.hash={text:"merge "+e+r+i+a,token:"merge "+e+r+i+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+e+" "+r+"_UNIQUE "+i+" "+a]},t}const l={id:r||E+"-"+L(),message:"merged branch "+e+" into "+w,seq:E++,parents:[null==$?null:$.id,_[e]],branch:w,type:O.MERGE,customType:i,customId:!!r,tag:a||""};$=l,k[l.id]=l,_[w]=l.id,c.debug(_),c.debug("in mergeBranch")},cherryPick:function(e,r,i){if(c.debug("Entering cherryPick:",e,r,i),e=o.sanitizeText(e,t()),r=o.sanitizeText(r,t()),i=o.sanitizeText(i,t()),!e||void 0===k[e]){let t=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw t.hash={text:"cherryPick "+e+" "+r,token:"cherryPick "+e+" "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},t}let a=k[e],n=a.branch;if(a.type===O.MERGE){let t=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw t.hash={text:"cherryPick "+e+" "+r,token:"cherryPick "+e+" "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},t}if(!r||void 0===k[r]){if(n===w){let t=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw t.hash={text:"cherryPick "+e+" "+r,token:"cherryPick "+e+" "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},t}const t=k[_[w]];if(void 0===t||!t){let t=new Error('Incorrect usage of "cherry-pick". Current branch ('+w+")has no commits");throw t.hash={text:"cherryPick "+e+" "+r,token:"cherryPick "+e+" "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},t}const s={id:E+"-"+L(),message:"cherry-picked "+a+" into "+w,seq:E++,parents:[null==$?null:$.id,a.id],branch:w,type:O.CHERRY_PICK,tag:i??"cherry-pick:"+a.id};$=s,k[s.id]=s,_[w]=s.id,c.debug(_),c.debug("in cherryPick")}},checkout:M,prettyPrint:function(){c.debug(k);I([R()[0]])},clear:function(){k={},$=null;let e=t().gitGraph.mainBranchName,r=t().gitGraph.mainBranchOrder;_={},_[e]=null,x={},x[e]={name:e,order:r},w=e,E=0,l()},getBranchesAsObjArray:function(){return Object.values(x).map(((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)})).sort(((t,e)=>t.order-e.order)).map((({name:t})=>({name:t})))},getBranches:function(){return _},getCommits:function(){return k},getCommitsArray:R,getCurrentBranch:function(){return w},getDirection:function(){return T},getHead:function(){return $},setAccTitle:e,getAccTitle:r,getAccDescription:i,setAccDescription:a,setDiagramTitle:n,getDiagramTitle:s,commitType:O},renderer:{draw:function(t,e,r,i){H={},j={},C={},D=0,z=[],q="LR";const a=h(),n=a.gitGraph;c.debug("in gitgraph renderer",t+"\n","id:",e,r),C=i.db.getCommits();const s=i.db.getBranchesAsObjArray();q=i.db.getDirection();const o=m(`[id="${e}"]`);let l=0;s.forEach(((t,e)=>{const r=F(t.name),i=o.append("g"),a=i.insert("g").attr("class","branchLabel"),s=a.insert("g").attr("class","label branch-label");s.node().appendChild(r);let c=r.getBBox();H[t.name]={pos:l,index:e},l+=50+(n.rotateCommitLabel?40:0)+("TB"===q?c.width/2:0),s.remove(),a.remove(),i.remove()})),Y(o,C,!1),n.showBranches&&((t,e)=>{const r=h().gitGraph,i=t.append("g");e.forEach(((t,e)=>{const a=e%8,n=H[t.name].pos,s=i.append("line");s.attr("x1",0),s.attr("y1",n),s.attr("x2",D),s.attr("y2",n),s.attr("class","branch branch"+a),"TB"===q&&(s.attr("y1",30),s.attr("x1",n),s.attr("y2",D),s.attr("x2",n)),z.push(n);let c=t.name;const o=F(c),l=i.insert("rect"),h=i.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+a);h.node().appendChild(o);let m=o.getBBox();l.attr("class","branchLabelBkg label"+a).attr("rx",4).attr("ry",4).attr("x",-m.width-4-(!0===r.rotateCommitLabel?30:0)).attr("y",-m.height/2+8).attr("width",m.width+18).attr("height",m.height+4),h.attr("transform","translate("+(-m.width-14-(!0===r.rotateCommitLabel?30:0))+", "+(n-m.height/2-1)+")"),"TB"===q&&(l.attr("x",n-m.width/2-10).attr("y",0),h.attr("transform","translate("+(n-m.width/2-5)+", 0)")),"TB"!==q&&l.attr("transform","translate(-19, "+(n-m.height/2)+")")}))})(o,s),((t,e)=>{const r=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach((t=>{const i=e[t];i.parents&&i.parents.length>0&&i.parents.forEach((t=>{K(r,e[t],i,e)}))}))})(o,C),Y(o,C,!0),u.insertTitle(o,"gitTitleText",n.titleTopMargin,i.db.getDiagramTitle()),y(void 0,o,n.diagramPadding,n.useMaxWidth??a.useMaxWidth)}},styles:t=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map((e=>`\n        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }\n        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }\n        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }\n        .label${e}  { fill: ${t["git"+e]}; }\n        .arrow${e} { stroke: ${t["git"+e]}; }\n        `)).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${t.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}\n  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}\n  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }\n  .tag-hole { fill: ${t.textColor}; }\n\n  .commit-merge {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n`};export{V as diagram};
