
export var data_A = {
  "name": "流程A",
  "nodeList": [
    {
      "id": "nodeA",
      "name": "流程A-节点A",
      "type": "task",
      "left": "26px",
      "top": "161px",
      "ico": "icon-daqilitiguancex iconfont",
      "state": "warning"
    },
    {
      "id": "nodeB",
      "name": "流程A-节点B",
      "type": "task",
      "left": "340px",
      "top": "161px",
      "ico": "icon-VE iconfont",
      "state": "warning"
    },
    {
      "id": "nodeC",
      "name": "流程A-节点C",
      "type": "task",
      "left": "739px",
      "top": "161px",
      "ico": "icon-rongqi iconfont",
      "state": "warning"
    }
  ],
  "lineList": [{
    "from": "nodeA",
    "to": "nodeB",
    "label": "条件AB",
    "connector": "Bezier",
    // "paintStyle": { "strokeWidth": 2, "stroke": "#1879FF" }
  }, {
    "from": "nodeB",
    "to": "nodeC"
  }]
}

