"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>T});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,T=u["".concat(o,".").concat(m)]||u[m]||E[m]||s;return n?r.createElement(T,i(i({ref:t},p),{},{components:n})):r.createElement(T,i({ref:t},p))}));function T(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={},i="Initscripts SQL",l={unversionedId:"initscripts_sql",id:"initscripts_sql",title:"Initscripts SQL",description:"100_database.sql",source:"@site/appendix/initscripts_sql.md",sourceDirName:".",slug:"/initscripts_sql",permalink:"/lernportfolio-ZZELAV/appendix/initscripts_sql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Appendix",permalink:"/lernportfolio-ZZELAV/appendix/"},next:{title:"LB2 Concept Map",permalink:"/lernportfolio-ZZELAV/appendix/lb2_concept_map"}},o={},c=[{value:"100_database.sql",id:"100_databasesql",level:2},{value:"101_tableTask.sql",id:"101_tabletasksql",level:2},{value:"102_tableUser.sql",id:"102_tableusersql",level:2},{value:"103_createAdminUser.sql",id:"103_createadminusersql",level:2},{value:"999_testData.sql",id:"999_testdatasql",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initscripts-sql"},"Initscripts SQL"),(0,a.kt)("h2",{id:"100_databasesql"},"100_database.sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET NAMES utf8;\nSET time_zone = '+00:00';\nSET foreign_key_checks = 0;\n\nSET NAMES utf8mb4;\n\nDROP DATABASE IF EXISTS `meeting_protocol`;\nCREATE DATABASE `meeting_protocol` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;\nUSE `meeting_protocol`;\n")),(0,a.kt)("h2",{id:"101_tabletasksql"},"101_tableTask.sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET NAMES utf8;\nSET time_zone = '+00:00';\nSET foreign_key_checks = 0;\n\nUSE `meeting_protocol`;\n\nSET NAMES utf8mb4;\n\nDROP TABLE IF EXISTS `task`;\nCREATE TABLE `task` (\n  `id` int NOT NULL AUTO_INCREMENT,\n  `description` varchar(255) NOT NULL,\n  `assignedTo` varchar(255) NOT NULL,\n  `status` varchar(255) NOT NULL,\n  `completionDate` varchar(255) NOT NULL,\n  `notes` text NOT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n")),(0,a.kt)("h2",{id:"102_tableusersql"},"102_tableUser.sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET NAMES utf8;\nSET time_zone = '+00:00';\nSET foreign_key_checks = 0;\n\nUSE `meeting_protocol`;\n\nSET NAMES utf8mb4;\n\nDROP TABLE IF EXISTS `user`;\nCREATE TABLE `user` (\n  `id` int NOT NULL AUTO_INCREMENT,\n  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,\n  `username` varchar(255) NOT NULL,\n  `password` varchar(255) NOT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n")),(0,a.kt)("h2",{id:"103_createadminusersql"},"103_createAdminUser.sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET NAMES utf8;\nSET time_zone = '+00:00';\nSET foreign_key_checks = 0;\nSET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';\n\nUSE `meeting_protocol`;\n\nSET NAMES utf8mb4;\n\nINSERT INTO `user` (`id`, `full_name`, `username`, `password`) VALUES\n(1, 'Admin',    'admin',    'admin');\n")),(0,a.kt)("h2",{id:"999_testdatasql"},"999_testData.sql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET NAMES utf8;\nSET time_zone = '+00:00';\nSET foreign_key_checks = 0;\nSET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';\n\nUSE `meeting_protocol`;\n\nSET NAMES utf8mb4;\n\nINSERT INTO `task` (`id`, `description`, `assignedTo`, `status`, `completionDate`, `notes`) VALUES\n(1, 'Test task 1',  'Testuser', 'In progress',  '', 'Test task from DB'),\n(2, 'Test task 2',  'Testuser', 'Completed',    '', 'Test task from DB');\n")))}u.isMDXComponent=!0}}]);