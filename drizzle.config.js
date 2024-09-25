/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql:AI-CONTENT%20GENERATOR_owner:9vKsjR7epkNn@ep-cold-breeze-a5ifb185.us-east-2.aws.neon.tech/AI-CONTENT%20GENERATOR?sslmode=require'
    }
  };