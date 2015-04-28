1、html直接创建src为about:blank的iframe，能够获取到contentWindow，document，能够通过document.write写入html，并操作dom。
2、js动态创建src为about:blank的iframe，能够获取到contentWindow，document，能够通过document.write写入html，并操作dom。
3、document.write之后，执行close关闭，否则浏览器会转圈儿。
