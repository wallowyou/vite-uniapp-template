// 模拟数据
const h5ErrorTip =
  '注: 在h5环境,使用HBuilderX直接点击vue文件切换和预览mescroll页面,可能导致分页失效,属于编辑器的问题,待官方修复,建议刷新页面,h5真机正常'
// 获取新闻列表
export function apiNewList(pageNum?: number, pageSize?: number) {
  const page = pageNum || 1
  const size = pageSize || 10
  return new Promise((resolute, reject) => {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        const list = []
        if (!pageNum) {
          //模拟下拉刷新返回的数据
          const id = new Date().getTime()
          const newObj = {
            id: id,
            title: '【新增新闻' + id + '】 标题',
            content: '新增新闻的内容'
          }
          list.push(newObj)
        } else {
          //模拟上拉加载返回的数据
          for (let i = 0; i < page; i++) {
            const upIndex = (pageNum - 1) * size + i + 1
            const newObj = {
              id: upIndex,
              title: '【新闻' + upIndex + '】 标题标题标题标题标题',
              content: '内容内容内容内容内容内容内容内容内容'
            }
            list.push(newObj)
          }
          console.log(
            'apiNewList: page.num=' +
              pageNum +
              ', page.size=' +
              pageSize +
              ', curPageData.length=' +
              list.length
          )
        }
        //模拟接口请求成功
        resolute(list)
      } catch (e) {
        //模拟接口请求失败
        reject(e)
      }
    }, 1000)
  })
}
/* 模拟商品列表 */
export interface Good {
  id: string
  goodImg: string
  goodName: string
  goodPrice: number
  goodSold: number
}
const goods = [
  {
    id: '1',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd1.jpg',
    goodName: '【1】  六罐装荷兰美素佳儿金装2段900g',
    goodPrice: 1149.0,
    goodSold: 648
  },
  {
    id: '2',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd2.jpg',
    goodName: '【2】  韩国Amore爱茉莉红吕洗发水套装修复受损发质',
    goodPrice: 89.0,
    goodSold: 128
  },
  {
    id: '3',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd3.jpg',
    goodName: '【3】  Friso美素佳儿 金装婴儿配方奶粉3段900g',
    goodPrice: 195.0,
    goodSold: 968
  },
  {
    id: '4',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd4.jpg',
    goodName: '【4】  Fisher goodPrice费雪 费雪三轮儿童滑行车',
    goodPrice: 299.0,
    goodSold: 85
  },
  {
    id: '5',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd5.jpg',
    goodName: '【5】  Babylee巴布力 实木婴儿床 雷卡拉130*70cm',
    goodPrice: 1889.0,
    goodSold: 18
  },
  {
    id: '6',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd6.jpg',
    goodName: '【6】  Pigeon贝亲 独立三层奶粉盒 送小罐奶粉1段200g',
    goodPrice: 70.0,
    goodSold: 658
  },
  {
    id: '7',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd7.jpg',
    goodName: '【7】 TTBOO兔兔小布 肩纽扣套装',
    goodPrice: 268.0,
    goodSold: 128
  },
  {
    id: '8',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd8.jpg',
    goodName: '【8】  Nuna璐拉 婴儿布里奇果精纯嫩肤沐浴露婴儿精纯芦荟胶',
    goodPrice: 140.0,
    goodSold: 366
  },
  {
    id: '9',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd9.jpg',
    goodName: '【9】  illuma启赋 奶粉3段900g',
    goodPrice: 252.0,
    goodSold: 98
  },
  {
    id: '10',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd10.jpg',
    goodName: '【10】  Abbott雅培乳蛋白部分水解婴儿配方奶粉3段820g',
    goodPrice: 89.0,
    goodSold: 128
  },
  {
    id: '11',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd11.jpg',
    goodName: '【11】  韩蜜 酷炫唇蜜（礼盒套装）2.8g*4',
    goodPrice: 179.0,
    goodSold: 35
  },
  {
    id: '12',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd12.jpg',
    goodName: '【12】  保税区直发【3包装】日本Merries花王纸尿裤NB90',
    goodPrice: 289.0,
    goodSold: 1928
  },
  {
    id: '13',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd13.jpg',
    goodName: '【13】  Comotomo可么多么 硅胶奶瓶（0-3月奶嘴）150ml绿色',
    goodPrice: 203.0,
    goodSold: 87
  },
  {
    id: '14',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd14.jpg',
    goodName: '【14】  香港直邮德国瑞德露Rival de Loop芦荟精华安瓶',
    goodPrice: 152.0,
    goodSold: 61
  },
  {
    id: '15',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd15.jpg',
    goodName: '【15】  保税区直发药师堂尊马油香草味温和保湿无刺激面霜',
    goodPrice: 269.0,
    goodSold: 73
  },
  {
    id: '16',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd16.jpg',
    goodName: '【16】  香港直邮日本Spatreatment眼膜保湿去细纹法令纹',
    goodPrice: 219.0,
    goodSold: 13
  },
  {
    id: '17',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd17.jpg',
    goodName: '【17】  韩国MEDIHEALNMF可莱丝针剂睡眠面膜',
    goodPrice: 81.0,
    goodSold: 128
  },
  {
    id: '18',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd18.jpg',
    goodName: '【18】  DHC蝶翠诗橄榄蜂蜜滋养洗脸手工皂90g',
    goodPrice: 123.0,
    goodSold: 77
  },
  {
    id: '19',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd19.jpg',
    goodName: '【19】  日本资生堂CPB肌肤之钥新版隔离霜 清爽型 30ml',
    goodPrice: 429.0,
    goodSold: 36
  },
  {
    id: '20',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd20.jpg',
    goodName: '【20】 Heinz亨氏 婴儿面条优加面条全素套餐组合3口味3盒',
    goodPrice: 39.0,
    goodSold: 61
  },
  {
    id: '21',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd21.jpg',
    goodName: '【21】  Heinz亨氏 乐维滋果汁泥组合5口味15袋',
    goodPrice: 69.0,
    goodSold: 55
  },
  {
    id: '22',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd22.jpg',
    goodName: '【22】  保税区直发澳大利亚Swisse高浓度蔓越莓胶囊30粒',
    goodPrice: 271.0,
    goodSold: 19
  },
  {
    id: '23',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd23.jpg',
    goodName: '【23】  挪威Nordic Naturals小鱼婴幼儿鱼油DHA滴剂',
    goodPrice: 102.0,
    goodSold: 125
  },
  {
    id: '24',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd24.jpg',
    goodName: '【24】  澳大利亚Bio island DHA for Pregnancy海藻油DHA',
    goodPrice: 289.0,
    goodSold: 28
  },
  {
    id: '25',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd25.jpg',
    goodName: '【25】  澳大利亚Fatblaster Coconut Detox椰子水',
    goodPrice: 152.0,
    goodSold: 17
  },
  {
    id: '26',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd26.jpg',
    goodName: '【26】  Suitsky舒比奇 高护极薄舒爽纸尿片尿不湿XL60',
    goodPrice: 99.0,
    goodSold: 181
  },
  {
    id: '27',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd27.jpg',
    goodName: '【27】  英国JUST SOAP手工皂 玫瑰天竺葵蛋糕皂',
    goodPrice: 72.0,
    goodSold: 66
  },
  {
    id: '28',
    goodImg: 'https://www.mescroll.com/demo/res/img/pd28.jpg',
    goodName: '【28】  德国NUK 多色婴幼儿带盖学饮杯',
    goodPrice: 92.0,
    goodSold: 138
  }
]
// 搜索商品
export function apiGoods(pageNum: number, pageSize: number, keyword: string) {
  // #ifdef H5
  pageNum == 1 && console.error(h5ErrorTip)
  // #endif
  return new Promise((resolute, reject) => {
    //延时一秒,模拟联网
    setTimeout(() => {
      try {
        const data: {
          list: any[]
          totalCount: number
          totalPage: number
          hasNext: boolean
        } = {
          list: [], // 数据列表
          totalCount: 0, // 总数量
          totalPage: 0, // 总页数
          hasNext: false // 是否有下一页
        }

        // 符合关键词的记录
        let keywordList: any = []
        if (!keyword || keyword == '全部') {
          // 搜索全部商品
          keywordList = goods
        } else {
          // 关键词搜索
          if (keyword == '母婴') keyword = '婴' // 为这个关键词展示多几条数据
          for (let i = 0; i < goods.length; i++) {
            const good = goods[i]
            if (good.goodName.indexOf(keyword) !== -1) {
              keywordList.push(good)
            }
          }
        }

        // 分页
        for (let i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (i >= keywordList.length) break
          data.list.push(keywordList[i])
        }

        // 汇总数据
        data.totalCount = keywordList.length
        data.totalPage = Math.ceil(data.totalCount / pageSize)
        data.hasNext = pageNum < data.totalPage

        //模拟接口请求成功
        console.log(
          'apiGoods: pageNum=' +
            pageNum +
            ', pageSize=' +
            pageSize +
            ', data.list.length=' +
            data.list.length +
            ', totalCount=' +
            data.totalCount +
            ', totalPage=' +
            data.totalPage +
            ', hasNext=' +
            data.hasNext +
            (keyword ? ', keyword=' + keyword : '')
        )
        resolute(data)
      } catch (e) {
        //模拟接口请求失败
        reject(e)
      }
    }, 1000)
  })
}

