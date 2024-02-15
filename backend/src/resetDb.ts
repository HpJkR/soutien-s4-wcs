import db from "./db";
import Product from "./entities/Product";

export async function clearDB() {
  const runner = db.createQueryRunner();
  await runner.query("SET session_replication_role = 'replica'");
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`ALTER TABLE "${entity.tableName}" DISABLE TRIGGER ALL`)
    )
  );
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
    )
  );
  await runner.query("SET session_replication_role = 'origin'");
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await clearDB();

  const socks = Product.create({
    name: "chaussettes",
    description: "description chaussettes",
    picture:
      "https://www.achile.com/5699-large_default/chaussettes-homme-fantaisies-victoire-en-coton.jpg",
    price: 5,
  });

  const shoes = Product.create({
    name: "chaussures",
    description: "description chaussures",
    picture:
      "https://www.commeuncamion.com/content/uploads/2014/02/chaussures-classe-brogues-septieme-largeur.jpg",
    price: 120,
  });

  await socks.save();
  await shoes.save();

  console.log("done");
}

main();
