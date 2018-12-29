// 销售
let salesRole = {
  sales: [
    'sales_viewcustomer',
    'sales_addcustomer',
    'sales_dashboard'
  ]
};

let salesList = [{
    link: '/sales/dashboard',
    title: '销售信息总览',
    name: 'sales_dashboard'
  },
  {
    link: '/sales/addcustomer',
    title: '添加客户',
    name: 'sales_addcustomer'
  },
  {
    link: '/sales/viewcustomer',
    title: '客户人',
    name: 'sales_viewcustomer'
  }
]

export {
  salesList,
  salesRole
}
