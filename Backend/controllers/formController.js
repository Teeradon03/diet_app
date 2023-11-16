const controller = {};

// Read
controller.list = (req, res) => {
    //   console.log("controllerLIst");
    req.getConnection((err, conn) => {
        // console.log("getconnection");
        conn.query("SELECT * FROM form_info_table", (err, form_info_table) => {
            //   console.log("in side query");
            if (err) {
                res.json(err);
            }
            res.send(form_info_table);
        });
    });
};

controller.write = (req, res) => {
    const data = req.body;
    console.log("data", data)
    req.getConnection((err, conn) => {
        console.log('inside query write')
        conn.query("INSERT INTO form_info_table SET ?",[data],(err, form_info_table) => {
            console.log(
                "log something"
            )
                if (err) {
                    res.send(err);
                }
                res.send("write successfully");
            }
            
        );
    });
};

module.exports = controller;
