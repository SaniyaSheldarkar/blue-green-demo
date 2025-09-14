
# 🔵🟢 Blue-Green Deployment Demo (Docker + Nginx)

This repository demonstrates **Blue-Green Deployment** using **Docker, Nginx, and Node.js (Express)**.  
It shows how two identical environments (Blue & Green) run in parallel and how traffic can be switched instantly with **zero downtime**.

---

## 🚀 Why Blue-Green Deployment?
For global platforms (Amazon, Netflix, etc.), even **1 minute of downtime** can mean:
- Lost revenue 💰
- Abandoned carts 🛒
- Damaged customer trust 📉

Blue-Green Deployment ensures:
- **Seamless transitions** between versions  
- **Instant rollback** if something breaks  
- **Zero downtime releases**  

---

## 📂 Project Structure
```

blue-green-demo/
├─ app/
│  ├─ server.js        # Simple Express server
│  ├─ package.json
│  └─ Dockerfile
├─ nginx/
│  └─ nginx.conf       # Nginx reverse proxy config
└─ docker-compose.yml  # Runs Blue, Green, and Nginx

````

---

## 🛠️ Tech Stack
- **Node.js (Express)** → Demo web app
- **Docker & Docker Compose** → Containerization
- **Nginx** → Acts as load balancer / traffic switcher

---

## ▶️ Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/blue-green-demo.git
cd blue-green-demo
````

### 2. Build & start containers

```bash
docker-compose up --build -d
```

### 3. Verify running containers

```bash
docker ps
```

You should see `app_blue`, `app_green`, and `nginx_proxy`.

---

## 🌐 Test

Visit 👉 [http://localhost:8080](http://localhost:8080)

* Default: You’ll see **Hello from Blue!**
* Or test with:

  ```bash
  curl http://localhost:8080
  ```

---

## 🔄 Switching Blue → Green

1. Open **`nginx/nginx.conf`**
2. Comment out Blue and enable Green:

   ```nginx
   upstream app {
       # server app_blue:5000;
       server app_green:5000;
   }
   ```
3. Reload Nginx inside the container:

   ```bash
   docker-compose exec nginx nginx -s reload
   ```

👉 Refresh the browser → Now shows **Hello from Green!**

---

## ⏪ Rollback (Green → Blue)

1. Edit `nginx/nginx.conf` back to Blue:

   ```nginx
   upstream app {
       server app_blue:5000;
       # server app_green:5000;
   }
   ```
2. Reload:

   ```bash
   docker-compose exec nginx nginx -s reload
   ```

👉 Traffic instantly switches back to Blue.

---

## 🛠️ Troubleshooting

* **Reload fails?** → Check logs:

  ```bash
  docker-compose logs nginx
  ```
* **Exec error?** → Use container name:

  ```bash
  docker exec -it nginx_proxy nginx -s reload
  ```
* **Port in use?** → Change `8080:80` in `docker-compose.yml` to another port (e.g. `8085:80`).

---


## 🙌 Author

Made with 💡 by **Saniya Sheldarkar**
Connect with me on [LinkedIn](https://www.linkedin.com/)

---

### 🔗 Resources

* [Martin Fowler: Blue-Green Deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html)
* [Docker Docs](https://docs.docker.com/)
* [Nginx Docs](https://nginx.org/en/docs/)


