

let  founded_by_year = document.querySelector(".foundedByYearDiv");
let  number_of_investors = document.querySelector(".number-of-investors");
let  location_chart = document.querySelector(".location-chart");
let  market_chart = document.querySelector(".market-chart");
let   category_chart = document.querySelector(".category-chart");

let  chartheading1 = document.querySelector(".chart-heading1")
let  chartheading2 = document.querySelector(".chart-heading2")
let  chartheading3 = document.querySelector(".chart-heading3")
let  chartheading4 = document.querySelector(".chart-heading4")
let  chartheading5 = document.querySelector(".chart-heading5")



const startupData = [
    {
      id: 1,
      name: "Masai School",
      image: "assets/masai.jpeg",
      category: "Education",
      founder: "Parteek Shukla, Nrupul Dev, Yogesh Bhat",
      founded: "2019",
      headquarter: "Bengaluru, Karnataka",
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
      headquarter: "Gurugram, Haryana",
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
      headquarter: "Gurugram, Haryana",
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
      id: 6,
      name: "Razorpay",
      image: "/assets/razorpay.jpeg",
      category: "Payments",
      founder: "Shashank Kumar and Harshil Mathur",
      founded: "2014",
      headquarter: "Bengaluru, Karnataka",
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
      id: 7,
      name: "Swiggy",
      image: "/assets/Swiggy_logo.png",
      category: "Food delivery",
      founder: "Sriharsha Majety, Nandan Reddy, and Rahul Jaimini",
      founded: "2014",
      headquarter: "Bengaluru, Karnataka",
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
      id: 8,
      name: "Byju's",
      image: "/assets/Byjus-Symbol.png",
      category: "Education",
      founder: "Byju Raveendran",
      founded: "2011",
      headquarter: "Bengaluru, Karnataka",
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
      id: 10,
      name: "BharatPe",
      image: "/assets/bharat.png",
      category: "Payments",
      founder: "Ashneer Grover and Shashank Sachan",
      founded: "2018",
      headquarter: "Gurugram, Haryana",
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
      id: 11,
      name: "Urban Company",
      image: "/assets/uc.jpg",
      category: "On-demand services",
      founder: "Ankit Agarwal, Abhiraj Bahl, and Vaibhav Gupta",
      founded: "2014",
      headquarter: "Gurugram, Haryana",
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
      id: 12,
      name: "Cred",
      image: "/assets/cred.png",
      category: "FinTech",
      founder: "Kunal Shah",
      founded: "2018",
      headquarter: "Mumbai, Maharashtra",
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
      id: 13,
      name: "Udaan",
      image: "/assets/udaan.png",
      category: "B2B marketplace",
      founder: "Amod Malviya, Vaibhav Gupta, and Sujeet Kumar",
      founded: "2016",
      headquarter: "Gurugram, Haryana",
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
      id: 14,
      name: "Healofy",
      image: "/assets/heal.png",
      category: "Healthcare",
      founder: "Prashant Jain and Sameer Singh",
      founded: "2015",
      headquarter: "Bengaluru, Karnataka",
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
      id: 16,
      name: "Darwinbox",
      image: "/assets/darwin.jpg",
      category: "Human resources",
      founder: "Punit Parekh and Rohit Tuli",
      founded: "2015",
      headquarter: "Bengaluru, Karnataka",
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
      id: 17,
      name: "PharmEasy",
      image: "/assets/pharmeasy.jpg",
      category: "Healthcare",
      founder: "Dinesh Agarwal and Manish Aggarwal",
      founded: "2015",
      headquarter: "Gurugram, Haryana",
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
      id: 18,
      name: "Apna",
      image: "/assets/apna.png",
      category: "Jobs",
      founder: "Ashish Munjal, Abhinav Gupta, and Varun Dua",
      founded: "2017",
      headquarter: "Gurugram, Haryana",
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
      id: 19,
      name: "Unacademy",
      image: "/assets/un.png",
      category: "Education",
      founder: "Gaurav Munjal, Roman Saini, and Hemesh Singh",
      founded: "2015",
      headquarter: "Gurugram, Haryana",
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
      id: 20,
      name: "Meesho",
      image: "/assets/meesho.png",
      category: "E-commerce",
      founder: "Vidit Aatrey and Sanjeev Barnwal",
      founded: "2015",
      headquarter: "Gurugram, Haryana",
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
      id: 21,
      name: "Groww",
      image: "/assets/groww.png",
      category: "Finance",
      founder: "Lalit Keswani, Harsh Jain, and Ishan Bansal",
      founded: "2016",
      headquarter: "Bengaluru, Karnataka",
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
      id: 23,
      name: "PolicyBazaar",
      image:
        "/assets/policy.jpg",
      category: "Insurance",
      founder: "Ashish Gupta",
      founded: "2008",
      headquarter: "Gurugram, Haryana",
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
      id: 25,
      name: "Ola",
      image:
        "/assets/ola.jpeg",
      category: "Transportation",
      founder: "Bhavish Aggarwal and Ankit Bhati",
      founded: "2010",
      headquarter: "Bengaluru, Karnataka",
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
      id: 30,
      name: "Paytm",
      image:"/assets/paytm.jpg",
      category: "Fintech",
      founder: "Vijay Shekhar Sharma",
      founded: "2000",
      headquarter: "Noida, Uttar Pradesh",
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
      id: 41,
      name: "Cure.fit",
      image:
        "/assets/curefit.png",
      category: "Healthcare",
      founder: "Mukesh Bansal and Ankit Nagori",
      founded: "2016",
      headquarter: "Gurugram, Haryana",
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
      id: 44,
      name: "Livspace",
      image:"/assets/livspace.jpg",
      category: "Interior design",
      founder: "Ankiti Bose and Ramakant Sharma",
      founded: "2015",
      headquarter: "Bengaluru, Karnataka",
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
      id: 45,
      name: "ElasticRun",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/ElasticRun_logo.svg/1200px-ElasticRun_logo.svg.png",
      category: "E-commerce",
      founder: "Amit Agarwal and Saurabh Nigam",
      founded: "2016",
      headquarter: "Gurugram, Haryana",
      website: "https://www.elasticrun.com/",
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
      id: 47,
      name: "Zetwerk",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Zetwerk_logo.svg/1200px-Zetwerk_logo.svg.png",
      category: "Manufacturing",
      founder: "Srinath Ramasubramanian and Amrit Acharya",
      founded: "2018",
      headquarter: "Bengaluru, Karnataka",
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
      id: 49,
      name: "Pine Labs",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Pine_Labs_logo.svg/1200px-Pine_Labs_logo.svg.png",
      category: "Payments",
      founder: "Harshvardhan Lunia and Rajul Garg",
      founded: "2011",
      headquarter: "Gurugram, Haryana",
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
      id: 55,
      name: "UpGrad",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/UpGrad_logo.svg/1200px-UpGrad_logo.svg.png",
      category: "Education",
      founder: "Naresh Gupta and Mayank Kumar",
      founded: "2015",
      headquarter: "Gurugram, Haryana",
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
      id: 57,
      name: "Zee5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Zee5_logo.svg/1200px-Zee5_logo.svg.png",
      category: "OTT",
      founder: "Subhash Chandra",
      founded: "2008",
      headquarter: "Mumbai, Maharashtra",
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
      id: 69,
      name: "Digit Insurance",
      image: "https://digitinsurance.com/assets/img/digit_logo.svg",
      category: "Insurance",
      founder: "Kamesh Goyal and Alok Bansal",
      founded: "2017",
      headquarter: "Bengaluru, Karnataka",
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
      "id": 68,
      "name": "InsuranceDekho",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/PolicyBazaar_logo.svg/1200px-PolicyBazaar_logo.svg.png",
      "category": "Insurance",
      "founder": "Amit Jain and Yashish Dahiya",
      "founded": "2008",
      "headquarter": "Mumbai, Maharashtra",
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
      "id": 70,
      "name": "Turtlemint",
      "image": "https://turtlemint.com/assets/img/turtlemint_logo.svg",
      "category": "Insurance",
      "founder": "Amit Sharma and Prashant Fuloria",
      "founded": "2015",
      "headquarter": "Bengaluru, Karnataka",
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
      "id": 73,
      "name": "Acko",
      "image": "https://acko.com/assets/img/acko_logo-430x270.png",
      "category": "Insurance",
      "founder": "Rohan Agarwal and Varun Dua",
      "founded": "2016",
      "headquarter": "Gurugram, Haryana",
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
      "id": 72,
      "name": "Coverfox",
      "image": "https://coverfox.com/static/img/logo@2x.png",
      "category": "Insurance",
      "founder": "Vishal Shah and Aditya Gupta",
      "founded": "2012",
      "headquarter": "Bengaluru, Karnataka",
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
      "id": 71,
      "name": "BimaPeDi",
      "image": "https://www.bimapedi.com/static/img/logo_black.svg",
      "category": "Insurance",
      "founder": "Aditya Sharma and Siddharth Sethi",
      "founded": "2015",
      "headquarter": "Gurugram, Haryana",
      "website": "https://www.bimapedi.com/",
      "description": "A health insurance startup that offers a range of health insurance products, including individual, family, and group health plans. BimaPeDi also offers a unique telemedicine service that allows users to connect with doctors online.",
      "total_funding": "USD 50 million",
      "investors": ["Sequoia Capital", "Accel Partners", "Tiger Global Management"],
      "team_size": 1000,
      "achievements": "Received the 2020 Forbes India 30 Under 30 Award",
      "market_presence": "India",
      "revenue_model": "Subscription fees",
      "user_base": "Over 3 million users",
      "awards": ["Best Health Insurance Startup of the Year 2020"]
    },
    {
      "id": 79,
      "name": "Delhivery",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Delhivery_logo.svg/1200px-Delhivery_logo.svg.png",
      "category": "Logistics",
      "founder": "Sahil Barua",
      "founded": "2011",
      "headquarter": "Gurugram, Haryana",
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
      "id": 81,
      "name": "Jio",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Jio_logo.svg/1200px-Jio_logo.svg.png",
      "category": "Telecom",
      "founder": "Mukesh Ambani",
      "founded": "2016",
      "headquarter": "Mumbai, Maharashtra",
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


  for(let i=0; i<=startupData.length-1; i++){
        // console.log(startupData[i].investors)
  }
  const obj={}
  for(let i=0; i<=startupData.length-1; i++){
          let el = startupData[i].founded;
          // console.log(el)
           if(obj[el] == undefined){
            obj[el]=1
           }else[
            obj[el]++
           ]
  }

  let array=[]
for(let key in obj){
     array.push(obj[key])
}
 
  

const ctx = document.getElementById('foundedByYearChart').getContext("2d");

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [2000,2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
      datasets: [{
        label: 'Number of companies founded in particular Year',
        data: array,
        borderWidth: 1
      }]
    },
    options: {
                scales: {
                y: {
                beginAtZero: true
                }
            },
            responsive:false
    
}
  });






  



  const ct =document.getElementById("numberOfinvestors").getContext("2d");

      new Chart(ct,{
        type:"pie",
        data: {
          labels: ["Tiger Global Management", "Accel", "Insight Partners", "D1 Capital Partners", "SoftBank Vision Fund", "IndiaQuotient", "unitus ventures", "omidyar network india", "Lightspeed Venture Partners", "Goldman Sachs", "Ant Financial", "Warburg Pincus", "Sequoia Capital", "Temasek Holdings", "ADIA", "DST Global"],
          datasets: [{
            label: 'Investor Invested in companies',
            data: [29, 6, 7, 1, 14, 1, 1, 1,  5, 1, 2, 1, 18, 1,  1, 3],
            borderWidth: 1
          }],
          options: {
            scales: {
            y: {
            beginAtZero: true
            }
        },
        responsive:false

}
        },

      })

 const locationChart = document.getElementById("locationChart").getContext("2d");
 new Chart(locationChart,{
  type:"line",
  data: {
    labels: ["Haryana", "Karnatka", "Uttar Pradesh" ],
    datasets: [{
      label: 'Location',
      data: [18, 13, 1],
      borderWidth: 1
    }],
    options: {
      scales: {
      y: {
      beginAtZero: true
      }
  },
  responsive:false

}
  },

})