// 获取微博列表
export function apiWeiboList(pageNum: number, pageSize: number) {
  // #ifdef H5
  pageNum == 1 && console.error(h5ErrorTip)
  // #endif
  return new Promise((resolute, reject) => {
    //延时2秒,模拟联网
    setTimeout(function () {
      try {
        const list = []
        if (!pageNum) {
          //此处模拟下拉刷新返回的数据
          const id = new Date().getTime()
          const newObj = {
            id: id,
            title: '【新增微博' + id + '】 新增微博',
            content: '新增微博的内容,新增微博的内容'
          }
          list.push(newObj)
        } else {
          //此处模拟上拉加载返回的数据
          for (let i = 0; i < pageSize; i++) {
            const upIndex = (pageNum - 1) * pageSize + i + 1
            const newObj = {
              id: upIndex,
              title: '【微博' + upIndex + '】 标题标题标题标题标题标题',
              content: '内容内容内容内容内容内容内容内容内容内容'
            }
            list.push(newObj)
          }
          console.log(
            'apiWeiboList: page.num=' +
              pageNum +
              ', page.size=' +
              pageSize +
              ', curPageData.length=' +
              list.length
          )
        }
        //模拟接口请求成功
        resolute(list)
      } catch (e) {
        //模拟接口请求失败
        reject(e)
      }
    }, 2000)
  })
}

