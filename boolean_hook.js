var className = ""; // class of method you're hooking
var funcName = ""; // method you're hooking
var retVal = 0x0; // return value -- 0x0 = false, 0x1 = true

var hook = eval('ObjC.classes.' + className + '["- ' + funcName + '"]');

Interceptor.attach(hook.implementation, {
	onLeave: function(oldRetVal) {
		send("function hooked: [" + className + " " + funcName + "]");
		oldRetVal.replace(retVal);
		send("new return value: " + oldRetVall.toString());
	}
});
