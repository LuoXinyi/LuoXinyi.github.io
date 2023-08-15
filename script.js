const myWebsiteMap = new Map();

function onload(){
	myWebsiteMap.set("百度","https://www.baidu.com");
	myWebsiteMap.set("信阳农林学院","https://www.xyafu.edu.cn")
}


function generateLink() {
    var websiteName = document.getElementById("website-name").value;
	var a = document.getElementById("websiteLink");
	a.textContent = myWebsiteMap.get(websiteName);
	a.href=myWebsiteMap.get(websiteName);

}