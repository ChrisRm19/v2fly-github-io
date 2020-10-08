(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{424:function(e,t,a){"use strict";a.r(t);var o=a(18),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"step-3-start-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-start-development"}},[e._v("#")]),e._v(" Step 3: Start development")]),e._v(" "),a("h2",{attrs:{id:"basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[e._v("#")]),e._v(" Basic")]),e._v(" "),a("h3",{attrs:{id:"version-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-control"}},[e._v("#")]),e._v(" version control")]),e._v(" "),a("p",[e._v("Git")]),e._v(" "),a("h3",{attrs:{id:"branch-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch-branch"}},[e._v("#")]),e._v(" Branch (Branch)")]),e._v(" "),a("p",[e._v("This project only uses one branch, namely master. All changes are submitted to the master, and make sure that the master is compilable and usable at any time.")]),e._v(" "),a("h3",{attrs:{id:"release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release"}},[e._v("#")]),e._v(" Release")]),e._v(" "),a("p",[e._v("Try to use automated tools to release, such as v2ray-core using Travis-ci as an automated compilation and release tool.")]),e._v(" "),a("h3",{attrs:{id:"reference-other-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-other-projects"}},[e._v("#")]),e._v(" Reference other projects")]),e._v(" "),a("ul",[a("li",[e._v("Golang\n"),a("ul",[a("li",[e._v("The product code can only use the golang standard library, that is, the package whose name does not contain any URL;")]),e._v(" "),a("li",[e._v("The test code can use golang.org/x/...;")]),e._v(" "),a("li",[e._v("If you need to reference other projects, please create an Issue in advance for discussion;")])])]),e._v(" "),a("li",[e._v("other\n"),a("ul",[a("li",[e._v("As long as the agreement between the two parties is not violated (this project is MIT), and tools that are helpful to the project can be used.")])])])]),e._v(" "),a("h2",{attrs:{id:"development-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-process"}},[e._v("#")]),e._v(" Development Process")]),e._v(" "),a("h3",{attrs:{id:"before-writing-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-writing-code"}},[e._v("#")]),e._v(" Before writing code")]),e._v(" "),a("p",[e._v("If you find any problems, or have any ideas about the project, please create an Issue discussion immediately to reduce duplication of work and time spent on the code.")]),e._v(" "),a("h3",{attrs:{id:"modify-the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-code"}},[e._v("#")]),e._v(" Modify the code")]),e._v(" "),a("ul",[a("li",[e._v("Golang\n"),a("ul",[a("li",[e._v("Please refer to "),a("a",{attrs:{href:"https://golang.org/doc/effective_go.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Effective Go"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("Please run before every commit: gofmt -w v2ray.com/core/")]),e._v(" "),a("li",[e._v("Before each commit, please make sure that the test passes: go test v2ray.com/core/...")]),e._v(" "),a("li",[e._v("Before submitting a PR, please ensure that the newly added code has more than 70% code coverage.")])])]),e._v(" "),a("li",[e._v("other\n"),a("ul",[a("li",[e._v("Please pay attention to the readability of the code")])])])]),e._v(" "),a("h3",{attrs:{id:"pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[e._v("#")]),e._v(" Pull Request")]),e._v(" "),a("ul",[a("li",[e._v("Please run "),a("code",[e._v("git pull")]),e._v(" before submitting the PR to ensure that the merge can proceed smoothly;")]),e._v(" "),a("li",[e._v("A PR only does one thing. If there are multiple bug fixes, please submit a PR for each bug;")]),e._v(" "),a("li",[e._v("Due to Golang's special requirements (Package path), the PR process of the Go project is different from other projects:\n"),a("ol",[a("li",[e._v("Fork this project first and create your own github.com/your/v2ray-core;")]),e._v(" "),a("li",[e._v("Run in your Go workspace: "),a("code",[e._v("go get -u v2ray.com/core/...")]),e._v(";")]),e._v(" "),a("li",[e._v("Run in the v2ray-core directory created by go get: "),a("code",[e._v("git remote add fork https://github.com/you/cooltool.git")]),e._v(";")]),e._v(" "),a("li",[e._v("Then you can modify the code in v2ray-core. Since this is a v2ray clone, the import path will not be affected;")]),e._v(" "),a("li",[e._v("After the modification is completed, run: "),a("code",[e._v("git push fork")]),e._v(";")]),e._v(" "),a("li",[e._v("Then go to your fork (that is, v2ray.com/core) and send a PR;")]),e._v(" "),a("li",[e._v("The above content is modified from "),a("a",{attrs:{href:"http://blog.campoy.cat/2014/03/github-and-go-forking-pull-requests-and.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),a("OutboundLink")],1),e._v(".")])])])]),e._v(" "),a("h3",{attrs:{id:"modifications-to-the-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modifications-to-the-code"}},[e._v("#")]),e._v(" Modifications to the code")]),e._v(" "),a("h4",{attrs:{id:"functional-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional-issues"}},[e._v("#")]),e._v(" Functional issues")]),e._v(" "),a("p",[e._v("Please submit at least one test case (Test Case) to verify the changes to existing functions.")]),e._v(" "),a("h4",{attrs:{id:"performance-related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-related"}},[e._v("#")]),e._v(" Performance related")]),e._v(" "),a("p",[e._v("Please submit the necessary test data to prove the performance defects of the existing code or the performance improvement of the new code.")]),e._v(" "),a("h4",{attrs:{id:"new-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-function"}},[e._v("#")]),e._v(" new function")]),e._v(" "),a("ul",[a("li",[e._v("If the new function does not affect the existing function, please provide a switch (such as flag) that can be turned on/off, and keep the new function closed by default;")]),e._v(" "),a("li",[e._v("Before developing a large new feature (such as adding a new protocol), please submit an issue first, and then develop it after the discussion.")])]),e._v(" "),a("h4",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[e._v("#")]),e._v(" other")]),e._v(" "),a("p",[e._v("As the case may be.")]),e._v(" "),a("h2",{attrs:{id:"v2ray-coding-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-coding-standard"}},[e._v("#")]),e._v(" V2Ray coding standard")]),e._v(" "),a("p",[e._v("The following content applies to Golang code in V2Ray.")]),e._v(" "),a("h3",{attrs:{id:"code-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-structure"}},[e._v("#")]),e._v(" Code structure")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("v2ray-core\n├── app // application module\n│ ├── router // routing\n├── common // common code\n├── proxy // communication protocol\n│ ├── blackhole\n│ ├── dokodemo-door\n│ ├── freedom\n│ ├── socks\n│ ├── vmess\n├── transport // Transport module\n")])])]),a("h3",{attrs:{id:"coding-standards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-standards"}},[e._v("#")]),e._v(" Coding Standards")]),e._v(" "),a("p",[e._v("It is basically the same as the official Golang recommended practice, with some exceptions. I write it here so that everyone is familiar with Golang.")]),e._v(" "),a("h4",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" name")]),e._v(" "),a("ul",[a("li",[e._v("Try to use a single English word for file and directory names, such as hello.go;\n"),a("ul",[a("li",[e._v("If there is no way, the directory uses a connecting line/file name to connect two (or more words) with an underscore, such as hello-world/hello_again.go;")]),e._v(" "),a("li",[e._v("The test code ends with _test.go;")])])]),e._v(" "),a("li",[e._v("The type uses Pascal nomenclature, such as ConnectionHandler;\n"),a("ul",[a("li",[e._v("Lower case is not mandatory for abbreviations, that is, HTML does not have to be written as Html;")])])]),e._v(" "),a("li",[e._v("Public member variables also use Pascal nomenclature;")]),e._v(" "),a("li",[e._v("Private member variables [small camel nomenclature] (https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB), such as "),a("code",[e._v("privateAttribute")]),e._v(";")]),e._v(" "),a("li",[e._v("In order to facilitate refactoring, it is recommended that all methods use Pascal nomenclature;\n"),a("ul",[a("li",[e._v("Although Golang distinguishes between public and private methods by case, it is not convenient in practice.")]),e._v(" "),a("li",[e._v("Put completely private types into "),a("code",[e._v("internal")]),e._v(".")])])])]),e._v(" "),a("h4",{attrs:{id:"content-organization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-organization"}},[e._v("#")]),e._v(" Content organization")]),e._v(" "),a("ul",[a("li",[e._v("A file contains a main type, and its related private functions, etc.;")]),e._v(" "),a("li",[e._v("Test-related files, such as tools such as Mock, are placed in the testing subdirectory;")])])])}),[],!1,null,null,null);t.default=r.exports}}]);