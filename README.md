# Login & Register API using Node.js and MySQL

A simple and clean implementation of user authentication (Register & Login) using **Node.js**, **Express**, and **MySQL**.  
This project demonstrates the core fundamentals of building API-based authentication for modern applications.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/login-and-register-API-with-Node-js-and-mysql.git
cd login-and-register-API-with-Node-js-and-mysql

### 2️⃣ Install Dependencies
npm install

🗄️ Database Setup
```js
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

```


