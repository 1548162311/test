window.onload = function() {
    var isCalbuttonClick = false; //是否点击 +，-，*，/
    var isfirstNum = false; //是否是第一个数字
    var val = 0; //放置输入的值
    var xval = 0; //保存转换Number类型的值
    var temp = 0; //保存第一次输入的值   
    var oper = ""; //保存输入的操作符
    var hasdot = false; //是否点击了小数点
    var sym = false;
    var canBack = false;
    dotClick = function(e) {
        hasdot = true;
    }

    syClick = function() { //点击为负数
        sym = true;
    }

    numClick = function(e) {
        val = e.innerText
        canBack = true;
        var xsval = document.getElementById("shows");
        if (xsval.innerText == "0" || isCalbuttonClick) {
            if (hasdot) {
                xsval.innerText = "0." + val;
                hasdot = false;
            } else if (sym) {
                xsval.innerText = "-" + val;
                sym = false;
            } else {
                xsval.innerText = val;
            }

            isCalbuttonClick = false;
        } else {
            xsval.innerText += val; //连续输入数字(String类型)
        }
        //转换Number类型
        xval = parseFloat(xsval.innerText);

    }
    funClick = function(e) {
        canBack = false;
        oper = e.innerText;
        if (e.innerText == "+") {
            isCalbuttonClick = true;
            var xsval = document.getElementById("shows");
            if (isfirstNum) {
                xsval.innerText = calculator.calc(temp, xval, oper);
                xval = 0;
            }
            //保存上次计算结果，并对字符串进行转换Number类型
            temp = parseFloat(xsval.innerText);

            isfirstNum = true;

        } else if (e.innerText == "-") {
            isCalbuttonClick = true;
            var xsval = document.getElementById("shows");
            if (isfirstNum) {
                xsval.innerText = calculator.calc(temp, xval, oper);
                xval = 0;
            }
            //保存上次计算结果，并对字符串进行转换Number类型
            temp = parseFloat(xsval.innerText);
            isfirstNum = true;

        } else if (e.innerText == "*") {

            isCalbuttonClick = true;
            var xsval = document.getElementById("shows");
            if (isfirstNum) {
                xsval.innerText = calculator.calc(temp, xval, oper);
                xval = 0;
            }
            //保存上次计算结果，并对字符串进行转换Number类型
            temp = parseFloat(xsval.innerText);

            isfirstNum = true;

        } else if (e.innerText == "/") {

            isCalbuttonClick = true;
            var xsval = document.getElementById("shows");
            if (isfirstNum) {
                xsval.innerText = calculator.calc(temp, xval, oper);
                xval = 0;
            }
            //保存上次计算结果，并对字符串进行转换Number类型
            temp = parseFloat(xsval.innerText);

            isfirstNum = true;

        }
    }

    //创建对象
    var calculator = new Calculator();

    equClick = function(e) {
        var xsval = document.getElementById("shows");
        if (e.innerText == "=") {
        	isfirstNum=false;
            //window.alert(xval);
            //调用对象方法
            xsval.innerText = calculator.calc(temp, xval, oper);
        }
    }

    function Calculator() {

        this.calc = function(num1, num2, oper) {
            var res = 0;
            switch (oper) {
                case "+":
                    res = num1 + num2;
                    break;
                case "-":
                    res = num1 - num2;
                    break;
                case "*":
                    res = num1 * num2;
                    break;
                case "/":
                    if (num2 != 0) {
                        res = num1 / num2;
                    } else {
                        alert("错误（不能除0）");
                    }
                    break;
            }
            return res;
        }
    }



    inputPCB = function(e) {
        var xsval = document.getElementById("shows");
        if (e.innerText == "清除") {
            isCalbuttonClick = false;
            isfirstNum = false;
            val = 0;
            xval = 0;
            temp = 0;
            oper = "";
            hasdot = false;
            sym = false;
            xsval.innerText = "0";
        } else if (e.innerText == "后退") {
            /*这个功能还没有实现，有兴趣的朋友可以自己做一做*/
            var value = xsval.innerText
            if (canBack) {
                xsval.innerText = value.substring(0, value.length - 1);
                if (value.substring(0, value.length - 1).length == 0) {
                    xsval.innerText = "0";
                }
            }

        }
    }

}
