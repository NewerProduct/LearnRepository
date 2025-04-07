//简易封装自己的Axios
//1.新建MyAxios函数，该函数接收配置对象
function MyAxios(config) {
    //返回promise对象 - 为什么返回promise对象？因为有了promise对象我们就可以通过.then()来处理成功的数据，通过.catch()来处理失败的数据了
    return new Promise((resolve, reject) => {
        //新建xhr对象
        const xhr = new XMLHttpRequest()
        //判断config对象中有没有传递参数
        if (config.params) {
            //新建一个参数对象 -这一步通过新建查询参数对象来完成转换的
            const paramsObj = new URLSearchParams(config.params)
            //把参数对象转换为参数字符串
            const queryString = paramsObj.toString() 
            console.log(queryString); // pname=%E5%8C%97%E4%BA%AC&cname=%E5%8C%97%E4%BA%AC%E5%B8%82
            //把参数拼接在url后面
            // config.url = config.url + '?' + queryString
            config.url += '?' + queryString
        }
        //判断请求方式,默认为get，如果用户传入了method配置项，则使用用户传入的
        xhr.open(config.method || 'get', config.url)
        //写入回调函数
        xhr.addEventListener('loadend', () => {
            //判断是否请求成功
            if (xhr.status >= 200 && xhr.status <= 300) {
                //请求成功 - 调用resolve函数
                resolve(JSON.parse(xhr.responseText))
            } else {
                //失败调用reject函数
                reject(new Error(xhr.response))
            }
        })
        //发送请求
        //判断有没有向服务器提交数据
        if(config.data) {
            //处理数据
            const dataJsonStr = JSON.stringify(config.data)
            xhr.setRequestHeader('Content-Type','application/json')
            xhr.send(dataJsonStr)
        }else {
            //如果没有请求体数据，那就直接发送
            xhr.send()
        }
        
    })
}
