import { db } from "../../utli/db";
import { RowDataPacket } from "mysql2"
import { NextApiRequest,NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  db.getConnection((err, conn) => {
    if(err) {
      res.status(500).json({message: err.message});
    } else {
    conn.query<RowDataPacket[]>("SELECT * FROM items", (err, result) => {
      if (!result) {
        res.status(500).json({
          status: "error",
        });
      } else {
        res.status(200).json(result);
      }
    });
    console.log('Hello')
  }
  });
  // res.status(200).json({name: "Aung Lar"})
}