// 获取消息列表(共5页消息)
export function apiMsgList(pageNum: number, pageSize: number) {
  // #ifdef H5
  pageNum == 1 && console.error(h5ErrorTip)
  // #endif
  return new Promise((resolute, reject) => {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        const list = []
        //模拟下拉加载更多记录
        for (let i = 0; i < pageSize; i++) {
          const msgId = (pageNum - 1) * pageSize + i + 1
          const newObj = {
            id: msgId,
            title: '【消息' + msgId + '】',
            content: '内容: 下拉获取聊天记录'
          }
          // 此处模拟只有5页的消息 (第5页只有3条)
          if (pageNum >= 5 && i >= 3) {
            continue
          } else {
            list.unshift(newObj)
          }
        }
        console.log(
          'apiMsgList: page.num=' +
            pageNum +
            ', page.size=' +
            pageSize +
            ', curPageData.length=' +
            list.length
        )
        //模拟接口请求成功
        resolute(list)
      } catch (e) {
        //模拟接口请求失败
        reject(e)
      }
    }, 1000)
  })
}

// 获取tabs类目
export function apiGetTabs() {
  return new Promise((resolute, reject) => {
    //延时,模拟联网
    setTimeout(function () {
      try {
        const tabs = [
          '全部',
          '奶粉',
          '面膜',
          '图书',
          '果汁',
          '奶瓶',
          '美素',
          '花王',
          '韩蜜',
          '口红',
          '毛巾',
          '玩具',
          '衣服'
        ]
        //模拟接口请求成功
        resolute(tabs)
      } catch (e) {
        //模拟接口请求失败
        reject(e)
      }
    }, 10)
  })
}
