const startupData = [
  {
    id: 1,
    name: "Masai School",
    image: "assets/masai.jpeg",
    category: "Education",
    founder: "Parteek Shukla, Nrupul Dev, Yogesh Bhat",
    founded: "2019",
    headquarter: ["Bengaluru, Karnataka"],
    website: "https://www.masaischool.com/",
    description: "Masai is an outcome driven career school, Its mission is to skill India's untapped & underutilized talent",
    total_funding: "USD 22 million",
    investors: ["IndiaQuotient", "unitus venture", "omidyar network india"],
    team_size: 250,
    achievements: "",
    market_presence: "India",
    revenue_model: "Online Pay after placement model",
    user_base: "Over 10000 users",
    awards: ["Emerging startups of 2023 by Tracxn"],
  },
  {
    id: 2 ,
    name: "OYO Rooms",
    image: "assets/oyorooms.png",
    category: "Travel",
    founder: "Ritesh Agarwal",
    founded: "2013",
    headquarter:["Gurugram","Haryana"],
    website: "https://www.oyorooms.com/",
    description:
      "An online hotel booking platform that offers affordable and convenient accommodation options.",
    total_funding: "USD 2.5 billion",
    investors: ["SoftBank Vision Fund", "Lightspeed Venture Partners", "Accel"],
    team_size: 10000,
    achievements: "Received the 2019 Red Herring Top 100 Global Award",
    market_presence: "Global",
    revenue_model: "Online hotel bookings",
    user_base: "Over 100 million users",
    awards: ["Best Hotel Booking App of the Year 2020"],
  },
  {
    id: 3,
    name: "Zomato",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    category: "Food delivery",
    founder: "Deepinder Goyal and Pankaj Chaddah",
    founded: "2008",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.zomato.com/",
    description:
      "An online food delivery platform that connects restaurants with customers.",
    total_funding: "USD 1.3 billion",
    investors: [
      "Ant Financial",
      "Tiger Global Management",
      "D1 Capital Partners",
    ],
    team_size: 5000,
    achievements: "Received the 2019 Economic Times Startup of the Year Award",
    market_presence: "Global",
    revenue_model: "Commissions from restaurants",
    user_base: "Over 100 million users",
    awards: ["Best Food Delivery App of the Year 2020"],
  },

  {
    id: 4,
    name: "Razorpay",
    image: "/assets/razorpay.jpeg",
    category: "Payments",
    founder: "Shashank Kumar and Harshil Mathur",
    founded: "2014",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://razorpay.com/",
    description:
      "A payment gateway that allows businesses to accept payments online and offline.",
    total_funding: "USD 1.3 billion",
    investors: ["Insight Partners", "Accel", "Tiger Global Management"],
    team_size: 1500,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Transaction fees",
    user_base: "Over 1 million merchants",
    awards: ["Best Payment Gateway of the Year 2020"],
  },
  {
    id: 5,
    name: "Swiggy",
    image: "/assets/Swiggy_logo.png",
    category: "Food delivery",
    founder: "Sriharsha Majety, Nandan Reddy, and Rahul Jaimini",
    founded: "2014",
    headquarter:["Bengaluru", "Karnataka" ],
    website: "https://www.swiggy.com/",
    description:
      "An online food delivery platform that connects restaurants with customers.",
    total_funding: "USD 4.5 billion",
    investors: ["SoftBank Vision Fund", "Insight Partners", "Accel"],
    team_size: 7000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from restaurants",
    user_base: "Over 100 million users",
    awards: ["Best Food Delivery App of the Year 2020"],
  },
  {
    id: 6,
    name: "Byju's",
    image: "/assets/Byjus-Symbol.png",
    category: "Education",
    founder: "Byju Raveendran",
    founded: "2011",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://byjus.com/",
    description:
      "An online education platform that offers video courses taught by experts in their fields.",
    total_funding: "USD 10.4 billion",
    investors: ["Tiger Global Management", "DST Global", "Insight Partners"],
    team_size: 10000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription-based education",
    user_base: "Over 70 million users",
    awards: ["Best Online Learning Platform of the Year 2020"],
  },

  {
    id: 7,
    name: "BharatPe",
    image: "/assets/bharat.png",
    category: "Payments",
    founder: "Ashneer Grover and Shashank Sachan",
    founded: "2018",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.bharatpe.com/",
    description:
      "A digital payments platform that allows merchants to accept payments using QR codes.",
    total_funding: "USD 2.8 billion",
    investors: ["Tiger Global Management", "Insight Partners", "Accel"],
    team_size: 1000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Transaction fees",
    user_base: "Over 1 million merchants",
    awards: ["Best Payment Gateway of the Year 2021"],
  },
  {
    id: 8,
    name: "Urban Company",
    image: "/assets/uc.jpg",
    category: "On-demand services",
    founder: "Ankit Agarwal, Abhiraj Bahl, and Vaibhav Gupta",
    founded: "2014",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.urbancompany.com/",
    description:
      "An on-demand services platform that connects users with service providers for a variety of tasks, such as home cleaning, laundry, and repairs.",
    total_funding: "USD 1.3 billion",
    investors: [
      "Tiger Global Management",
      "SoftBank Vision Fund",
      "Insight Partners",
    ],
    team_size: 5000,
    achievements: "Received the 2019 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from service providers",
    user_base: "Over 10 million users",
    awards: ["Best On-demand Services Platform of the Year 2020"],
  },
  {
    id: 9,
    name: "Cred",
    image: "/assets/cred.png",
    category: "FinTech",
    founder: "Kunal Shah",
    founded: "2018",
    headquarter:["Mumbai", "Maharashtra"] ,
    website: "https://www.cred.club/",
    description:
      "A rewards platform that offers cashback and other benefits to users who pay their credit card bills on time.",
    total_funding: "USD 1 billion",
    investors: ["Tiger Global Management", "Sequoia Capital", "Accel"],
    team_size: 1000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Membership fees",
    user_base: "Over 1 million users",
    awards: ["Best FinTech Platform of the Year 2020"],
  },
  {
    id: 10,
    name: "Udaan",
    image: "/assets/udaan.png",
    category: "B2B marketplace",
    founder: "Amod Malviya, Vaibhav Gupta, and Sujeet Kumar",
    founded: "2016",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.udan.com/",
    description:
      "A B2B marketplace that connects small businesses with suppliers of goods and services.",
    total_funding: "USD 3.8 billion",
    investors: [
      "SoftBank Vision Fund",
      "Tiger Global Management",
      "DST Global",
    ],
    team_size: 3000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from suppliers",
    user_base: "Over 1 million businesses",
    awards: ["Best B2B Marketplace of the Year 2020"],
  },
  {
    id: 11,
    name: "Healofy",
    image: "/assets/heal.png",
    category: "Healthcare",
    founder: "Prashant Jain and Sameer Singh",
    founded: "2015",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://www.healofy.com/",
    description:
      "A healthcare platform that connects patients with doctors and other healthcare providers.",
    total_funding: "USD 225 million",
    investors: ["Tiger Global Management", "Sequoia Capital", "Accel"],
    team_size: 1000,
    achievements: "Received the 2019 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription fees",
    user_base: "Over 1 million users",
    awards: ["Best Healthcare Platform of the Year 2019"],
  },

  {
    id: 12,
    name: "Darwinbox",
    image: "/assets/darwin.jpg",
    category: "Human resources",
    founder: "Punit Parekh and Rohit Tuli",
    founded: "2015",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://darwinbox.com/",
    description:
      "A human resources platform that helps businesses manage their employees' data and workflows.",
    total_funding: "USD 150 million",
    investors: [
      "Sequoia Capital",
      "Tiger Global Management",
      "Lightspeed Venture Partners",
    ],
    team_size: 1000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "Global",
    revenue_model: "Subscription fees",
    user_base: "Over 1000 businesses",
    awards: ["Best Human Resources Platform of the Year 2020"],
  },
  {
    id: 13,
    name: "PharmEasy",
    image: "/assets/pharmeasy.jpg",
    category: "Healthcare",
    founder: "Dinesh Agarwal and Manish Aggarwal",
    founded: "2015",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://pharmeasy.com/",
    description:
      "An online pharmacy that delivers medicines to customers' doorsteps.",
    total_funding: "USD 1 billion",
    investors: ["SoftBank Vision Fund", "Tiger Global Management", "Accel"],
    team_size: 2000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from pharmaceutical companies",
    user_base: "Over 10 million users",
    awards: ["Best Online Pharmacy of the Year 2020"],
  },
  {
    id: 14,
    name: "Apna",
    image: "/assets/apna.png",
    category: "Jobs",
    founder: "Ashish Munjal, Abhinav Gupta, and Varun Dua",
    founded: "2017",
    headquarter:  ["Gurugram", "Haryana"],
    website: "https://www.apna.co/",
    description:
      "A job search platform that connects job seekers with employers.",
    total_funding: "USD 100 million",
    investors: [
      "Tiger Global Management",
      "Sequoia Capital",
      "Lightspeed Venture Partners",
    ],
    team_size: 1000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription fees",
    user_base: "Over 10 million users",
    awards: ["Best Jobs Platform of the Year 2021"],
  },

  {
    id: 15,
    name: "Unacademy",
    image: "/assets/un.png",
    category: "Education",
    founder: "Gaurav Munjal, Roman Saini, and Hemesh Singh",
    founded: "2015",
    headquarter:  ["Gurugram", "Haryana"],
    website: "https://unacademy.com/",
    description:
      "An online learning platform that offers courses on a variety of topics, including academics, professional skills, and hobbies.",
    total_funding: "USD 600 million",
    investors: [
      "Tiger Global Management",
      "SoftBank Vision Fund",
      "Sequoia Capital",
    ],
    team_size: 4000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription fees",
    user_base: "Over 50 million users",
    awards: ["Best Online Learning Platform of the Year 2020"],
  },

  {
    id: 16,
    name: "Meesho",
    image: "/assets/meesho.png",
    category: "E-commerce",
    founder: "Vidit Aatrey and Sanjeev Barnwal",
    founded: "2015",
    headquarter:  ["Gurugram", "Haryana"],
    website: "https://www.meesho.com/",
    description:
      "An online marketplace that allows individuals to sell products to other individuals.",
    total_funding: "USD 2.1 billion",
    investors: [
      "Tiger Global Management",
      "SoftBank Vision Fund",
      "Insight Partners",
    ],
    team_size: 7000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from sellers",
    user_base: "Over 100 million users",
    awards: ["Best E-commerce Platform of the Year 2021"],
  },

  {
    id: 17,
    name: "Groww",
    image: "/assets/groww.png",
    category: "Finance",
    founder: "Lalit Keswani, Harsh Jain, and Ishan Bansal",
    founded: "2016",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://groww.in/",
    description:
      "An investment platform that allows users to invest in stocks, mutual funds, and other financial products.",
    total_funding: "USD 1.2 billion",
    investors: ["Tiger Global Management", "Sequoia Capital", "Accel"],
    team_size: 1000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from transactions",
    user_base: "Over 10 million users",
    awards: ["Best Investment Platform of the Year 2021"],
  },
  {
    id: 18,
    name: "PolicyBazaar",
    image:
      "/assets/policy.jpg",
    category: "Insurance",
    founder: "Ashish Gupta",
    founded: "2008",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.policybazaar.com/",
    description:
      "An online insurance marketplace that allows users to compare and buy insurance policies.",
    total_funding: "USD 1 billion",
    investors: [
      "SoftBank Vision Fund",
      "Tiger Global Management",
      "Sequoia Capital",
    ],
    team_size: 1000,
    achievements: "Received the 2019 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from insurance companies",
    user_base: "Over 70 million users",
    awards: ["Best Insurance Marketplace of the Year 2019"],
  },
  {
    id: 19,
    name: "Ola",
    image:
      "/assets/ola.jpeg",
    category: "Transportation",
    founder: "Bhavish Aggarwal and Ankit Bhati",
    founded: "2010",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://www.olacabs.com/",
    description:
      "An online cab hailing service that operates in over 250 cities in India.",
    total_funding: "USD 5.2 billion",
    investors: [
      "SoftBank Vision Fund",
      "Tiger Global Management",
      "DST Global",
    ],
    team_size: 10000,
    achievements: "Received the 2016 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from cab drivers",
    user_base: "Over 100 million users",
    awards: ["Best Cab Hailing Service of the Year 2016"],
  },
  {
    id: 20,
    name: "Paytm",
    image:"/assets/paytm.jpg",
    category: "Fintech",
    founder: "Vijay Shekhar Sharma",
    founded: "2000",
    headquarter: ["Noida", "Uttar Pradesh"],
    website: "https://paytm.com/",
    description:
      "A digital payments and financial services platform that allows users to make payments, transfer money, and invest.",
    total_funding: "USD 10 billion",
    investors: ["Ant Financial", "SoftBank Vision Fund", "Sequoia Capital"],
    team_size: 5000,
    achievements: "Received the 2018 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Transaction fees",
    user_base: "Over 300 million users",
    awards: ["Best FinTech Platform of the Year 2018"],
  },
  {
    id: 21,
    name: "Cure.fit",
    image:
      "/assets/curefit.png",
    category: "Healthcare",
    founder: "Mukesh Bansal and Ankit Nagori",
    founded: "2016",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.cure.fit/",
    description:
      "A health and wellness platform that offers a variety of services, including online yoga and fitness classes, meal plans, and doctor consultations.",
    total_funding: "USD 1.4 billion",
    investors: ["Sequoia Capital", "Tiger Global Management", "Accel"],
    team_size: 3000,
    achievements: "Received the 2018 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription fees",
    user_base: "Over 10 million users",
    awards: ["Best Healthcare Platform of the Year 2018"],
  },
  {
    id: 22,
    name: "Livspace",
    image:"/assets/livspace.jpg",
    category: "Interior design",
    founder: "Ankiti Bose and Ramakant Sharma",
    founded: "2015",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://www.livspace.com/",
    description:
      "An online interior design platform that connects homeowners with interior designers.",
    total_funding: "USD 650 million",
    investors: [
      "SoftBank Vision Fund",
      "Tiger Global Management",
      "Sequoia Capital",
    ],
    team_size: 2000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from designers",
    user_base: "Over 1 million users",
    awards: ["Best Interior Design Platform of the Year 2020"],
  },

  {
    id:23,
    name: "ElasticRun",
    image:
      "/assets/elastic.jpg",
    category: "E-commerce",
    founder: "Amit Agarwal and Saurabh Nigam",
    founded: "2016",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.elastic.run.com/",
    description:
      "An e-commerce fulfillment platform that helps retailers fulfill orders to customers.",
    total_funding: "USD 350 million",
    investors: [
      "Tiger Global Management",
      "Sequoia Capital",
      "Lightspeed Venture Partners",
    ],
    team_size: 1000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription fees",
    user_base: "Over 100,000 retailers",
    awards: ["Best E-commerce Fulfillment Platform of the Year 2021"],
  },
  {
    id: 24,
    name: "Zetwerk",
    image:
      "/assets/Zetwerk.jpg",
    category: "Manufacturing",
    founder: "Srinath Ramasubramanian and Amrit Acharya",
    founded: "2018",
    headquarter: ["Bengaluru", "Karnataka"],
    website: "https://www.zetwerk.com/",
    description:
      "An online manufacturing marketplace that connects manufacturers with businesses.",
    total_funding: "USD 250 million",
    investors: [
      "Tiger Global Management",
      "Sequoia Capital",
      "Lightspeed Venture Partners",
    ],
    team_size: 1000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Commissions from manufacturers",
    user_base: "Over 10,000 businesses",
    awards: ["Best Manufacturing Marketplace of the Year 2021"],
  },
  {
    id: 25,
    name: "Pine Labs",
    image:
      "/assets/pine.png",
    category: "Payments",
    founder: "Harshvardhan Lunia and Rajul Garg",
    founded: "2011",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.pinelabs.com/",
    description:
      "A payments processing company that provides a variety of payment solutions to businesses.",
    total_funding: "USD 500 million",
    investors: ["Insight Partners", "Accel", "Tiger Global Management"],
    team_size: 1000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India, Southeast Asia, and the Middle East",
    revenue_model: "Transaction fees",
    user_base: "Over 1 million merchants",
    awards: ["Best Payments Processing Company of the Year 2021"],
  },
  {
    id: 26,
    name: "UpGrad",
    image:
      "/assets/upgrade.png",
    category: "Education",
    founder: "Naresh Gupta and Mayank Kumar",
    founded: "2015",
    headquarter: ["Gurugram", "Haryana"],
    website: "https://www.upgrad.com/",
    description:
      "An online education platform that offers courses in a variety of fields, including technology, business, and management.",
    total_funding: "USD 1 billion",
    investors: [
      "Tiger Global Management",
      "Sequoia Capital",
      "SoftBank Vision Fund",
    ],
    team_size: 1000,
    achievements: "Received the 2021 Economic Times Startup of the Year Award",
    market_presence: "India and the United States",
    revenue_model: "Subscription fees",
    user_base: "Over 1 million learners",
    awards: ["Best Education Platform of the Year 2021"],
  },
  {
    id: 27,
    name: "Zee5",
    image:"/assets/zee5.jpeg",
    category: "OTT",
    founder: "Subhash Chandra",
    founded: "2008",
    headquarter: ["Mumbai", "Maharashtra"],
    website: "https://zee5.com/",
    description:
      "An over-the-top (OTT) platform that offers a variety of TV shows, movies, and web series.",
    total_funding: "USD 1.3 billion",
    investors: ["Temasek Holdings", "Warburg Pincus", "ADIA"],
    team_size: 1000,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription fees",
    user_base: "Over 100 million users",
    awards: ["Best OTT Platform of the Year 2020"],
  },

  {
    id: 28,
    name: "Digit Insurance",
    image: "/assets/digit.png",
    category: "Insurance",
    founder: "Kamesh Goyal and Alok Bansal",
    founded: "2017",
    headquarter:["Bengaluru", "Karnataka"],
    website: "https://digitinsurance.com/",
    description:
      "A digital-only general insurance company that offers a range of insurance products, including motor, health, travel, and home insurance.",
    total_funding: "USD 500 million",
    investors: [
      "SoftBank Vision Fund",
      "Tiger Global Management",
      "Goldman Sachs",
    ],
    team_size: 1500,
    achievements: "Received the 2020 Economic Times Startup of the Year Award",
    market_presence: "India",
    revenue_model: "Subscription fees",
    user_base: "Over 10 million users",
    awards: ["Best Digital Insurance Company of the Year 2020"],
  },
  {
    "id": 29,
    "name": "InsuranceDekho",
    "image": "/assets/insurance.webp",
    "category": "Insurance",
    "founder": "Amit Jain and Yashish Dahiya",
    "founded": "2008",
    "headquarter": ["Mumbai", "Maharashtra"],
    "website": "https://www.insurancedekho.com/",
    "description": "An online insurance marketplace that helps users compare and buy insurance products from a variety of insurers.",
    "total_funding": "USD 100 million",
    "investors": ["Tiger Global Management", "Sequoia Capital", "Accel Partners"],
    "team_size": 1000,
    "achievements": "Received the 2018 Economic Times Startup of the Year Award",
    "market_presence": "India",
    "revenue_model": "Commissions from insurers",
    "user_base": "Over 50 million users",
    "awards": ["Best Insurance Marketplace of the Year 2018"]
  },
  {
    "id": 30,
    "name": "Turtlemint",
    "image": "/assets/Turtlemint-logo.png",
    "category": "Insurance",
    "founder": "Amit Sharma and Prashant Fuloria",
    "founded": "2015",
    "headquarter": ["Bengaluru", "Karnataka"],
    "website": "https://turtlemint.com/",
    "description": "A health insurance startup that offers a range of health insurance products, including individual, family, and group health plans.",
    "total_funding": "USD 100 million",
    "investors": ["Sequoia Capital", "Accel Partners", "Tiger Global Management"],
    "team_size": 1000,
    "achievements": "Received the 2019 Forbes India 30 Under 30 Award",
    "market_presence": "India",
    "revenue_model": "Subscription fees",
    "user_base": "Over 5 million users",
    "awards": ["Best Health Insurance Startup of the Year 2019"]
  },
  {
    "id": 31,
    "name": "Acko",
    "image": "/assets/acko-logo.png",
    "category": "Insurance",
    "founder": "Rohan Agarwal and Varun Dua",
    "founded": "2016",
    "headquarter": ["Gurugram", "Haryana"],
    "website": "https://acko.com/",
    "description": "A digital-only general insurance company that offers a range of insurance products, including motor, health, travel, and home insurance. Acko also offers a unique pay-as-you-drive insurance plan that allows users to only pay for the insurance they use.",
    "total_funding": "USD 400 million",
    "investors": ["Tiger Global Management", "Sequoia Capital", "Accel Partners"],
    "team_size": 1000,
    "achievements": "Received the 2021 Economic Times Startup of the Year Award",
    "market_presence": "India",
    "revenue_model": "Subscription fees",
    "user_base": "Over 10 million users",
    "awards": ["Best Digital Insurance Company of the Year 2021"]
  },
  {
    "id": 32,
    "name": "Coverfox",
    "image": "/assets/coverfox_logo.jpg",
    "category": "Insurance",
    "founder": "Vishal Shah and Aditya Gupta",
    "founded": "2012",
    "headquarter": ["Bengaluru", "Karnataka"],
    "website": "https://coverfox.com/",
    "description": "An online insurance marketplace that helps users compare and buy insurance products from a variety of insurers. Coverfox also offers a range of insurance-related services, such as policy management and claims assistance.",
    "total_funding": "USD 300 million",
    "investors": ["Tiger Global Management", "Sequoia Capital", "Accel Partners"],
    "team_size": 1500,
    "achievements": "Received the 2017 Economic Times Startup of the Year Award",
    "market_presence": "India",
    "revenue_model": "Commissions from insurers",
    "user_base": "Over 75 million users",
    "awards": ["Best Insurance Marketplace of the Year 2017"]
  },
  {
    "id": 33,
    "name": "Flipkart",
    "image": "/assets/Flipkart-logo.png",
    "category": "E-commerce",
    "founder": "Sachin Bansal and Binny Bansal",
    "founded": "2007",
    "headquarter": ["Bengaluru", "Karnataka"],
    "website": "https://www.flipkart.com/",
    "description": "An e-commerce company that sells a variety of products, including electronics, apparel, and home goods. Flipkart is one of the largest e-commerce companies in India.",
    "total_funding": "USD 12.7 billion",
    "investors": ["Walmart", "Tiger Global Management", "Accel"],
    "team_size": 30000,
    "achievements": "Received the 2016 Economic Times Startup of the Year Award",
    "market_presence": "India",
    "revenue_model": "Commissions from sellers",
    "user_base": "Over 300 million users",
    "awards": ["Best E-commerce Company of the Year 2016"]
  },
  {
    "id": 34,
    "name": "Delhivery",
    "image": "/assets/delhivery.png",
    "category": "Logistics",
    "founder": "Sahil Barua",
    "founded": "2011",
    "headquarter": ["Gurugram", "Haryana"],
    "website": "https://www.delhivery.com/",
    "description": "A logistics company that provides end-to-end delivery services for businesses. Delhivery is one of the largest logistics companies in India.",
    "total_funding": "USD 2 billion",
    "investors": ["Tiger Global Management", "SoftBank Vision Fund", "Accel Partners"],
    "team_size": 20000,
    "achievements": "Received the 2020 Economic Times Startup of the Year Award",
    "market_presence": "India",
    "revenue_model": "Freight charges",
    "user_base": "Over 100,000 businesses",
    "awards": ["Best Logistics Company of the Year 2020"]
  },
  {
    "id": 35,
    "name": "Jio",
    "image": "/assets/jio.png",
    "category": "Telecom",
    "founder": "Mukesh Ambani",
    "founded": "2016",
    "headquarter": ["Mumbai", "Maharashtra"],
    "website": "https://www.jio.com/",
    "description": "A telecom company that provides 4G LTE services in India. Jio is one of the largest telecom companies in India.",
    "total_funding": "USD 20 billion",
    "investors": ["Reliance Industries", "Google", "Facebook"],
    "team_size": 40000,
    "achievements": "Received the 2017 Economic Times Startup of the Year Award",
    "market_presence": "India",
    "revenue_model": "Subscription fees",
    "user_base": "Over 400 million users",
    "awards": ["Best Telecom Company of the Year 2017"]
  }
  
];




  const productId= JSON.parse(localStorage.getItem("product-id"));
  
  let data=[]
  for(let i=0; i<=startupData.length-1; i++){

       if(startupData[i].id == Number(productId)){
                   data.push(startupData[i])
       }
  }

