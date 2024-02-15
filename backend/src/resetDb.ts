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

async function main(){
  await db.initialize();
  await clearDB();

  const socks = await Product.create({
    name : 'chaussettes',
  }).save();

  const shoes = await Product.create({
    name : 'chaussures',
  }).save();

  console.log('done');
}

main();