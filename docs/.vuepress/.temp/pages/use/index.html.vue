<template><div><h2 id="spider-node-快速入门" tabindex="-1"><a class="header-anchor" href="#spider-node-快速入门" aria-hidden="true">#</a> spider-node 快速入门</h2>
<ul>
<li>本章节介绍运行spider-node的系统要求，如何安装，启动一个集群，然后运行一个简单的HelloWorld示例</li>
</ul>
<h3 id="_1-环境要求" tabindex="-1"><a class="header-anchor" href="#_1-环境要求" aria-hidden="true">#</a> 1：环境要求</h3>
<ul>
<li>
<p>jdk 8:</p>
</li>
<li>
<p>Elasticsearch 5.7/7~8</p>
</li>
<li>
<p>redis 不局限版本</p>
</li>
<li>
<p>MySQL 不限版本</p>
</li>
<li>
<p>硬件配置（2核心4G，系统支持epoll模型）</p>
</li>
</ul>
<h3 id="_2-spider架构图" tabindex="-1"><a class="header-anchor" href="#_2-spider架构图" aria-hidden="true">#</a> 2: spider架构图</h3>
<p><img src="/images/framework.png" alt="VuePress Logo"></p>
<h3 id="_3-spider-配置" tabindex="-1"><a class="header-anchor" href="#_3-spider-配置" aria-hidden="true">#</a> 3：spider-配置</h3>
<h4 id="spiderconf-properties" tabindex="-1"><a class="header-anchor" href="#spiderconf-properties" aria-hidden="true">#</a> spiderConf.properties</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code># 启动环境（<span class="token operator">/</span>local<span class="token operator">/</span>dev<span class="token operator">/</span>qa<span class="token operator">/</span>prod）
environment <span class="token operator">=</span> local
# 集群模式（zk<span class="token operator">/</span>hazelcast）建议使用zk
cluster<span class="token operator">-</span>type <span class="token operator">=</span> hazelcast
# zk地址
zk<span class="token operator">-</span>addr <span class="token operator">=</span> xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spiderconf-prod-properties-redis" tabindex="-1"><a class="header-anchor" href="#spiderconf-prod-properties-redis" aria-hidden="true">#</a> spiderConf-prod.properties redis</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code># 最大空闲连接数
redis<span class="token operator">-</span>minIdle <span class="token operator">=</span> <span class="token number">1</span>

# 链接初始化新增连接心跳的配置
redis<span class="token operator">-</span>pingConnectionInterval <span class="token operator">=</span> <span class="token number">60000</span>

# 核心连接数
redis<span class="token operator">-</span>core <span class="token operator">=</span> <span class="token number">15</span>

# 最大等待时间
redis<span class="token operator">-</span>maxWait <span class="token operator">=</span> <span class="token number">3000</span>

# redis连接地址
redis<span class="token operator">-</span>host<span class="token operator">-</span>name <span class="token operator">=</span> xxxx<span class="token punctuation">,</span>xxxx<span class="token punctuation">,</span>xxxx

# redis<span class="token operator">-</span>密码
redis<span class="token operator">-</span>password <span class="token operator">=</span> newhope

# redis<span class="token operator">-</span>端口
redis<span class="token operator">-</span>port <span class="token operator">=</span><span class="token number">26379</span>

# redis执行超时配置
redis<span class="token operator">-</span>timeout <span class="token operator">=</span><span class="token number">10000</span>

# redis 集群模式（standAlone（单机）<span class="token operator">/</span>sentinel（哨兵）<span class="token operator">/</span><span class="token function">masterSlave</span><span class="token punctuation">(</span>主从<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">cluster</span><span class="token punctuation">(</span>集群<span class="token punctuation">)</span>）
redis<span class="token operator">-</span>type <span class="token operator">=</span> sentinel
# redis的 master<span class="token operator">-</span>name
redis<span class="token operator">-</span>master<span class="token operator">-</span>name <span class="token operator">=</span> redisMaster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spiderconf-prod-properties-mysql" tabindex="-1"><a class="header-anchor" href="#spiderconf-prod-properties-mysql" aria-hidden="true">#</a> spiderConf-prod.properties mysql</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code># mysql 的连接地址
mysql<span class="token operator">-</span>host <span class="token operator">=</span> xxxx

# 密码
mysql<span class="token operator">-</span>password <span class="token operator">=</span> xxxx

# 用户名
mysql<span class="token operator">-</span>user <span class="token operator">=</span> xxxx