let rightProductDiv = document.querySelector(".right-product-div");
  function displayData(data) {
   
    data.forEach((el) => {
      let div = document.createElement("div");
           
       let imagediv = document.createElement("div");
           imagediv.setAttribute("class","image-div")

       let image = document.createElement("img");
           image.setAttribute("src",`${el.image}`)

           
       let div1 = document.createElement("div")
           div1.setAttribute("class","details-about-company")
           
       let name = document.createElement("h2");
           name.textContent = `Name : ${el.name}`;
       let desc = document.createElement("p");
           desc.innerHTML = `<b>About </b> :  ${el.description}`;
       let founded = document.createElement("p")
           founded.innerHTML =`<b>Founded</b> : ${el.founded}` ;
       let founder = document.createElement("p");
       founder.innerHTML =`<b>Founder</b> : ${el.founder}` ;
       let funding = document.createElement("p")
       funding.innerHTML =`<b>Funding</b> : ${el.total_funding}` ;
       let investors = document.createElement("p");
       investors.innerHTML =`<b>Investors</b> : ${el.investors}` ;
       let achievements = document.createElement("p");
       achievements.innerHTML =`<b>Achivements</b> : ${el.achievements}` ;
       let market = document.createElement("p");
       market.innerHTML =`<b>Market</b> : ${el.market_presence}` ;
       let category = document.createElement("p");
         category.innerHTML =`<b>Category</b> : ${el.category}` ;
       let revenue= document.createElement("p");
            revenue.innerHTML =`<b>Revenue Model</b> : ${el.revenue_model}` ;
       let  user = document.createElement("p");
       user.innerHTML =`<b>User base</b> : ${el.user_base}` ;
       let awards = document.createElement("p");
       awards.innerHTML =`<b>Awards</b> : ${el.awards}` ;
        let website = document.createElement("a");
             website.setAttribute("href", `${el.website}`)
              website.setAttribute("class", "website-link"); 
              website.innerHTML =`<b>Website</b> : ${el.website}` ;
       

  
            div1.append(name,desc,founded,founder,funding,investors,achievements,market,category, revenue,user,awards, website)
             imagediv.append(image)
            div.append(imagediv,div1)
           rightProductDiv.append(div)
     
      
    });
  }
  
  displayData(data);

