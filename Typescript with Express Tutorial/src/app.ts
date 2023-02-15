import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());
app.use(express.raw());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ msg: "Hello Express with Typescript." });
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log("This tutorial sucks lmao");
  return res.status(200).json({ msg: "This tutorial is for scrubs." });
});

app.all("/api/all", (req: Request, res: Response) => {
  return res.status(200).json({ msg: "Route for all." });
});

function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
  console.log(req.params);
  next();
}

function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
  console.log("second handler");
  return res.send(req.params);
}

// app
//   .route("/")
//   .get((req: Request, res: Response) => {
//     return res
//       .status(200)
//       .json({ msg: "app.route() sucks,use express router instead" });
//   })
//   .post((req: Request, res: Response) => {
//     return res
//       .status(201)
//       .json({
//         msg: "app.route() sucks,use express router instead,post request",
//       });
// });

// app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
// app.get("/ab*cd", (req: Request, res: Response) => res.send("/ab*cd"));
// app.get(/abc/g, (req: Request, res: Response) =>
//   res.send("Who tf uses regex for path.")
// );

app.get(
  "/api/books/:bookId",
  [handleGetBookOne, handleGetBookTwo],
  (
    req: Request<
      { bookId: "string"; authorId: "string" },
      {},
      { name: "string" },
      {}
    >,
    res: Response
  ) => {
    console.log(req.params);
    console.log(req.body.name);

    console.log(req.params.authorId);
    return res.status(200).json({ content: req.params });
  }
);

app.listen(4000, () => {
  console.log("Server is listening on port 4000...");
});
