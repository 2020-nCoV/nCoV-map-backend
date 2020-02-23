# 后端开发规范

## api响应示例
```
{
    "status": {
        "code": "400",
        "msg": "请选择疫情数据时间"
    },
    "data": {}
}
```
```
{
    "status": {
        "code": 200,
        "msg": "获取疫情数据成功"
    },
    "data": {
        "k1":"v1",
        "k2":"v2",
        ...
        "kn":"vn"
    }
}
```

## api文档示例

### 接口：疫情

#### 疫情数据添加
##### POST /ncov/add
+ Request : 
```
{
    areaid:    区域代码，数字
    longitude: 经度, 字符串
    latitude:  纬度, 字符串
    normal:    经纬度标准, 字符串
    infection: 感染人数, 数字
    doubt:     疑似人数, 数字
    serious:   重症人数, 数字
    death:     死亡人数, 数字
    rehab:     治愈人数，数字
}
```
+ Resp
```$xslt
{
    "status": {
        "code": "0",
        "msg": "创建"
    },
    "data": {}
}
```
##### POST /ncov/detail
+ Request : 
```
{
    areaid:    区域代码，数字
    timestmp:  时间戳, 日期
}
```
+ Resp
```$xslt
{
    "status": {
        "code": "0",
        "msg": "查询成功"
    },
    "data": { 
                id：       ID, 数字
                areaid:    区域代码，数字
                longitude: 经度, 字符串
                latitude:  纬度, 字符串
                normal:    经纬度标准, 字符串
                infection: 感染人数, 数字
                doubt:     疑似人数, 数字
                serious:   重症人数, 数字
                death:     死亡人数, 数字
                rehab:     治愈人数，数字
                timestmp:  时间戳, 日期(Date)
            }
}
```
##### POST /ncov/list
+ Request : 
```
 null
```
+ Resp
```$xslt
{
    "status": {
        "code": "0",
        "msg": "查询成功"
    },
    "data": [{ 
                id：       ID, 数字
                areaid:    区域代码，数字
                longitude: 经度, 字符串
                latitude:  纬度, 字符串
                normal:    经纬度标准, 字符串
                infection: 感染人数, 数字
                doubt:     疑似人数, 数字
                serious:   重症人数, 数字
                death:     死亡人数, 数字
                rehab:     治愈人数，数字
                timestmp:  时间戳, 日期(Date)
            },
            ...
            ]
}
```
##### POST /ncov/sum
+ Request : 
```
{
    areaid:    区域代码，数字
}
```
+ Resp
```$xslt
{
    "status": {
        "code": "0",
        "msg": "查询成功"
    },
    "data": { 
                areaid:    区域代码，数字
                longitude: 经度, 字符串
                latitude:  纬度, 字符串
                normal:    经纬度标准, 字符串
                infection: 感染人数, 数字
                doubt:     疑似人数, 数字
                serious:   重症人数, 数字
                death:     死亡人数, 数字
                rehab:     治愈人数，数字
                timestmp:  时间戳, 日期(Date)
            }
}
```
##### POST /ncov/sum_list
+ Request : 
```
null
```
+ Resp
```$xslt
{
    "status": {
        "code": "0",
        "msg": "查询成功"
    },
    "data": [{ 
                areaid:    区域代码，数字
                longitude: 经度, 字符串
                latitude:  纬度, 字符串
                normal:    经纬度标准, 字符串
                infection: 感染人数, 数字
                doubt:     疑似人数, 数字
                serious:   重症人数, 数字
                death:     死亡人数, 数字
                rehab:     治愈人数，数字
                timestmp:  时间戳, 日期(Date)
            },
            ...
            ]
}
```