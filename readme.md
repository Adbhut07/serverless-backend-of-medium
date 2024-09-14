
# Serverless Backend for Medium

This repository contains the serverless backend for a Medium-like application, built using **Cloudflare Workers**. The backend architecture uses **Prisma** with connection pooling to manage the database interactions effectively. Additionally, a reusable **npm package for Zod validation** has been created, allowing validation logic to be shared between the backend and frontend.

## Features

- **Serverless Architecture**: Built on **Cloudflare Workers**, offering scalability, low-latency, and ease of deployment.
- **Database Connection Pooling**: Utilizes **Prisma** for seamless and optimized database interactions with connection pooling.
- **Zod Validation Package**: A common **npm package** for Zod-based validation, which is reusable across both frontend and backend to ensure consistent validation logic.

## Tech Stack

- **Cloudflare Workers**: Serverless platform to run lightweight, scalable backend functions.
- **Prisma**: An ORM for type-safe database management with connection pooling.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Common Zod Validation Package**: An npm package used in both backend and frontend to handle consistent data validation.

## Installation and Setup

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/Adbhut07/serverless-backend-of-medium.git
   \`\`\`

2. **Install Dependencies**:
   \`\`\`bash
   cd serverless-backend-of-medium
   npm install
   \`\`\`

3. **Configure Prisma**:
   Make sure to set up your **Prisma** database configuration and run:
   \`\`\`bash
   npx prisma generate
   \`\`\`

4. **Deploy to Cloudflare Workers**:
   Follow [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/) to deploy your backend.

5. **Zod Validation Package**:
   You can install the **npm package** for Zod validation using:
   \`\`\`bash
   npm install your-validation-package
   \`\`\`

## Usage

- **Backend**: The backend handles CRUD operations, authentication, and other API requests, leveraging Prisma for database management and connection pooling for optimized performance.
  
- **Frontend**: For the frontend, import the shared **Zod validation** logic from the common npm package to ensure consistent validation with the backend.

## Contributing

Feel free to open issues or submit pull requests if you want to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

