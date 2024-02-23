
# blog-clean-architecture Full Stack Vite - React - Node 

## How to Run 🚀

This project requires Node.js v20 and Docker installed on your system, along with a PostgreSQL database for data storage. Follow the steps below to configure and run the project correctly.

Prerequisites

- Node.js version 20
- Docker
- A PostgreSQL instance (optional, if you prefer not to use Docker)

### Step 1: Installing Dependencies

First, ensure you are in the project's api folder. Install the necessary dependencies by running:

```bash
$ npm install
```

### Step 2: Database Setup

To use the database, launch the Docker container with the PostgreSQL configuration:

```bash
$ docker-compose up -d
```

### Step 3: Environment Variables Setup

Copy the .env.example file to .env and update the environment variables according to your local setup. An example configuration could be

```bash
DATABASE_URL="postgresql://postgres:123456@localhost:5432/blog?schema=public"
PORT=3000
POSTGRES_USER=postgres
POSTGRES_DB=blog
POSTGRES_PORT=5432
POSTGRES_PASSWORD=123456
JWT_SEED=SEED
NODE_ENV=development
WEB_URL=http://localhost:3001/api

```

### Step 4: Prisma Setup for Migrations

Perform the necessary migrations to prepare your database:

##### Generate Prisma Migrations:

This command prepares your database for the project by creating necessary tables and structures.

```bash
npx prisma migrate dev
```

##### Generate Prisma Client:

Then, generate the required Prisma types for working with TypeScript:

```bash
npx prisma generate
```

### Step 5: Initial Database Seeding

Populate the database with test data by executing:

```bash
npm run seed
```

This step facilitates initial evaluation and project development.

### Step 7: Start the Project

Start the development server:

```bash
npm run dev
```

### Step 7: Install Dependencies

Navigate to the web folder of your project and install the necessary dependencies by executing the following command:

```bash
npm install
```

Please note the correction from "intsall" to "install" to ensure the command is accurate.

### Step 9: Environment Configuration

Configure the environment variables as specified in the .env.example file. For example:

```bash
VITE_API_URL=http://localhost:3000/api/v1
```

Copy this configuration into a new file named .env within the same directory.

### Step 10: Run the Project

Once the dependencies are installed and the environment variables are configured, you can start the project by running:

```bash
npm run dev
```

This command will initiate the front-end server, making your web application accessible for development and testing purposes.

## Project Overview 📘

In the development of this full-stack blog project, I have focused on forging a clean and sustainable architecture that encompasses both the front-end and back-end, utilizing cutting-edge technologies and top-tier programming practices. This blog stands out for its user login functionality, implemented through JWT (JSON Web Tokens) authentication, ensuring a secure and efficient mechanism for handling sessions and authorizations. It is built with Vite, React, and TypeScript on the front-end, and Node.js along with TypeScript on the back-end, ensuring a cohesive and efficient ecosystem.

My approach has been firmly centered on the SOLID principles, ensuring that the code is modular, scalable, and easy to maintain. This commitment to code quality and structure allows the project to be versatile and adaptable, suitable for a wide range of software applications, from simple scripts to complex front-end and back-end developments. The key elements of the architecture that I have meticulously implemented for this full-stack blog are:

### Backend

#### Domain-Driven Design (DDD)

I've based the backend architecture on DDD, allowing me to structure the system in a way that accurately reflects the complexities and boundaries of the business domain, facilitating the scalability and adaptability of the system.

#### Model-View-Controller (MVC)

I've adopted the MVC pattern in the presentation layer to separate the business logic from the user interface, improving code organization and supporting the separation of responsibilities.

#### Result Pattern

I've used this pattern to standardize the HTTP responses from the server, ensuring consistency and predictability in the communication interfaces.

#### Adapter Pattern

I've applied this pattern to all integrations with external dependencies, allowing me to abstract away from concrete implementations. Combined with DDD, this facilitates the substitution or modification of libraries and external services without significantly impacting the codebase.

#### Decorators

I've implemented decorators for elegant error handling and method binding, adding additional behaviors to classes and methods in a declarative manner.

#### Use Cases

I've centralized the business logic into use cases, allowing me to clearly define the system's operations and simplify its maintenance.

#### Data Transfer Objects (DTOs)

I've defined DTOs to map and validate incoming data, ensuring that only valid and relevant data is processed.

#### Entities

I've introduced an abstraction layer between the database and the backend to minimize the impact of database schema changes on the system, promoting code stability and flexibility.

#### Mappers

I normalize the data between the database and the backend to facilitate consistent and coherent data transformation and integration.

#### Repositories

This abstraction layer provides me with the flexibility to easily switch database technologies, supporting agile technological evolution.

#### Dependency Injection

To avoid hidden couplings and enhance the system's modularity, I've implemented dependency injection, which improves the testability of the code.

### Frontend

#### Domain-Driven Design (DDD)

The foundation of the application's architecture is rooted in DDD, enabling a system structure that mirrors the complexities and confines of the business domain with fidelity. This approach significantly enhances system scalability and adaptability.

#### Atomic Design

In developing React components, I've embraced the atomic design methodology, facilitating a cohesive and reusable user interface development that enriches both the developer and user experience.

#### Redux Pattern

Redux has been integrated for comprehensive state management, simplifying application state manipulation and bolstering data flow predictability and maintainability.

#### Redux + LocalStorage

A hybrid solution combining Redux with LocalStorage has been implemented to optimize user experience and ensure application functionality offline. This strategy allows for the rehydration of slice states, ensuring a smooth and efficient user interaction.

#### Adapter Pattern

This pattern has been applied across all integrations with external dependencies, allowing for the abstraction from specific implementations. Coupled with DDD, it aids in the seamless substitution or modification of libraries and external services with minimal impact on the base code.

#### Use Cases

Business logic has been centralized within specific use cases, facilitating the clear definition of system operations and simplifying both maintenance and scalability.

#### Data Transfer Objects (DTOs)

DTOs have been crafted to map and validate incoming data, ensuring the processing of only valid and relevant data, thereby enhancing application integrity and security.

#### Entities

I've introduced an abstraction layer between the database and the backend to minimize the impact of database schema changes on the system, promoting code stability and flexibility.

#### Entities and Mappers

An abstraction layer between the database and the backend, along with data mappers, has been introduced. This minimizes the impact of database schema changes, promoting greater code stability and flexibility.

#### Repositories

This abstraction layer provides me with the flexibility to easily switch database technologies, supporting agile technological evolution.

#### Dependency Injection

To avoid hidden couplings and enhance the system's modularity, I've implemented dependency injection, which improves the testability of the code.

- Author - [Sergio Dario Moreno](https://github.com/RunyShark)
