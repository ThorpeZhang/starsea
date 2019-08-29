export default {
    movieDataProcess: function (successResponse) {
        //alert("元素处理")
        //alert("函数调用")
        return {
            title:successResponse.data.name,
            imgsrc:successResponse.data.imgAddr,
            introduction:successResponse.data.introduction,
            mark:successResponse.data.score,
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
        //alert("元素处理")
        //alert("函数调用")
        return {
            title:successResponse.data.name,
            imgsrc:successResponse.data.imgAddr,
            introduction:successResponse.data.introduction,
            mark:successResponse.data.score,
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
    }
  }