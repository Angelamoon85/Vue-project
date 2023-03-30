# project-v2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build

### 分数地图资源

```http://192.144.199.210:8080/editor/index.html?chart_id=7Ph0yZtNoJ1JhGDl

### Lints and fixes files
```
npm run lint
```
###接口地址
[https://www.showdoc.com.cn/jinducasey/8321036098744323]
密码:jinduVIP
登录的用户名和密码符合检验规则即可

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
###设置代理解决跨域问题
开发阶段设置代理解决跨域问题
打开vue.config.js
module.exports={
    devServer:{
        open:true,
        proxy:{
            '/api':{
                target:'http://1.116.64.64:5004/api2/',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
配置环境变量(for example)
开发环境http://localhost:8080
生产环境 http://testapi.com
官方文档

        this.$nextTick(() => {this.$refs['form'].resetFields();});


###nginx 部署项目
1:yarn build打包Vue项目
2：打开ngnix.conf文件，配置对应的信息
location/{
    root C:\Users\17542\Desktop\project-v2\dist;
    index index.html index.htm;
    try_files $url $url/@router;

}
location $router{
    reWrite ^.*$/index.html last;
}
#   V u e - p r o j e c t  
 