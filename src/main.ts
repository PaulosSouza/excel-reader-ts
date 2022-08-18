import { performance } from "perf_hooks";
import { PrismaClient, type Fields } from "@prisma/client";
import readExcel from "./services/readExcel";

const prisma = new PrismaClient();

async function main() {
  const startMeasurePerformance = performance.now();

  await prisma.$connect();
  const rows = await readExcel();

  await prisma.fields.createMany({
    data: rows as unknown as Fields,
  });

  const endMeasurePerformance = performance.now();

  console.log(
    `It was executed in ${(
      (endMeasurePerformance - startMeasurePerformance) /
      1000
    ).toFixed(4)} seconds`
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
