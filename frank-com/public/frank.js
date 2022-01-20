window.xxx = (data)=>{console.log(data)} // 成回调函数了
const script = document.createElement('script')
script.src = "http://qq.com:8888/friends.js"
document.body.appendChild(script)
/**
 * CORS 测试代码
const request = new XMLHttpRequest();
request.open('GET','http://qq.com:8888/friends.json')
request.onreadystatechange = ()=>{
    if (request.readyState===4&&request.status===200){
        console.log(request.response)
    }
}
request.send()
*/