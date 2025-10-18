# CRM (Customer Relation Mamagement) Platform

[![Go Report Card](https://goreportcard.com/badge/github.com/jaykape/crm/backend)](https://goreportcard.com/report/github.com/jaykape/crm/backend)

This is my project for fullstack CRM application that helps buisiness work with leads.

You can check the live demo here:  [crm.kape.live](https://crm.kape.live)

---

### Architecture

![](/images/diagram.jpeg)


---

### Table of Contents

1. [Why this project exists.](#1-why-this-project-exists)

2. [Data Modeling](#2-data-modeling)

3. [Designing and Deploying Infrastructure](#)


---

### 1. Why this project exists.

At my previous company, we couldn’t find a CRM platform in the market that was highly customizable. While existing CRMs allow adding custom properties to leads or contacts, they lack timestamp tracking for changes.

Tracking property changes over time is critical for data analysis. My team needed to understand the lifecycle stages of each lead—when a lead entered and exited each stage.

This project addresses that gap by providing:

Automatic timestamp tracking for all custom properties.

Full visibility into the lifecycle of leads.

Easy-to-use, fully customizable CRM workflows.

---

### 2. Data Modeling

![](/images/er.jpeg)

#### 2.1. Defining the Domain Model

Lead: Core entity representing potential customers.

Contact: Individuals associated with leads or accounts.

Property: Customizable fields assigned to leads/contacts, with automatic timestamp tracking.

Lifecycle Stage: Represents the stage of the lead (e.g., New → Contacted → Qualified → Converted).

Activity/Note: Logs all interactions or updates for auditability and historical analysis.


#### 2.2. Desiging Data Schemas

Each entity has a unique identifier (UUID).

Relationships:

Lead → Contact (1:N)

Lead → Property (1:N)

Lead → Lifecycle Stage (1:N with timestamp tracking)

Use foreign keys and indexing for optimized queries.

All timestamps are automatically recorded (created_at, updated_at).

Below is the ER diagram.

---

### 3. Designing and Deploying Infrastructure

Frontend: Vercel hosting, serverless functions for minimal latency, automatic HTTPS, CDN for fast delivery.

Backend: AWS EC2 instances with:

Auto Scaling Groups (ASG) for scalability and elasticity.

Load balancer for high availability.

Multi-AZ deployment for fault tolerance.

Database: AWS RDS with multi-AZ, encrypted at rest, and automated backups.

Observability: CloudWatch metrics/logs, distributed tracing for API calls.

CI/CD Pipeline: Automated deployments using GitHub Actions → Vercel / AWS.

---

### 4. Designing Front End Pages

Dashboard: Visual overview of leads, stages, and performance metrics.

Lead Management: Create, edit, and delete leads with real-time timestamp tracking of property changes.

Custom Properties: Add fields dynamically, view historical changes.

Workflow Pages: Define and manage lead lifecycle stages.

Responsive Design: Works on desktop, tablet, and mobile.

Security: Input validation, secure environment variables, Content Security Policy headers.

---

### 5. Desiging Backend REST API

Architecture Pattern: Handler–Services–Database (HSD)

Handler Layer:

Handles HTTP requests and responses.

Responsible for input validation, authentication checks, and request parsing.

Each endpoint corresponds to a handler file or module.

Services Layer:

Contains business logic.

Decouples the core logic from HTTP transport, making it easier to test and reuse.

Examples: Lead lifecycle transitions, property timestamp updates, workflow rules.

Database Layer:

Responsible for data persistence and retrieval.

Uses an ORM (e.g., Prisma, Sequelize) or query builder.

Handles CRUD operations, relationships, and database transactions.

Benefits of HSD Architecture:

Clear separation of concerns → easier to maintain and scale.

Testable layers → services can be tested independently of HTTP requests or database.

Scalable structure → new endpoints or features can be added without modifying existing code heavily.

Aligns with CIS Control 16 (Account Monitoring & Control) and OWASP Top Ten by keeping sensitive logic separate and auditable.

---

### 6. Security Frameworks

Application-Level Security: Aligned with OWASP Top Ten:

Input validation, XSS/CSRF prevention, secure session handling, dependency scanning.

Infrastructure-Level Security: Aligned with CIS Controls:

Security groups restricting inbound traffic to API ports.

SSH key-based access, no root login.

Secrets stored in AWS Secrets Manager or Vercel environment variables.

CloudWatch monitoring for anomaly detection.

---

### 7. Developing Workflow

1. Version Control

Code is hosted on GitHub.

Each feature or bugfix is developed in a separate branch following GitFlow conventions:

main branch: Production-ready code

develop branch: Staging / integration

feature/* branches: Individual features or improvements

2. Code Quality & Testing

Linting: ESLint / Prettier to enforce code style.

Unit & Integration Testing:

Backend: Jest / Mocha for REST API testing

Frontend: React Testing Library for components

Dependency Scanning: GitHub Dependabot or npm audit to detect vulnerabilities

3. Continuous Integration

GitHub Actions automatically run on every pull request:

Linting, tests, and dependency checks executed.

Failures prevent merging to main or develop.

4. Continuous Deployment

Frontend (Vercel):

Automatic deployment triggered on merge to main.

Vercel handles serverless function deployment, static asset CDN, and HTTPS.

Backend (AWS EC2):

GitHub Actions pipeline deploys the latest build via SSH/CI scripts.

Includes database migrations if needed.

Health checks performed post-deployment to verify successful rollout.

5. Environment Management

Secrets: Stored securely in environment variables:

Vercel Environment Variables for frontend

AWS Secrets Manager for backend

Configuration: Separate staging and production environments to isolate testing and live systems.

6. Monitoring & Rollback

Post-deployment monitoring: CloudWatch logs, metrics, and Vercel dashboard.

Rollback strategy: If errors are detected in production, previous stable build is redeployed automatically.
