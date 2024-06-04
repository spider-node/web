---
lang: zh-CN
title: spider-使用文档
description: 介绍spider的使用范围，以及使用初衷
---

## spider-node 快速入门
- 本章节介绍运行spider-node的系统要求，如何安装，启动一个集群，然后运行一个简单的HelloWorld示例
### 1：环境要求
- jdk 8:
  
- Elasticsearch 5.7/7~8
  
- redis 不局限版本
  
- MySQL 不限版本
  
- 硬件配置（2核心4G，系统支持epoll模型）  

### 2: spider架构图 
![VuePress Logo](/images/framework.png)  

### 3：spider-配置  

#### spiderConf.properties
```ts{}
# 启动环境（/local/dev/qa/prod）
environment = local
# 集群模式（zk/hazelcast）建议使用zk
cluster-type = hazelcast
# zk地址
zk-addr = xxxxxx
```
#### spiderConf-prod.properties redis
```ts{}
# 最大空闲连接数
redis-minIdle = 1

# 链接初始化新增连接心跳的配置
redis-pingConnectionInterval = 60000

# 核心连接数
redis-core = 15

# 最大等待时间
redis-maxWait = 3000

# redis连接地址
redis-host-name = xxxx,xxxx,xxxx

# redis-密码
redis-password = newhope

# redis-端口
redis-port =26379

# redis执行超时配置
redis-timeout =10000

# redis 集群模式（standAlone（单机）/sentinel（哨兵）/masterSlave(主从)/cluster(集群)）
redis-type = sentinel
# redis的 master-name
redis-master-name = redisMaster
```

#### spiderConf-prod.properties mysql
```ts{}
# mysql 的连接地址
mysql-host = xxxx

# 密码
mysql-password = xxxx

# 用户名
mysql-user = xxxx

# 端口号
mysql-port = 3306

# 库名
mysql-database = xxxx
```

#### spiderConf-prod.properties 限流配置
```ts{}
# 间隙
limitation-interval = 20

# 并发数
limitation-number = 600
```
#### spiderConf-prod.properties es配置
```ts{}
# 日志使用的类型（es/esx）
log_type = esx

# es的连接地址是否为https
https_credit = true

# es集群名称
es-cluster-name = elasticsearch

# es连接地址
es-ip-addr = xxxx:9200

# es连接名称
es-username = bms-spider

# es连接密码
es-password = gSqWkvnkV4lO1h0skOLG
```

#### spiderConf.properties 公共配置
```ts{}

# 该配置不能改- spider-node与业务服务之前的通信方式
rpc-type = grpc

# 界面访问端口
ui-port = 6140

# soider-node服务端口号
function-port = 8080

# 启动每个角色的实例数，默认使用1（尽量别动）
instance-number = 1
```

#### 引入依赖

```ts{}
<dependency>
            <groupId>cn.spider.framework</groupId>
            <artifactId>client</artifactId>
            <version>1.0.0-SNAPSHOT</version>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-tx</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-oxm</artifactId>
                </exclusion>
                <exclusion>

                    <groupId>org.springframework</groupId>
                    <artifactId>spring-aop</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>org.springframework</groupId>
                    <artifactId>spring-context-support</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>cn.spider.framework</groupId>
                    <artifactId>spider-mybatis-plugin</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>cn.spider.framework</groupId>
                    <artifactId>spider-transaction</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>com.google.api.grpc</groupId>
                    <artifactId>proto-google-common-protos</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-hazelcast</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>com.hazelcast</groupId>
                    <artifactId>hazelcast</artifactId>

                </exclusion>

                <exclusion>
                    <groupId>com.hazelcast</groupId>
                    <artifactId>hazelcast-kubernetes</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-web-client</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-core</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-codegen</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-service-proxy</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-grpc</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-web</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-bridge-common</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>io.vertx</groupId>
                    <artifactId>vertx-auth-common</artifactId>
                </exclusion>

                <exclusion>
                    <groupId>org.redisson</groupId>
                    <artifactId>redisson</artifactId>
                </exclusion>

            </exclusions>
        </dependency>
```  

#### yaml配置
```ts{}
spider:
  server:
    ip: spider-node.spider-node
    port: 8080
  worker:
    name: bms-plus
    rpc-port: 9972
```  



## spider-node 启动
- 下载spider-node 安装程序
- 启动命令
```ts{}
cd /spider-node/bin ./startup.sh
```  
## spider-node sdk
- sdk包含 方法的入参 出参 接口 三个要素
### 接口
- 接口示例
```ts{}
@TaskComponent(name = "test_service", workerName = "bms_middle_platform")
public interface TestService {
    @NoticeScope(scope = {ScopeTypeEnum.VARIABLE},target = "bill")
    @TaskService(name = "query_bill_status")
    Bill queryBill();

    @TaskService(name = "update_bill_status")
    UpdateBillStatusResult updateBillStatus();

    @TaskService(name = "test_update_status")
    void testUpdateStatus(TestBillStatusUpdateParam param);
}
```
### 入参

