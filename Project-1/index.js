const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 7000;

// raw data from mackaroo.com

// Routes

// mobile apps html elements
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  return res.send(html);
});

// REST API

app.get("/api/users/", (req, res) => {
  return res.json(users);
});

// easy way if only one path route we have then use requests like this
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ status: pending });
  })
  .delete((req, res) => {
    return res.json({ status: pending });
  })

  // app.get("/api/users/:id", (req, res) => {
  //   const id = Number(req.params.id);
  //   const user = users.find((user) => user.id === id);
  //   return res.json(user);
  // });

  .app.post("/api/users/", (req, res) => {
    // To do : create new user
    return res.json({ status: pending });
  });

// app.patch("/api/users/:id", (req, res) => {
//   // To do : edit the user with id
//   return res.json({ status: pending });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // To do : delete the user with id
//   return res.json({ status: pending });
// });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
