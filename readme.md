# pm2-connect

## 介紹

這個東西很簡單，透過Socket.io.client定期傳送資料到指定的伺服器上，進而實現遠端監控。

## Install
```
$ npm i -g pm2
$ npm i -g pm2-connect
```

## 如何使用

```
$ pm2-connect link [HOST]
```

## Kill Process

我不想寫，麻煩自己pm2 kill =)

## API

哪天想到在弄

## Server

請參照 [pm2-connect-server](https://github.com/kudorori/pm2-connect-server) (當然你也可以自行實現一個接收資料的Socket Server，自己去看一下原碼，夠短了)

## Object Type

```
  {
    hostname ,
    uptime,
    loadavg,
    totalmem,
    freemem,
    release,
    cpus,
    networkInterfaces,
    arch,
    tmpdir,
    endianness,
    type,
    platform,
    processList: [{
      // 參考pm2 API [pm2.describe()]的輸出格
    }]
  }
```


## TODO
- [X] Cli Command Line Generate
- [X] Client Connect Socket Send Data
- [X] OS Status
- [X] PM2 Status
- [ ] PM2 Method(open, restart, stop, delete)
- [ ] PM2 Log Stream
- [ ] PM2-Connect Server
  - [ ] Server Generate
  - [ ] GUI Design