```ts{}
@Data
public class BuildPricingFailParam {
    /**
     * 基础信息
     */
    @StaTaskField("sortInfo")
    private InitSortInfoResult sortInfoResult;

    /**
     * 节点类型
     */
    @ReqTaskField("checkpointEnum")
    private String checkpointEnum;

    /**
     * 计费信息
     */
    @ReqTaskField("input")
    private WarehouseInput input;

    @ReqTaskField("checkpoint")
    private String checkpoint;
}
```  
### 出参
```ts{}
@Data
public class UpdateBillStatusResult {

    @NoticeVar(target = "bill.billStatus")
    private String billStatus;
}

@Data
public class InitSortInfoResult {
    /**
     * 项目id
     */
    private String projectId;

    /**
     * 项目名称
     */
    private String projectName;

    /**
     * 应收结算主体
     */
    private String payeeInfo;

    /**
     * 应付结算主体
     */
    private String payerInfo;

    /**
     * 应收公司
     */
    private String payee;

    /**
     * 应付公司
     */
    private String payer;

    /**
     * 应收租户id
     */
    private String payeeTenantId;

    /**
     * 应付租户id
     */
    private String payerTenantId;

    /**
     * 合同编码
     */
    private String contractCode;

    /**
     * 应付项目id
     */
    private String payerProjectId;

    /**
     * 应付项目名称
     */
    private String payerProjectName;
}
```  
## spider-node 注解

### @TaskComponent 域组件的注解

 ```ts{}
@TaskComponent(name = "pricing_warehouse", workerName = "bms_middle_platform")
name 指的组件名称 
workerName 指提供组件的服务名称
```   
### @TaskService 域组件中的-域功能注解

 ```ts{}
@TaskService(name = "pricing")
name 指的域功能名称
``` 

###  @NoticeSta 通知返回 sta域对象注解
 ```ts{}
@NoticeSta(target = "pricing_result")
target 指定返回到某个域对象
设置后，不允许修改-修改会抛出异常
返回到 sta参数域
作用于 接口的方法
``` 

### @NoticeVar 通知返回 var域对象注解
  
 ```ts{}
@NoticeVar(target = "bill")
target 指定返回到某个域对象
设置后允许修改
返回到 var参数域
作用于 接口的方法
``` 
### @NoticeVar

 ```ts{}
@NoticeVar(target = "bill.billStatus")
target 指定返回 bill域对象中，对billStatus进行修改
var 域允许修改
作用域 返回的参数实体字段上面
``` 
### @NoticeSta

 ```ts{}
@NoticeSta(target = "bill.billStatus")
target 指定返回 bill域对象中，对billStatus进行修改
var域 不允许修改
作用域 返回的参数实体字段上面
``` 

### @VarTaskField
 ```ts{}
@VarTaskField("bill.billStatus")

指定获取 sta域里面 bill域对象中的billStatus字段

作用域 接口入参的参数实体字段上面
``` 

### @StaTaskField
 ```ts{}
@StaTaskField("pricing_result.costs")

指定获取 sta域里面 pricing_result域对象中的costs 字段

作用域 接口入参的参数实体字段上面
``` 

### @ReqTaskField(执行域业务功能的入参)
 ```ts{}
@ReqTaskField("checkpointEnum")

指定获取 req域里面 checkpointEnum 字段

作用域 接口入参的参数实体字段上面
``` 

### @NoticeResult 
 ```ts{}
指定执行结果将被通知到StoryBus中的哪些作用域中，@NoticeResult说明，该方法执行结果将被通知到result域，最终作为Story的执行结果返回给调用方
作用于字段/方法
``` 


## spider-node 参数映射
- 参数映射的设计初衷，当B域里面有个b1字段，在某个场景下，是A域中的 a1字段，在某个域业务功能执行过程中可以通过B.b1 = A.a1做隐射，自动获取a1的
- 示例
 ```ts{}
{"user.id":"req.userId","user.name":"req.userName","payBill.adjustedAmount":"req.adjustCostValue","payBill.cost":"adjustInfo.shippingOrderCosts"}
```   

## spider-node 数据流转
- spider中存在 4个域
  
- req 该域作为执行域业务功能的入参
  
- var 该域 为执行域功能的返回值指定为返回到var域，会写入var域,保存节点执行完成后产生的变量，可以被重复替换，对象里面的字段性质同上
  
- sta 该域 为执行域功能的返回值指定为返回到sta域，会写入sta域,保存节点执行完成后产生的变量，一经设置，将不再发生变化，如果出现重复设置会有警告日志（当只有对象的引用在sta域时，对象里面的字段还是可以发生更新的，这点与req相同）
  
- res 保存最终结果，作为 Story 执行完成后最终的结果返回给调用者

## spider-node bpmn模型
### 包含网关 + 判断网关 
![VuePress Logo](/images/Include_if.png)    

- 使用方式参照 [kstry](http://www.kstry.cn/doc/specification/process_choreography.html)

### 延迟节点
![VuePress Logo](/images/delay_time.png)     
 ```ts{}
service_task_type = DELAY
delay_time = 15
```  
   
### 轮询节点  
![VuePress Logo](/images/poll.png)    
 ```ts{}
service_task_type = POLL
poll_count = 10/10S
```   
### 异步

![VuePress Logo](/images/async.png)     


### 参数转换
![VuePress Logo](/images/replace.png)   
 ```ts{}
conversion_param = {"1":"AWAIT_VERIFY","0":"NOT_NEED_VERIFY"} 解释 把值为1的转成AWAIT_VERIFY
```  