const marketChart = document.getElementById("marketChart").getContext("2d");
 new Chart(marketChart,{
  type:"doughnut",
  data: {
    labels: ["India", "Global" ],
    datasets: [{
      label: 'Market',
      data: [18, 13,],
      borderWidth: 1
    }],
    options: {
      scales: {
      y: {
      beginAtZero: true
      }
  },
  responsive:false

}
  },

})


  let cg={}
for(let i=0; i<=startupData.length-1; i++){
        let el = startupData[i].category;
          if(cg[el]==undefined){
             cg[el]=1;
          }else{
             cg[el]++;
          }
     
}
// console.log(cg);
let categoryLabel=[];
let categoryData = [];

for(let key in cg){
  categoryLabel.push(key);
  categoryData.push(cg[key]);
    
}
// console.log(categoryLabel)
// console.log(categoryData)

const categoryChart = document.getElementById("categoryChart").getContext("2d");
 new Chart(categoryChart,{
  type:"bar",
  data: {
    labels: categoryLabel,
    datasets: [{
      label: 'Category',
      data: categoryData,
      borderWidth: 1
    }],
    options: {
      scales: {
      y: {
      beginAtZero: true
      }
  },
  responsive:false

}
  },

})



//   * Total number of companies


let tc = document.querySelector("#TotalCompanies");
       tc.textContent=`Companies ${startupData.length}`


