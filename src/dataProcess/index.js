export default {
    movieDataProcess: function (successResponse) {
        var objid=successResponse.data.movieId
        var items=[
            objid.timestamp,
            objid.machineIdentifier,
            objid.processIdentifier,
            objid.counter,
        ];
        var str=''
        str = str+ items[0].toString(16).padStart(8,'0');
        str = str+ items[1].toString(16).padStart(6,'0');
        str = str+ items[2].toString(16).padStart(4,'0');
        str = str+ items[3].toString(16).padStart(6,'0');
        var itemtype=''
        if(successResponse.data.flag==='true'){
            itemtype='movie'
        }
        else{
            itemtype='TV'
        }

        var info ='';
        info=info+successResponse.data.director+' -- ';
        info=info+successResponse.data.stars+' -- ';
        info=info+successResponse.data.types;
        return {
            title:successResponse.data.name,
            imgsrc:successResponse.data.imgAddr,
            introduction:successResponse.data.introduction,
            mark:successResponse.data.score,
            id: str,
            tags:info,
            type: itemtype,
            items: [
                {name: '导演', value:successResponse.data.director},
                {name: '主演', value:successResponse.data.stars},
                {name: '类型', value:successResponse.data.types},
                {name: '制片国家/地区', value:successResponse.data.region},
                {name: '语言', value:successResponse.data.language},
                {name: '上映日期', value:successResponse.data.releaseYear},
            ]
        }
    },
    movieDataListProcess: function (successResponse) {
        //alert(successResponse.data[0].name)
        var resArray=[];
        var len=successResponse.data.length;
        for(var i=0;i<len;i++){
            resArray.push(this.movieDataProcess({data:successResponse.data[i]}));
        }
        return resArray;
    },
    bookDataProcess: function (successResponse) {
        var info ='';
        info=info+successResponse.data.author+' -- ';
        info=info+successResponse.data.bookTypes+' -- ';
        info=info+successResponse.data.publishingCompany;
        //alert("元素处理")
        //alert("函数调用")
        return {
            title:successResponse.data.name,
            imgsrc:successResponse.data.imgAddr,
            introduction:successResponse.data.introduction,
            mark:successResponse.data.score,
            id:successResponse.data.isbn,
            tags:info,
            type: 'book',
            items: [
                {name: '作者', value:successResponse.data.author},
                {name: '出版社', value:successResponse.data.publishingCompany},
                {name: '出版年', value:successResponse.data.releaseYear},
                {name: '语言', value:successResponse.data.language},
                {name: '出版国家/地区', value:successResponse.data.region},
                {name: '类型', value:successResponse.data.bookTypes},
                //{name: '定价', value:successResponse.data.price},
                {name: 'ISBN', value:successResponse.data.isbn},
            ]
        }
    },
    bookDataListProcess: function (successResponse) {
        //alert(successResponse.data[0].name)
        var resArray=[];
        var len=successResponse.data.length;
        for(var i=0;i<len;i++){
            resArray.push(this.bookDataProcess({data:successResponse.data[i]}));
        }
        return resArray;
    },
    evaluationProcess: function (evaluation) {
        return {
            author: evaluation.username,
            time: evaluation.time,
            mark: evaluation.score,
            content: evaluation.evaluation,
            likeNum: evaluation.likeNum,
        }
    },
    evaluationListProcess: function (successResponse) {
        var resArray=[];
        var len=successResponse.data.length;
        for(var i=0;i<len;i++){
            resArray.push(this.evaluationProcess(successResponse.data[i]));
        }
        return resArray;
    },

    groupDataProcess: function (originGroup) {
        var objid=originGroup.groupId;
        var items=[
            objid.timestamp,
            objid.machineIdentifier,
            objid.processIdentifier,
            objid.counter,
        ];
        var str=''
        str = str+ items[0].toString(16).padStart(8,'0');
        str = str+ items[1].toString(16).padStart(6,'0');
        str = str+ items[2].toString(16).padStart(4,'0');
        str = str+ items[3].toString(16).padStart(6,'0');
        return {
            type: 'group',
            id: str,
            name: originGroup.name,
            tags: originGroup.tags,
            introduction: originGroup.introduction,
            createTime: originGroup.createTime,
            leaderName: originGroup.leaderName,
            adminsName: originGroup.adminsName,
            membersName: originGroup.membersName,
            heatDegree: originGroup.heatDegree,
        }
    },

    groupListProcess: function(originGroups){
        var resArray=[];
        var len=originGroups.length;
        for(var i=0;i<len;i++) {
            resArray.push(this.groupDataProcess(originGroups[i]));
            //alert(resArray[i].name);
        }
        return resArray;
    },

    topicDataProcess: function(originTopic) {
        var objid=originTopic.postId;
        var items=[
            objid.timestamp,
            objid.machineIdentifier,
            objid.processIdentifier,
            objid.counter,
        ];
        var str=''
        str = str+ items[0].toString(16).padStart(8,'0');
        str = str+ items[1].toString(16).padStart(6,'0');
        str = str+ items[2].toString(16).padStart(4,'0');
        str = str+ items[3].toString(16).padStart(6,'0');

        var str1=originTopic.groupId;
        var items1=[
            objid.timestamp,
            objid.machineIdentifier,
            objid.processIdentifier,
            objid.counter,
        ];
        var str1=''
        str1 = str1+ items1[0].toString(16).padStart(8,'0');
        str1 = str1+ items1[1].toString(16).padStart(6,'0');
        str1 = str1+ items1[2].toString(16).padStart(4,'0');
        str1 = str1+ items1[3].toString(16).padStart(6,'0');

        return {
            type: 'topic',
            id: str,
            groupId: str1,
            title: originTopic.title,
            username: originTopic.username,
            imgAddr: originTopic.imgAddr,
            mainBody: originTopic.mainBody,
            time: originTopic.time,
            likeNum: originTopic.likeNum,
            collectNum: originTopic.collectNum,
            isTop: originTopic.isTop,
            isGreat: originTopic.isGreat,
            discuss: originTopic.discuss,
            replyTime: originTopic.replyTime,
        }
    },
    topicListProcess: function(originTopics){
        var len=originTopics.length;
        var resArray=[];
        for(var i=0;i<len;i++){
            resArray.push(this.topicDataProcess(originTopics[i]));
        }
        return resArray;
    },

    allListProcess: function(origin){
        var len=origin.length;
        var resArray=[];
        for(var i=0;i<len;i++){
            if(origin[i].flag===1){
                resArray.push(this.bookDataProcess({data:origin[i].result}))
            }
            else if(origin[i].flag===2||origin[i].flag===3){
                resArray.push(this.movieDataProcess({data:origin[i].result}))
            }
            else if(origin[i].flag===4){
                resArray.push(this.groupDataProcess(origin[i].result))
            }
            else{
                resArray.push(this.topicDataProcess(origin[i].result))
            }
            //alert(resArray[i].type)
        }
        return resArray;
    }
    
  }