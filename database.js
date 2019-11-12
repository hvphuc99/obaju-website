const Sequelize = require('sequelize');
const db = new Sequelize('daki5pu27d7q49', 'ouqsljzeeyrsjz', '87623f77135eea50f40b19797fec300f3785019bb524ee2bb1efeec7ae8b8cec', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


var Users = db.define('users', {
  uid: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  pass: {
    type: Sequelize.STRING
  },
  phonenumber: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  dateofbirth: {
    type: Sequelize.DATEONLY
  },
  image: {
    type: Sequelize.STRING
  }
});

var Brands = db.define('brands', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
});

var Danhmuc = db.define('danhmuc', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
});

var Items = db.define('items', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  idDanhMuc: {
    type: Sequelize.STRING
  },
  typeItem: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  idBrand: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.INTEGER
  },
  review: {
    type: Sequelize.STRING
  },
  describe: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.INTEGER
  },
  sale: {
    type: Sequelize.STRING
  }
});

var Orders = db.define('orders', {
  id: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  uid: {
    type: Sequelize.STRING
  },
  idState: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATEONLY
  },
  items: {
    type: Sequelize.STRING
  }
});

var StateOrders = db.define('stateOrders', {
  idItem: {
    primaryKey: true,
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  }
});

Users.sync({ force: true }).then(function () {
  return Users.bulkCreate([
    {
      "uid": "U001",
      "username": "cobedoihon",
      "pass": "khongcopass123",
      "phonenumber": "0911234560",
      "email": "fake_email1@gmail.com",
      "name": "Nguyễn Thị An",
      "dateofbirth": "1979/02/19"
    },
    {
      "uid": "U002",
      "username": "changtraidungcam",
      "pass": "khongcopass124",
      "phonenumber": "0911234561",
      "email": "fake_email2@gmail.com",
      "name": "Nguyễn Văn Bảo",
      "dateofbirth": "1967/08/18"
    },
    {
      "uid": "U003",
      "username": "hotboy_codon_vippro",
      "pass": "khongcopass125",
      "phonenumber": "0911234562",
      "email": "fake_email3@gmail.com",
      "name": "Đoàn Nguyễn Tấn Phúc",
      "dateofbirth": "1999/08/25"
    },
    {
      "uid": "U004",
      "username": "daigia_nhagiau123",
      "pass": "khongcopass126",
      "phonenumber": "0911234563",
      "email": "fake_email4@gmail.com",
      "name": "Nguyễn Anh Dũng",
      "dateofbirth": "1969/04/13"
    },
    {
      "uid": "U005",
      "username": "hello_world123",
      "pass": "khongcopass127",
      "phonenumber": "0911234564",
      "email": "fake_email5@gmail.com",
      "name": "Nguyễn Văn Én",
      "dateofbirth": "1976/06/11"
    },
    {
      "uid": "U006",
      "username": "default_user001",
      "pass": "khongcopass128",
      "phonenumber": "0911234565",
      "email": "fake_email6@gmail.com",
      "name": "Kiara Horne",
      "dateofbirth": "1975/08/12"
    },
    {
      "uid": "U007",
      "username": "default_user002",
      "pass": "khongcopass129",
      "phonenumber": "0911234566",
      "email": "fake_email7@gmail.com",
      "name": "Fletcher Christian",
      "dateofbirth": "1975/04/04"
    },
    {
      "uid": "U008",
      "username": "default_user003",
      "pass": "khongcopass130",
      "phonenumber": "0911234567",
      "email": "fake_email8@gmail.com",
      "name": "Cody Smith",
      "dateofbirth": "2000/10/25"
    },
    {
      "uid": "U009",
      "username": "default_user004",
      "pass": "khongcopass131",
      "phonenumber": "0911234568",
      "email": "fake_email9@gmail.com",
      "name": "Dylan Mejia",
      "dateofbirth": "1966/09/02"
    },
    {
      "uid": "U010",
      "username": "default_user005",
      "pass": "khongcopass132",
      "phonenumber": "0911234569",
      "email": "fake_email10@gmail.com",
      "name": "Kellie Wheeler",
      "dateofbirth": "1980/10/25"
    },
    {
      "uid": "U011",
      "username": "default_user006",
      "pass": "khongcopass133",
      "phonenumber": "0911234570",
      "email": "fake_email11@gmail.com",
      "name": "Hakeem Joyce",
      "dateofbirth": "1976/02/07"
    },
    {
      "uid": "U012",
      "username": "default_user007",
      "pass": "khongcopass134",
      "phonenumber": "0911234571",
      "email": "fake_email12@gmail.com",
      "name": "Hu Bowen",
      "dateofbirth": "1991/06/18"
    },
    {
      "uid": "U013",
      "username": "default_user008",
      "pass": "khongcopass135",
      "phonenumber": "0911234572",
      "email": "fake_email13@gmail.com",
      "name": "Lawrence Mcdaniel",
      "dateofbirth": "2003/08/19"
    },
    {
      "uid": "U014",
      "username": "default_user009",
      "pass": "khongcopass136",
      "phonenumber": "0911234573",
      "email": "fake_email14@gmail.com",
      "name": "Pascale Shepherd",
      "dateofbirth": "1981/12/23"
    },
    {
      "uid": "U015",
      "username": "default_user010",
      "pass": "khongcopass137",
      "phonenumber": "0911234574",
      "email": "fake_email15@gmail.com",
      "name": "Allistair Hobbs",
      "dateofbirth": "2001/05/10"
    },
    {
      "uid": "U016",
      "username": "default_user011",
      "pass": "khongcopass138",
      "phonenumber": "0911234575",
      "email": "fake_email16@gmail.com",
      "name": "Griffin Wood",
      "dateofbirth": "1983/02/21"
    },
    {
      "uid": "U017",
      "username": "default_user012",
      "pass": "khongcopass139",
      "phonenumber": "0911234576",
      "email": "fake_email17@gmail.com",
      "name": "Tanek Ramirez",
      "dateofbirth": "2001/11/15"
    },
    {
      "uid": "U018",
      "username": "default_user013",
      "pass": "khongcopass140",
      "phonenumber": "0911234577",
      "email": "fake_email18@gmail.com",
      "name": "Macaulay Alexander",
      "dateofbirth": "2002/01/08"
    },
    {
      "uid": "U019",
      "username": "default_user014",
      "pass": "khongcopass141",
      "phonenumber": "0911234578",
      "email": "fake_email19@gmail.com",
      "name": "Angela Ballard",
      "dateofbirth": "1967/09/08"
    },
    {
      "uid": "U020",
      "username": "default_user015",
      "pass": "khongcopass142",
      "phonenumber": "0911234579",
      "email": "fake_email20@gmail.com",
      "name": "Basil Murray",
      "dateofbirth": "1996/02/17"
    }
  ]);
})

