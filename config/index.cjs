/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx826da9a4aa3cd306',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7ecd996de661676035656f3b152e3a0b',

  PROVINCE: '江苏',
  CITY: '常州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'darling',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oPGmO57YGKsFvQLdKkMtn1rc3tCY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'pBqBDm2RpPNve2cCSt5ozXhcLzYTDqazixLHeayT0rU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1993', date: '04-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '李四', year: '1996', date: '09-31',
//         },
        {
          type: '节日', name: '相识纪念日', year: '2016', date: '11-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-12-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-02-14' },
      ],
    },
    
    
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oPGmO506S5viXGm39r_e-1wBMiW4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'pBqBDm2RpPNve2cCSt5ozXhcLzYTDqazixLHeayT0rU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1993', date: '04-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '李四', year: '1996', date: '09-31',
//         },
        {
          type: '节日', name: '相识纪念日', year: '2016', date: '11-07',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-12-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-02-14' },
      ],
    },
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

