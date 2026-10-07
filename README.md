# 👕 FashionHub - AWS Multi-AZ 3-Tier Web Application

A dynamic e-commerce inventory web application deployed on Amazon Web Services (AWS) featuring a Node.js/Express backend, Amazon RDS MySQL persistence, and Application Load Balancer integration.

---

## 🏗️ Architecture Overview

The application follows AWS Best Practices for 3-Tier Cloud Architecture:
1. **Presentation Tier**: AWS Application Load Balancer (ALB) handling incoming internet traffic on Port 80.
2. **Application Tier**: EC2 instances (Amazon Linux 2023) running Node.js, Express, and PM2 process management inside a custom VPC.
3. **Database Tier**: Multi-AZ Amazon RDS (MySQL Database Engine) storing product inventory securely.

---

## 🛠️ Tech Stack & Services Used

* **Cloud Infrastructure**: AWS VPC, EC2, Application Load Balancer (ALB), Amazon RDS MySQL, Security Groups
* **Backend**: Node.js, Express.js, MySQL2 Driver
* **Frontend**: HTML5, Bootstrap 5, JavaScript (Fetch API)
* **DevOps & Operations**: User Data Automation Scripts, PM2, Git

---

## ✨ Features

* **Real-time CRUD Operations**: Add, list, search, and delete clothing & footwear items dynamically.
* **Auto DB Initialization**: Automatic schema creation and connection pooling with RDS.
* **Responsive Inventory Dashboard**: Dynamic calculation of total items and inventory valuation.