Brands.sync({ force: true }).then(function () {
  return Brands.bulkCreate([
    {
      "id": "NSX001",
      "name": "Vascara"
    },
    {
      "id": "NSX002",
      "name": "Umbro"
    },
    {
      "id": "NSX003",
      "name": "Nike"
    },
    {
      "id": "NSX004",
      "name": "Adidas"
    },
    {
      "id": "NSX005",
      "name": "Vina giầy"
    }
  ]);
})

Danhmuc.sync({ force: true }).then(function () {
  return Danhmuc.bulkCreate([
    {
      "id": "DM01",
      "name": "Đồ nam"
    },
    {
      "id": "DM02",
      "name": "Đồ nữ"
    },
    {
      "id": "DM03",
      "name": "Giày thể thao"
    },
    {
      "id": "DM04",
      "name": "Giày cao gót"
    }
  ]);
})

Items.sync({ force: true }).then(function () {
  return Items.bulkCreate([
    {
      "id": "SP001",
      "idBrand": "NSX001",
      "name": "Giày Đế Xuồng Quai Họa Tiết Glen Plaid",
      "typeItem": "Giày cao gót",
      "price": "645000",
      "amount": "300",
      "sale": "10%",
      "describe": "Màu đỏ"
    },
    {
      "id": "SP002",
      "idBrand": "NSX001",
      "name": "Giày Cao Gót Ankle Strap Phối Họa Tiết ",
      "typeItem": "Giày cao gót",
      "price": "645000",
      "amount": "145",
      "sale": "10%",
      "describe": "Màu đen"
    },
    {
      "id": "SP003",
      "idBrand": "NSX001",
      "name": "Giày Bít Mũi Nhọn Gót Vuông",
      "typeItem": "Giày cao gót",
      "price": "645000",
      "amount": "145",
      "sale": "10%",
      "describe": "Màu đỏ"
    },
    {
      "id": "SP004",
      "idBrand": "NSX001",
      "name": "Giày Sandal Cao Gót Vân Da Rắn ",
      "typeItem": "Giày cao gót",
      "price": "645000",
      "amount": "145",
      "sale": "10%",
      "describe": "Màu đỏ"
    },
    {
      "id": "SP005",
      "idBrand": "NSX001",
      "name": "Giày Cao Gót Kim Tuyến Metallic",
      "typeItem": "Giày cao gót",
      "price": "645000",
      "amount": "145",
      "sale": "10%",
      "describe": "Màu đỏ"
    },
    {
      "id": "SP006",
      "idBrand": "NSX004",
      "name": "Adidas Grand Court Base “White/Red/Blue”",
      "typeItem": "Giày thể thao",
      "price": "1200000",
      "amount": "150",
      "sale": "5%"
    },
    {
      "id": "SP007",
      "idBrand": "NSX004",
      "name": "Adidas AlphaBounce Beyond 2.0",
      "typeItem": "Giày thể thao",
      "price": "2000000",
      "amount": "10",
      "sale": "5%"
    },
    {
      "id": "SP008",
      "idBrand": "NSX004",
      "name": "Adidas UltraBoost 4.0",
      "typeItem": "Giày thể thao",
      "price": "2500000",
      "amount": "15",
      "sale": "5%"
    },
    {
      "id": "SP009",
      "idBrand": "NSX004",
      "name": "Adidas Lite Racer RBN",
      "typeItem": "Giày thể thao",
      "price": "3000000",
      "amount": "20",
      "sale": "5%"
    },
    {
      "id": "SP010",
      "idBrand": "NSX004",
      "name": "Adidas Duramo 9 “Triple Grey”",
      "typeItem": "Giày thể thao",
      "price": "3500000",
      "amount": "30",
      "sale": "5%"
    },
    {
      "id": "SP011",
      "idBrand": "NSX004",
      "name": "Adidas Superstar Foundation",
      "typeItem": "Giày thể thao",
      "price": "4000000",
      "amount": "100",
      "sale": "5%"
    },
    {
      "id": "SP012",
      "idBrand": "NSX004",
      "name": "Adidas Ultraboost 1.0 “OG”",
      "typeItem": "Giày thể thao",
      "price": "4500000",
      "amount": "110",
      "sale": "5%"
    },
    {
      "id": "SP013",
      "idBrand": "NSX004",
      "name": "Adidas Continental 80 ",
      "typeItem": "Giày thể thao",
      "price": "5000000",
      "amount": "5",
      "sale": "5%"
    },
    {
      "id": "SP014",
      "idBrand": "NSX003",
      "name": "Air Jordan 1 Low",
      "typeItem": "Giày thể thao",
      "price": "2300000",
      "amount": "10",
      "sale": "30%"
    },
    {
      "id": "SP015",
      "idBrand": "NSX003",
      "name": "Lebron 17",
      "typeItem": "Giày thể thao",
      "price": "2300000",
      "amount": "15",
      "sale": "30%"
    },
    {
      "id": "SP016",
      "idBrand": "NSX003",
      "name": "Nike Epic React Flyknit 2",
      "typeItem": "Giày thể thao",
      "price": "2300000",
      "amount": "60",
      "sale": "30%"
    },
    {
      "id": "SP017",
      "idBrand": "NSX003",
      "name": "Nike Joyride Run Flyknit",
      "typeItem": "Giày thể thao",
      "price": "2300000",
      "amount": "70",
      "sale": "30%"
    },
    {
      "id": "SP018",
      "idBrand": "NSX003",
      "name": "Nike Drop-Type Premium",
      "typeItem": "Giày thể thao",
      "price": "2300000",
      "amount": "80",
      "sale": "30%"
    },
    {
      "id": "SP019",
      "idBrand": "NSX005",
      "name": "Giày Tây Da Đen G87",
      "typeItem": "Giày tây",
      "price": "300000",
      "amount": "3",
      "sale": "50%"
    },
    {
      "id": "SP020",
      "idBrand": "NSX005",
      "name": "Giày Tây Da Đen G88",
      "typeItem": "Giày tây",
      "price": "300000",
      "amount": "300",
      "sale": "50%"
    },
    {
      "id": "SP021",
      "idBrand": "NSX005",
      "name": "Giày Tây Da Đen G89",
      "typeItem": "Giày tây",
      "price": "300000",
      "amount": "355",
      "sale": "50%"
    },
    {
      "id": "SP022",
      "idBrand": "NSX005",
      "name": "Giày Tây Da Đen G90",
      "typeItem": "Giày tây",
      "price": "300000",
      "amount": "143",
      "sale": "50%"
    },
    {
      "id": "SP023",
      "idBrand": "NSX005",
      "name": "Giày Tây Da Đen G91",
      "typeItem": "Giày tây",
      "price": "300000",
      "amount": "176",
      "sale": "50%"
    },
    {
      "id": "SP024",
      "idBrand": "NSX005",
      "name": "Giày Tây Da Đen G92",
      "typeItem": "Giày tây",
      "price": "300000",
      "amount": "157",
      "sale": "50%"
    },
    {
      "id": "SP025",
      "idBrand": "NSX002",
      "name": "Phoenix Sneaker",
      "typeItem": "Giày thể thao",
      "price": "10000000",
      "amount": "11",
      "sale": "0%"
    }
  ]);
})

StateOrders.sync({ force: true }).then(function () {
  return StateOrders.bulkCreate([
    {
      "idItem": "S001",
      "state": "Đang chờ xác nhận"
    },
    {
      "idItem": "S002",
      "state": "Đang giao"
    },
    {
      "idItem": "S003",
      "state": "Đã hoàn tất"
    }
  ]);
})

module.exports = Users;
