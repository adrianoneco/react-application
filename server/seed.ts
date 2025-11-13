import { db } from "./db";
import { categories } from "@shared/schema";
import { sql } from "drizzle-orm";

async function seed() {
  console.log("Seeding database...");

  const existingCategories = await db.select().from(categories);
  
  if (existingCategories.length === 0) {
    await db.insert(categories).values([
      { name: "Work", color: "#3B82F6" },
      { name: "Personal", color: "#10B981" },
      { name: "Shopping", color: "#F59E0B" },
      { name: "Health", color: "#EF4444" },
      { name: "Learning", color: "#8B5CF6" },
    ]);
    console.log("✓ Categories seeded");
  } else {
    console.log("✓ Categories already exist, skipping seed");
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
