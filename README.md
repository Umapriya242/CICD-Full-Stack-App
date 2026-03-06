# 🚀 Full Stack CI/CD Docker Application

This project demonstrates a **Full Stack Application deployed using Docker, Nginx, MongoDB and CI/CD pipeline with GitHub Actions on AWS EC2**.

The application allows users to **add and view usernames stored in MongoDB** through a simple web interface.

---

# 🧱 Architecture

User Browser  
⬇  
Nginx (Port 80)  
⬇  
Node.js Backend API  
⬇  
MongoDB Database  

---

# ⚙️ Tech Stack

### Frontend
- HTML
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### DevOps Tools
- Docker
- Docker Compose
- Nginx
- GitHub Actions (CI/CD)
- AWS EC2

---

# 📁 Project Structure

```
CICD-Full-Stack-App
│
├── frontend
│   └── index.html
│
├── backend
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
│
├── nginx
│   └── default.conf
│
├── docker-compose.yml
│
└── .github
    └── workflows
        └── cicd.yml
```

---

# 🌐 Application Features

- Add users
- Fetch all users
- Store data in MongoDB
- Reverse proxy using Nginx
- Containerized using Docker
- Automated deployment using GitHub Actions

---

# 🐳 Docker Services

The application runs using **three containers**:

| Service | Description |
|------|------|
| nginx | Serves frontend and proxies API |
| backend | Node.js API |
| mongo | MongoDB database |

---

# 🔄 CI/CD Pipeline

The CI/CD pipeline is implemented using **GitHub Actions**.

### Pipeline Flow

1. Developer pushes code to GitHub  
2. GitHub Actions builds Docker images  
3. Images pushed to DockerHub  
4. GitHub Actions connects to EC2 using SSH  
5. Pulls latest images  
6. Restarts containers using Docker Compose  

---

# 🔐 GitHub Secrets Required

Add the following secrets in **GitHub → Settings → Secrets**

```
DOCKER_USERNAME
DOCKER_PASSWORD
EC2_HOST
EC2_USER
EC2_SSH_KEY
```

---

# ☁️ AWS EC2 Setup

Launch an EC2 instance and allow the following **Security Group ports**:

| Port | Purpose |
|----|----|
| 22 | SSH |
| 80 | Web Application |

MongoDB and backend remain inside the Docker network.

---

# ▶️ Run Locally

Clone the repository

```
git clone https://github.com/your-username/CICD-Full-Stack-App.git
```

Move into project folder

```
cd CICD-Full-Stack-App
```

Start containers

```
docker-compose up -d
```

Open in browser

```
http://localhost
```

---

# 📡 API Endpoints

### Get Users

```
GET /api/users
```

### Add User

```
POST /api/users
```

Example request body

```
{
  "name": "John"
}
```

---

# 🎯 Learning Outcomes

This project demonstrates:

- Docker containerization
- Reverse proxy using Nginx
- Backend API development
- MongoDB integration
- CI/CD automation
- AWS EC2 deployment

---

# 👩‍💻 Author

**Umapriya**

Aspiring Cloud / DevOps Engineer
