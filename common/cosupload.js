// #ifdef MP
//在小程序中引入小程序的sdk
var COS = require('./cos-wx-sdk-v5');
// #endif
// #ifdef H5
//在H5中引入小程序的sdk
var COS = require('./h5cos')
// #endif
var config = {
	Bucket: 'yy-1255875008',//可在腾讯云对象存储中自己查看创建的
	Region: 'ap-guangzhou',//可在腾讯云中自己查看自己查看创建的
	baseUrl:'https://yy-1255875008.cos.ap-guangzhou.myqcloud.com'
}
//此函数是用来向后端请求获取cos的临时密钥的。
function getCosToken(type) {
	return new Promise(function(resolve, reject) {
		uni.request({
			url: 'http://localhost/api/common/uploadCos', // 步骤二提供的签名接口
			header: {
				'x-token': store.getters.Token
			},
			data: {
				bucket: config.cos.Bucket,
				region: config.cos.Region,
			},
			success: function(result) {
				var data = result.data.data;
				resolve(data)
			},
			fail: function(res) {
				reject(res)
			}
		})
	})
};

//此函数是用来返回 初始化COS对象所需要的参数
function param(key, file, backfun) {
	return {
		Bucket: config.cos.Bucket, // Bucket 格式：test-1250000000
		Region: config.cos.Region,
		Key: key,
		FilePath: file, //小程序中主要使用FilePath
		Body: file, //H5中使用 Body
		onTaskReady: function(tid) {
			// 准备上传
		},
		onTaskStart: function(info) {
			//开始上传
		},
		onProgress: function(progressData) {
			//上传进度回调
			backfun(progressData)
		}
	}
}

//此函数是用来处理上传结果的
//@resback 成功之后的回调函数 
//@errorback 错误之后的回调
function back(err, data, resback,errorback) {
	if (err != null) {
		errorback(err.error)
	} else {
		data.Location = "https://" + data.Location
		resback(data)
	}
}

//此函数用于初始化Cos对象 以及上传文件
function putObject(file, type, filename, backfun, resback,errorback) {
	getCosToken(type).then(function(data) {
		var credentials = data.Credentials
		//console.log(credentials)
		var cos = new COS({
			getAuthorization: function(options, callback) {
				callback({
					//以下返回数据请先console.log 打印查看
					TmpSecretId: credentials.TmpSecretId,
					TmpSecretKey: credentials.TmpSecretKey,
					XCosSecurityToken: credentials.Token,
					StartTime: data.StartTime,
					ExpiredTime: data.ExpiredTime,
				})
			}
		});
		let key = type + "/" + filename
		// #ifdef MP
		//小程序需要调用postObject 上传
		cos.postObject(param(key, file, backfun), function(err, data) {
			back(err, data, resback,errorback)
		});
		// #endif
		// #ifdef H5
		//H5需要调用putObject 上传
		cos.putObject(param(key, file, backfun), function(err, data) {
			back(err, data, resback,errorback)
		});
		// #endif
	}).catch(err=>{
		errorback(err.error)
	})
}

//对外的上传接口轮子
//@file：获取到的文件path
//@key:上传到对象存储的文件名
//@dir:上传对象存储的目录
//@speedback：上传进度回调
//@resback：上传成功回调
//@errorback：上传错误回调
export function upload(file, key, dir, speedback, resback,errorback) {
	putObject(file, key, dir, speedback, resback,errorback)
}