// * Totla number of investors

let ti = document.querySelector("#TotalInvestors");
   ti.textContent=`Investors 16`;

let tinvest = document.querySelector("#TotalInvestment");

   tinvest.textContent = `Investment 150 billion Dollar`


   // * Total emplyeement
   
   let employment = 0;
    for(let i=0; i<=startupData.length-1; i++){
         employment+=startupData[i].team_size
    }

let emp = document.querySelector("#TotalEmployement");
    emp.textContent = `Empoyement ${employment}`   




    const companyDashboard = document.querySelector(".company-dashboard")
    companyDashboard.addEventListener("click",()=>{
          
            window.location.reload()
            
    })



    const totalCompanies = document.querySelector(".total-companies");

     totalCompanies.addEventListener("click",()=>{
            
      console.log("totalcompanies")
                number_of_investors.style.display = "none";
                market_chart.style.display = "none"
                location_chart.style.display ="none"
                category_chart.style.display = "none"
                founded_by_year.style.display ="block"
                 
                chartheading1.style.display="black"
                chartheading2.style.display="none"
                chartheading3.style.display="none"
                chartheading4.style.display="none"
                chartheading5.style.display="none"

     })

     const investors = document.querySelector(".investors");

     investors.addEventListener("click",()=>{
      console.log("investore")
      founded_by_year.style.display = 'none'
      market_chart.style.display = "none"
      location_chart.style.display ="none"
      category_chart.style.display = "none"
      number_of_investors.style.display = "block";
                chartheading1.style.display="none"
                chartheading2.style.display="block"
                chartheading3.style.display="none"
                chartheading4.style.display="none"
                chartheading5.style.display="none"
     })

     const loc = document.querySelector(".companies-location");

     loc.addEventListener("click",()=>{
      console.log("location")
      founded_by_year.style.display = 'none'
      number_of_investors.style.display = "none";
      market_chart.style.display = "none"
      category_chart.style.display = "none"
      location_chart.style.display = 'block';
                chartheading1.style.display="none"
                chartheading2.style.display="none"
                chartheading3.style.display="block"
                chartheading4.style.display="none"
                chartheading5.style.display="none"
     })

     const mc = document.querySelector(".markets-cover");

     mc.addEventListener("click",()=>{
      console.log("markeit")
      founded_by_year.style.display = 'none'
      number_of_investors.style.display = "none";
      location_chart.style.display ="none"
      category_chart.style.display = "none"
      market_chart.style.display="block";
                chartheading1.style.display="none"
                chartheading2.style.display="none"
                chartheading3.style.display="none"
                chartheading4.style.display="block"
                chartheading5.style.display="none"
     })

     const cat = document.querySelector(".categories");

     cat.addEventListener("click",()=>{
      console.log("category")
      founded_by_year.style.display = 'none'
      number_of_investors.style.display = "none";
      market_chart.style.display = "none"
      location_chart.style.display ="none"
      category_chart.style.display = "block";
      chartheading1.style.display="none"
                chartheading2.style.display="none"
                chartheading3.style.display="none"
                chartheading4.style.display="none"
                chartheading5.style.display="block"
     })