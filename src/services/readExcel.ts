import { createReadStream } from "fs";
import path from "path";

// eslint-disable-next-line import/no-named-as-default
import readXlsxFile from "read-excel-file/node";

interface IRows {
  [key: string]: string | number;
}

const excelPath = path.join(__dirname, "..", "..", "assets", "excel.xlsx");
const excelReadStream = createReadStream(excelPath);

const schema = {
  WO: {
    prop: "wo",
    type: String,
  },
  District: {
    prop: "district",
    type: String,
  },
  LeadTech: {
    prop: "leadTech",
    type: String,
  },
  Service: {
    prop: "service",
    type: String,
  },
  Techs: {
    prop: "techs",
    type: String,
  },
  LbrHrs: {
    prop: "lbrHrs",
    type: Number,
  },
  PartsCost: {
    prop: "partsCosts",
    type: Number,
  },
  Payment: {
    prop: "payment",
    type: String,
  },
};

export default async function (): Promise<IRows> {
  return (await readXlsxFile(excelReadStream, { schema }))
    .rows as unknown as IRows;
}
