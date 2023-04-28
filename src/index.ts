import express from "express";
import {SeatAudience} from "./seat-audience";
import path from "path";
import {isValid2DArray} from "./validator";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/', (req, res) => {
    const {seat_plan, number_of_passengers} = req.body;

    if (isValid2DArray(seat_plan) === false) {
        res.render("index", { error: "Invalid seat plan", seat_plan, number_of_passengers });
        return;
    }

    if (isNaN(number_of_passengers) || number_of_passengers <= 0) {
        res.render("index", { error: "Number of passengers must be a positive integer", seat_plan, number_of_passengers });
        return;
    }

    const seatAudience = new SeatAudience(JSON.parse(seat_plan), number_of_passengers);
    const grid = seatAudience.getGrid();

    res.render("index", { grid, seat_plan, number_of_passengers });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});