# 端口号
mysql<span class="token operator">-</span>port <span class="token operator">=</span> <span class="token number">3306</span>

# 库名
mysql<span class="token operator">-</span>database <span class="token operator">=</span> xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spiderconf-prod-properties-限流配置" tabindex="-1"><a class="header-anchor" href="#spiderconf-prod-properties-限流配置" aria-hidden="true">#</a> spiderConf-prod.properties 限流配置</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code># 间隙
limitation<span class="token operator">-</span>interval <span class="token operator">=</span> <span class="token number">20</span>

# 并发数
limitation<span class="token operator">-</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spiderconf-prod-properties-es配置" tabindex="-1"><a class="header-anchor" href="#spiderconf-prod-properties-es配置" aria-hidden="true">#</a> spiderConf-prod.properties es配置</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code># 日志使用的类型（es<span class="token operator">/</span>esx）
log_type <span class="token operator">=</span> esx

# es的连接地址是否为https
https_credit <span class="token operator">=</span> <span class="token boolean">true</span>

# es集群名称
es<span class="token operator">-</span>cluster<span class="token operator">-</span>name <span class="token operator">=</span> elasticsearch

# es连接地址
es<span class="token operator">-</span>ip<span class="token operator">-</span>addr <span class="token operator">=</span> xxxx<span class="token operator">:</span><span class="token number">9200</span>

# es连接名称
es<span class="token operator">-</span>username <span class="token operator">=</span> bms<span class="token operator">-</span>spider

# es连接密码
es<span class="token operator">-</span>password <span class="token operator">=</span> gSqWkvnkV4lO1h0skOLG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="spiderconf-properties-公共配置" tabindex="-1"><a class="header-anchor" href="#spiderconf-properties-公共配置" aria-hidden="true">#</a> spiderConf.properties 公共配置</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>
# 该配置不能改<span class="token operator">-</span> spider<span class="token operator">-</span>node与业务服务之前的通信方式
rpc<span class="token operator">-</span>type <span class="token operator">=</span> grpc

# 界面访问端口
ui<span class="token operator">-</span>port <span class="token operator">=</span> <span class="token number">6140</span>

# soider<span class="token operator">-</span>node服务端口号
<span class="token keyword">function</span><span class="token operator">-</span>port <span class="token operator">=</span> <span class="token number">8080</span>

# 启动每个角色的实例数，默认使用<span class="token number">1</span>（尽量别动）
instance<span class="token operator">-</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>dependency<span class="token operator">></span>
            <span class="token operator">&lt;</span>groupId<span class="token operator">></span>cn<span class="token punctuation">.</span>spider<span class="token punctuation">.</span>framework<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
            <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>client<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
            <span class="token operator">&lt;</span>version<span class="token operator">></span><span class="token number">1.0</span><span class="token number">.0</span><span class="token operator">-</span><span class="token constant">SNAPSHOT</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">></span>
            <span class="token operator">&lt;</span>exclusions<span class="token operator">></span>
                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>org<span class="token punctuation">.</span>springframework<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>spring<span class="token operator">-</span>tx<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>org<span class="token punctuation">.</span>springframework<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>spring<span class="token operator">-</span>oxm<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>
                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>

                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>org<span class="token punctuation">.</span>springframework<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>spring<span class="token operator">-</span>aop<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>org<span class="token punctuation">.</span>springframework<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>spring<span class="token operator">-</span>context<span class="token operator">-</span>support<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>cn<span class="token punctuation">.</span>spider<span class="token punctuation">.</span>framework<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>spider<span class="token operator">-</span>mybatis<span class="token operator">-</span>plugin<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>cn<span class="token punctuation">.</span>spider<span class="token punctuation">.</span>framework<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>spider<span class="token operator">-</span>transaction<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>api<span class="token punctuation">.</span>grpc<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>proto<span class="token operator">-</span>google<span class="token operator">-</span>common<span class="token operator">-</span>protos<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>hazelcast<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>com<span class="token punctuation">.</span>hazelcast<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>hazelcast<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>com<span class="token punctuation">.</span>hazelcast<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>hazelcast<span class="token operator">-</span>kubernetes<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>web<span class="token operator">-</span>client<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>core<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>codegen<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>service<span class="token operator">-</span>proxy<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>grpc<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>web<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>bridge<span class="token operator">-</span>common<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>io<span class="token punctuation">.</span>vertx<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>vertx<span class="token operator">-</span>auth<span class="token operator">-</span>common<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

                <span class="token operator">&lt;</span>exclusion<span class="token operator">></span>
                    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>org<span class="token punctuation">.</span>redisson<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
                    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>redisson<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>exclusion<span class="token operator">></span>

            <span class="token operator">&lt;</span><span class="token operator">/</span>exclusions<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yaml配置" tabindex="-1"><a class="header-anchor" href="#yaml配置" aria-hidden="true">#</a> yaml配置</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>spider<span class="token operator">:</span>
  server<span class="token operator">:</span>
    ip<span class="token operator">:</span> spider<span class="token operator">-</span>node<span class="token punctuation">.</span>spider<span class="token operator">-</span>node
    port<span class="token operator">:</span> <span class="token number">8080</span>
  worker<span class="token operator">:</span>
    name<span class="token operator">:</span> bms<span class="token operator">-</span>plus
    rpc<span class="token operator">-</span>port<span class="token operator">:</span> <span class="token number">9972</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spider-node-启动" tabindex="-1"><a class="header-anchor" href="#spider-node-启动" aria-hidden="true">#</a> spider-node 启动</h2>
