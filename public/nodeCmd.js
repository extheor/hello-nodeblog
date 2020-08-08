// 自动执行gulp命令的文件
var nodeCmd = require("node-cmd");

function runCmdTest() {
    nodeCmd.get(
        "gulp",

        function (err, data, stderr) {
            console.log(data);
        }
    );

    nodeCmd.run("gulp");
}
runCmdTest();
