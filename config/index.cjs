/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbf445b54658b0dbc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '544efd317a0526901ef88e50a5a7603a',

  PROVINCE: '江西',
  CITY: '进贤',

  USERS: [
    {
      // 想要发送的人的名字
      name: '梦梦姐姐',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLR826nbhHyKyemvScjN7Pq5a_dU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'bymN5Vo-Ol1d4hEwYNK1hCFVhX7PLcOsOuVWnJ1F9t4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '梦梦的农历生日', year: '1998', date: '11-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '梦梦的阳历生日', year: '1999', date: '01-04',
        },
    },
  ],

}

module.exports = USER_CONFIG
