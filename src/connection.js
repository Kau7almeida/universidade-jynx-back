import { neon } from "@neondatabase/serverless";

const db = neon('postgresql://neondb_owner:npg_29RqoGEAzarg@ep-round-brook-acb49m91-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

export default db