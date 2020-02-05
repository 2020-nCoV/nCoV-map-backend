
## USER - 用户管理

+ 新建
    - POST user/manager
    - Req Body:
        - uname : 必选，char，用户姓名
        - phone : 必选，int，唯一手机号
        - email : 必选，char，唯一用户邮箱
        - status : 必选，int，用户状态
            - 参数 : 0未启用 1已启用
        - exp : 必选，timestmp，用户的有效期
        - type : 必选，char，用户类型
            - 参数 : god超级管理员 staff普通管理员
        - pass : 必选，char，登录密码

    - Resp:
        - [ { id : 用户id , uname : 用户id , phone : 唯一手机号 , email : 唯一用户邮箱 , status : 用户状态 , exp : 用户的有效期 , type : 用户类型 ,  } ]
        
        
+ 修改
    - PUT user/manager/:id
    - Req Body:
        - uname : 可选，char，用户姓名
        - phone : 可选，int，唯一手机号
        - email : 可选，char，唯一用户邮箱
        - status : 可选，int，用户状态
            - 参数 : 0未启用 1已启用
        - exp : 可选，timestmp，用户的有效期
        - type : 可选，char，用户类型
            - 参数 : god超级管理员 staff普通管理员
        - pass : 可选，char，登录密码

    - Resp:
        - 
        

+ 获取用户列表
    - GET user/manager
    - Req Query:
        - limit : 可选，int，获取用户数量，默认30
        - offset : 可选，int，从第几个开始，默认0
    - Resp:
        - 
        
+ 删除用户
    - DELETE user/delete/:id
        - Req Body:
            - none
        - Resp:
            - 
            
## USER - 用户会话管理

   + 登录
       - POST user/session
       - Req Body:
           - Account : 必选，char，手机号或邮箱
           - pass : 必选，char，登录密码
       - Resp:
           - 

   + 注销
       - DELETE user/session
       - Req Body:
           - none
       - Resp:
           - 