<ul>
<li>下载spider-node 安装程序</li>
<li>启动命令</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>cd <span class="token operator">/</span>spider<span class="token operator">-</span>node<span class="token operator">/</span>bin <span class="token punctuation">.</span><span class="token operator">/</span>startup<span class="token punctuation">.</span>sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="spider-node-sdk" tabindex="-1"><a class="header-anchor" href="#spider-node-sdk" aria-hidden="true">#</a> spider-node sdk</h2>
<ul>
<li>sdk包含 方法的入参 出参 接口 三个要素</li>
</ul>
<h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3>
<ul>
<li>接口示例</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">TaskComponent</span></span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"test_service"</span><span class="token punctuation">,</span> workerName <span class="token operator">=</span> <span class="token string">"bms_middle_platform"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TestService</span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">NoticeScope</span></span><span class="token punctuation">(</span>scope <span class="token operator">=</span> <span class="token punctuation">{</span>ScopeTypeEnum<span class="token punctuation">.</span><span class="token constant">VARIABLE</span><span class="token punctuation">}</span><span class="token punctuation">,</span>target <span class="token operator">=</span> <span class="token string">"bill"</span><span class="token punctuation">)</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">TaskService</span></span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"query_bill_status"</span><span class="token punctuation">)</span>
    Bill <span class="token function">queryBill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">TaskService</span></span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"update_bill_status"</span><span class="token punctuation">)</span>
    UpdateBillStatusResult <span class="token function">updateBillStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">TaskService</span></span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"test_update_status"</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">testUpdateStatus</span><span class="token punctuation">(</span>TestBillStatusUpdateParam param<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入参" tabindex="-1"><a class="header-anchor" href="#入参" aria-hidden="true">#</a> 入参</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Data</span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuildPricingFailParam</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 基础信息
     */</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">StaTaskField</span></span><span class="token punctuation">(</span><span class="token string">"sortInfo"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> InitSortInfoResult sortInfoResult<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 节点类型
     */</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">ReqTaskField</span></span><span class="token punctuation">(</span><span class="token string">"checkpointEnum"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> String checkpointEnum<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 计费信息
     */</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">ReqTaskField</span></span><span class="token punctuation">(</span><span class="token string">"input"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> WarehouseInput input<span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">ReqTaskField</span></span><span class="token punctuation">(</span><span class="token string">"checkpoint"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> String checkpoint<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="出参" tabindex="-1"><a class="header-anchor" href="#出参" aria-hidden="true">#</a> 出参</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Data</span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpdateBillStatusResult</span> <span class="token punctuation">{</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">NoticeVar</span></span><span class="token punctuation">(</span>target <span class="token operator">=</span> <span class="token string">"bill.billStatus"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> String billStatus<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Data</span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InitSortInfoResult</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 项目id
     */</span>
    <span class="token keyword">private</span> String projectId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 项目名称
     */</span>
    <span class="token keyword">private</span> String projectName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应收结算主体
     */</span>
    <span class="token keyword">private</span> String payeeInfo<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应付结算主体
     */</span>
    <span class="token keyword">private</span> String payerInfo<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应收公司
     */</span>
    <span class="token keyword">private</span> String payee<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应付公司
     */</span>
    <span class="token keyword">private</span> String payer<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应收租户id
     */</span>
    <span class="token keyword">private</span> String payeeTenantId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应付租户id
     */</span>
    <span class="token keyword">private</span> String payerTenantId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 合同编码
     */</span>
    <span class="token keyword">private</span> String contractCode<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应付项目id
     */</span>
    <span class="token keyword">private</span> String payerProjectId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 应付项目名称
     */</span>
    <span class="token keyword">private</span> String payerProjectName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spider-node-注解" tabindex="-1"><a class="header-anchor" href="#spider-node-注解" aria-hidden="true">#</a> spider-node 注解</h2>
<h3 id="taskcomponent-域组件的注解" tabindex="-1"><a class="header-anchor" href="#taskcomponent-域组件的注解" aria-hidden="true">#</a> @TaskComponent 域组件的注解</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">TaskComponent</span></span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"pricing_warehouse"</span><span class="token punctuation">,</span> workerName <span class="token operator">=</span> <span class="token string">"bms_middle_platform"</span><span class="token punctuation">)</span>
name 指的组件名称 
workerName 指提供组件的服务名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="taskservice-域组件中的-域功能注解" tabindex="-1"><a class="header-anchor" href="#taskservice-域组件中的-域功能注解" aria-hidden="true">#</a> @TaskService 域组件中的-域功能注解</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">TaskService</span></span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"pricing"</span><span class="token punctuation">)</span>
name 指的域功能名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noticesta-通知返回-sta域对象注解" tabindex="-1"><a class="header-anchor" href="#noticesta-通知返回-sta域对象注解" aria-hidden="true">#</a> @NoticeSta 通知返回 sta域对象注解</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">NoticeSta</span></span><span class="token punctuation">(</span>target <span class="token operator">=</span> <span class="token string">"pricing_result"</span><span class="token punctuation">)</span>
target 指定返回到某个域对象
设置后，不允许修改<span class="token operator">-</span>修改会抛出异常
返回到 sta参数域
作用于 接口的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noticevar-通知返回-var域对象注解" tabindex="-1"><a class="header-anchor" href="#noticevar-通知返回-var域对象注解" aria-hidden="true">#</a> @NoticeVar 通知返回 var域对象注解</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">NoticeVar</span></span><span class="token punctuation">(</span>target <span class="token operator">=</span> <span class="token string">"bill"</span><span class="token punctuation">)</span>
target 指定返回到某个域对象
设置后允许修改
返回到 <span class="token keyword">var</span>参数域
作用于 接口的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noticevar" tabindex="-1"><a class="header-anchor" href="#noticevar" aria-hidden="true">#</a> @NoticeVar</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">NoticeVar</span></span><span class="token punctuation">(</span>target <span class="token operator">=</span> <span class="token string">"bill.billStatus"</span><span class="token punctuation">)</span>
target 指定返回 bill域对象中，对billStatus进行修改
<span class="token keyword">var</span> 域允许修改
作用域 返回的参数实体字段上面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noticesta" tabindex="-1"><a class="header-anchor" href="#noticesta" aria-hidden="true">#</a> @NoticeSta</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">NoticeSta</span></span><span class="token punctuation">(</span>target <span class="token operator">=</span> <span class="token string">"bill.billStatus"</span><span class="token punctuation">)</span>
target 指定返回 bill域对象中，对billStatus进行修改
<span class="token keyword">var</span>域 不允许修改
作用域 返回的参数实体字段上面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vartaskfield" tabindex="-1"><a class="header-anchor" href="#vartaskfield" aria-hidden="true">#</a> @VarTaskField</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">VarTaskField</span></span><span class="token punctuation">(</span><span class="token string">"bill.billStatus"</span><span class="token punctuation">)</span>

指定获取 sta域里面 bill域对象中的billStatus字段

作用域 接口入参的参数实体字段上面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stataskfield" tabindex="-1"><a class="header-anchor" href="#stataskfield" aria-hidden="true">#</a> @StaTaskField</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">StaTaskField</span></span><span class="token punctuation">(</span><span class="token string">"pricing_result.costs"</span><span class="token punctuation">)</span>

指定获取 sta域里面 pricing_result域对象中的costs 字段

作用域 接口入参的参数实体字段上面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reqtaskfield-执行域业务功能的入参" tabindex="-1"><a class="header-anchor" href="#reqtaskfield-执行域业务功能的入参" aria-hidden="true">#</a> @ReqTaskField(执行域业务功能的入参)</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">ReqTaskField</span></span><span class="token punctuation">(</span><span class="token string">"checkpointEnum"</span><span class="token punctuation">)</span>

指定获取 req域里面 checkpointEnum 字段

作用域 接口入参的参数实体字段上面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="noticeresult" tabindex="-1"><a class="header-anchor" href="#noticeresult" aria-hidden="true">#</a> @NoticeResult</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>指定执行结果将被通知到StoryBus中的哪些作用域中，<span class="token decorator"><span class="token at operator">@</span><span class="token function">NoticeResult说明，该方法执行结果将被通知到result域，最终作为Story的执行结果返回给调用方</span></span>
作用于字段<span class="token operator">/</span>方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spider-node-参数映射" tabindex="-1"><a class="header-anchor" href="#spider-node-参数映射" aria-hidden="true">#</a> spider-node 参数映射</h2>
<ul>
<li>参数映射的设计初衷，当B域里面有个b1字段，在某个场景下，是A域中的 a1字段，在某个域业务功能执行过程中可以通过B.b1 = A.a1做隐射，自动获取a1的</li>
<li>示例</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span><span class="token string-property property">"user.id"</span><span class="token operator">:</span><span class="token string">"req.userId"</span><span class="token punctuation">,</span><span class="token string-property property">"user.name"</span><span class="token operator">:</span><span class="token string">"req.userName"</span><span class="token punctuation">,</span><span class="token string-property property">"payBill.adjustedAmount"</span><span class="token operator">:</span><span class="token string">"req.adjustCostValue"</span><span class="token punctuation">,</span><span class="token string-property property">"payBill.cost"</span><span class="token operator">:</span><span class="token string">"adjustInfo.shippingOrderCosts"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="spider-node-数据流转" tabindex="-1"><a class="header-anchor" href="#spider-node-数据流转" aria-hidden="true">#</a> spider-node 数据流转</h2>
<ul>
<li>
<p>spider中存在 4个域</p>
</li>
<li>
<p>req 该域作为执行域业务功能的入参</p>
</li>
<li>
<p>var 该域 为执行域功能的返回值指定为返回到var域，会写入var域,保存节点执行完成后产生的变量，可以被重复替换，对象里面的字段性质同上</p>
</li>
<li>
<p>sta 该域 为执行域功能的返回值指定为返回到sta域，会写入sta域,保存节点执行完成后产生的变量，一经设置，将不再发生变化，如果出现重复设置会有警告日志（当只有对象的引用在sta域时，对象里面的字段还是可以发生更新的，这点与req相同）</p>
</li>
<li>
<p>res 保存最终结果，作为 Story 执行完成后最终的结果返回给调用者</p>
</li>
</ul>
<h2 id="spider-node-bpmn模型" tabindex="-1"><a class="header-anchor" href="#spider-node-bpmn模型" aria-hidden="true">#</a> spider-node bpmn模型</h2>
<h3 id="包含网关-判断网关" tabindex="-1"><a class="header-anchor" href="#包含网关-判断网关" aria-hidden="true">#</a> 包含网关 + 判断网关</h3>
<p><img src="/images/Include_if.png" alt="VuePress Logo"></p>
<ul>
<li>使用方式参照 <a href="http://www.kstry.cn/doc/specification/process_choreography.html" target="_blank" rel="noopener noreferrer">kstry<ExternalLinkIcon/></a></li>
</ul>
<h3 id="延迟节点" tabindex="-1"><a class="header-anchor" href="#延迟节点" aria-hidden="true">#</a> 延迟节点</h3>
<p><img src="/images/delay_time.png" alt="VuePress Logo"></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>service_task_type <span class="token operator">=</span> <span class="token constant">DELAY</span>
delay_time <span class="token operator">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="轮询节点" tabindex="-1"><a class="header-anchor" href="#轮询节点" aria-hidden="true">#</a> 轮询节点</h3>
<p><img src="/images/poll.png" alt="VuePress Logo"></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>service_task_type <span class="token operator">=</span> <span class="token constant">POLL</span>
poll_count <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">/</span>10S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h3>
<p><img src="/images/async.png" alt="VuePress Logo"></p>
<h3 id="参数转换" tabindex="-1"><a class="header-anchor" href="#参数转换" aria-hidden="true">#</a> 参数转换</h3>
<p><img src="/images/replace.png" alt="VuePress Logo"></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>conversion_param <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">"1"</span><span class="token operator">:</span><span class="token string">"AWAIT_VERIFY"</span><span class="token punctuation">,</span><span class="token string-property property">"0"</span><span class="token operator">:</span><span class="token string">"NOT_NEED_VERIFY"</span><span class="token punctuation">}</span> 解释 把值为<span class="token number">1</span>的转成<span class="token constant">AWAIT_VERIFY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


