(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{399:function(s,t,a){"use strict";a.r(t);var n=a(11),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"多文件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多文件配置"}},[s._v("#")]),s._v(" 多文件配置")]),s._v(" "),a("p",[s._v("自版本 "),a("code",[s._v("4.23.0")]),s._v(" 起，V2Ray 程序支持使用多个配置文件。")]),s._v(" "),a("p",[s._v("多配置文件的主要作用在于分散不同作用模块配置，便于管理和维护。该功能主要考虑是为了丰富 V2Ray 的生态链，比如对于 GUI 的客户端，一般只实现节点选择等固定的功能，对于太复杂的配置难以图形化实现；只需留一个 "),a("code",[s._v("confdir")]),s._v(" 的自定义配置目录供配置复杂的功能；对于服务器的部署脚本，只需往 "),a("code",[s._v("confdir")]),s._v(" 添加文件即可实现配置多种协议，等等。")]),s._v(" "),a("h2",{attrs:{id:"多文件启动信息例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多文件启动信息例子"}},[s._v("#")]),s._v(" 多文件启动信息例子")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("启动信息中会提示依次读入的每个配置文件，留意启动信息是否符合你预设的顺序。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ v2ray -c v2ray.json -c 00_base.json -c 01_info.json -c 02_log.json -c outbound.json\nV2Ray v4.23.0-version "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20200311")]),s._v("-000000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("go1.13.8 linux/mipsle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nA unified platform "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" anti-censorship.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("/03/22 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(":40:00 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" v2ray.com/core/common/platform/ctlcmd: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("v2ctl message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nv2ctl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Read config:  00_base.json\nv2ctl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Read config:  01_info.json\nv2ctl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Read config:  02_log.json\nv2ctl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Read config:  outbound.json\nv2ctl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" outbound.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" updated outbound with tag:  proxy\n")])])]),a("h2",{attrs:{id:"用法说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法说明"}},[s._v("#")]),s._v(" 用法说明")]),s._v(" "),a("p",[s._v("命令行的 "),a("code",[s._v("-config")]),s._v(" 可以多次指定。（也可以简写为 "),a("code",[s._v("-c")]),s._v(" ，完全等效。）")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("v2ray -config base.json -config cf1.json -c cf2.json -c cf3.json\n")])])]),a("p",[s._v("或者用 "),a("code",[s._v("-confdir")]),s._v(" 参数指定一个目录，程序会按文件名顺序读取目录内的 "),a("code",[s._v(".json")]),s._v(" 文件。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("v2ray -confdir /etc/v2ray/confs\n")])])]),a("p",[s._v("也可组合使用。（注意，目录内的配置级别作用在 "),a("code",[s._v("-config")]),s._v(" 参数后，不管 "),a("code",[s._v("-confdir")]),s._v(" 参数的位置）")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("v2ray -c cf1.json -c cf2.json -confdir /etc/v2ray/confs\n")])])]),a("p",[s._v("也可使用 "),a("RouterLink",{attrs:{to:"/config/env.html#多配置目录"}},[s._v("环境变量")]),s._v(" "),a("code",[s._v("v2ray.location.confdir")]),s._v(" 或 "),a("code",[s._v("V2RAY_LOCATION_CONFDIR")]),s._v(" 指定 "),a("code",[s._v("confdir")]),s._v("。参数 "),a("code",[s._v("-confdir")]),s._v(" 的作用优先于环境变量，如果参数指定了有效的目录则不再读取环境变量中的路径。")],1),s._v(" "),a("h2",{attrs:{id:"规则说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则说明"}},[s._v("#")]),s._v(" 规则说明")]),s._v(" "),a("h4",{attrs:{id:"普通对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通对象"}},[s._v("#")]),s._v(" 普通对象（"),a("code",[s._v("{}")]),s._v("）")]),s._v(" "),a("p",[a("strong",[s._v("在 json 的顶级对象当中，后者覆盖或补充前者。")])]),s._v(" "),a("p",[s._v("比如：")]),s._v(" "),a("ul",[a("li",[s._v("base.json")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"stats"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"transport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"routing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("outbounds.json")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("以多配置启动 V2Ray：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("v2ray -c base.json -c outbounds.json\n")])])]),a("p",[s._v("这两个配置文件的就等效于合成一起的整配置。当需要修改出口节点，只需要修改 "),a("code",[s._v("outbounds.json")]),s._v(" 内容。")]),s._v(" "),a("p",[s._v("如果需要改编日志 log 的级别，也不需要改 "),a("code",[s._v("base.json")]),s._v("，只需后续增加一个配置：")]),s._v(" "),a("ul",[a("li",[s._v("debuglog.json")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"loglevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"debug"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("启动时放置在 base 后，即可输出 debug 级别的日志：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("v2ray -c base.json -c outbounds.json -c debuglog.json\n")])])]),a("h4",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组（"),a("code",[s._v("[]")]),s._v("）")]),s._v(" "),a("p",[s._v("在 json 配置中的"),a("code",[s._v("inbounds")]),s._v("和"),a("code",[s._v("outbounds")]),s._v("是数组结构，他们有特殊的规则：")]),s._v(" "),a("ul",[a("li",[s._v("当配置中的数组元素有 2 或以上，覆盖前者的 inbounds/oubounds；")]),s._v(" "),a("li",[s._v("当配置中的数组元素只有 1 个时，查找原有"),a("code",[s._v("tag")]),s._v("相同的元素进行覆盖；若无法找到：\n"),a("ul",[a("li",[s._v("对于 inbounds，添加至最后（inbounds 内元素顺序无关）")]),s._v(" "),a("li",[s._v("对于 outbounds，添加至最前（outbounds 默认首选出口）；但如果文件名含有 tail（大小写均可），添加至最后。")])])])]),s._v(" "),a("p",[s._v("借助多配置，可以很方便为原有的配置添加不同协议的 inbound，而不必修改原有配置。")]),s._v(" "),a("p",[s._v("以下例子不是有效配置，只为展示上述规则。")]),s._v(" "),a("ul",[a("li",[s._v("000.json")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("001.json")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("002.json")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4321")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("三个配置将会合成为：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"socks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4321")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <--- 002顺序在000后，因此覆盖tag为socks的inbound端口为4321")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"推荐的多文件列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐的多文件列表"}},[s._v("#")]),s._v(" 推荐的多文件列表")]),s._v(" "),a("p",[s._v("执行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("BASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 00_log 01_api 02_dns 03_routing 04_policy 05_inbounds 06_outbounds 07_transport 08_stats 09_reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/v2ray/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASE")]),s._v('.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("BASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 00_log 01_api 02_dns 03_routing 04_policy 05_inbounds 06_outbounds 07_transport 08_stats 09_reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/etc/v2ray/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASE")]),s._v('.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── 00_log.json\n├── 01_api.json\n├── 02_dns.json\n├── 03_routing.json\n├── 04_policy.json\n├── 05_inbounds.json\n├── 06_outbounds.json\n├── 07_transport.json\n├── 08_stats.json\n└── 09_reverse.json\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" directories, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" files\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);