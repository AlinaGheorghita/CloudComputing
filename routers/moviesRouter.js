const connection = require("../db.js");
const mysql = require("mysql");
const express = require("express");
const { sendMail } = require("../mail.js");
const router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM movies", (err, results) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            movies: results,
        });
    });
});

router.post("/movies", (req, res) => {
    const {
        movieName,
        searchDate,
        userName
    } = req.body;

    if (!movieName || !searchDate || !userName) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }

    const queryString = `INSERT INTO messages (movieName, searchDate, userName) VALUES (${mysql.escape(movieName)}, ${mysql.escape(searchDate)}, ${mysql.escape(userName)})`;

    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }

        return res.json({
            data: results,
        });
    });
});


// Add get by id route
router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `SELECT * FROM movies WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            messages: results,
        });
    }
    );
}
);

// Add delete by id route
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `DELETE FROM movies WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            results,
        });
    }
    );
}
);

// Add update by id route
router.put("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const { movieName, searchDate, userName } = req.body;
    if (!movieName || !searchDate || !userName) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `UPDATE movies SET movieName = ${mysql.escape(movieName)}, searchDate = ${mysql.escape(searchDate)}, userName = ${mysql.escape(userName)}  WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            results,
        });
    }
    );
}
);

router.post("/foreign", async (req, res) => {
    const { senderName, senderMail, receiverMail, messageContent } =
        req.body;

    if (!senderName || !senderMail || !receiverMail || !messageContent) {
        // send bad request error
        return res.status(400).send("Bad request. Missing parametres.");
    }

    try {
        //Send the message through the mail service
        const sendMailResponse = await sendMail(
            receiverMail,
            senderMail,
            senderName + "" + " sent you a message",
        );
    } catch (err) {
        console.log(err);
        return res.send("Something went wrong");
    }
});


module.exports = router;
