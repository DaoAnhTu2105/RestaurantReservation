import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Restaurants } from "../data/Restaurants";
import { Tables } from "../data/Tables";
import {
  TextField,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PopUpTable({ close, open }) {
  const [caTable, setCaTable] = useState("");
  const [statusTable, setStatusTable] = useState("");
  return (
    <>
      {console.log(close)}
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new Table
          </Typography>
          <Typography id="modal-modal-description">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="tableCapacity">Table Capacity</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={caTable}
                name="tableCapacity"
                placeholder="number of table"
                sx={{ mt: 1 }}
                onChange={(e) => setCaTable(e.target.value)}
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="tableStatus">Status</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={statusTable}
                name="tableStatus"
                placeholder="status"
                sx={{ mt: 1 }}
                onChange={(e) => setStatusTable(e.target.value)}
              />
            </Typography>
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }}>
            Add
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export const PopUpMenu = ({ close, open }) => {
  const [caTable, setCaTable] = useState("");
  const [statusTable, setStatusTable] = useState("");

  return (
    <>
      {console.log(close)}
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ marginLeft: 20 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new Menu
          </Typography>
          <Typography id="modal-modal-description">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="name">Name</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={caTable}
                name="name"
                placeholder="name"
                sx={{ mt: 1 }}
                onChange={(e) => setCaTable(e.target.value)}
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="menuDetail">Detail</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={statusTable}
                name="menuDetail"
                placeholder="detail"
                sx={{ mt: 1 }}
                onChange={(e) => setStatusTable(e.target.value)}
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="menuType">Type</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={statusTable}
                name="menuType"
                placeholder="type"
                sx={{ mt: 1 }}
                onChange={(e) => setStatusTable(e.target.value)}
              />
            </Typography>
            <FormControl sx={{ mt: 2, minWidth: 195 }}>
              <InputLabel id="demo-simple-select-label">
                RestaurantID
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="RestaurantID"
              >
                {Restaurants.map((resID) => {
                  return <MenuItem value={resID.id}>{resID.id}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="menuPrice">Price</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={statusTable}
                name="menuPrice"
                placeholder="price"
                sx={{ mt: 1 }}
                onChange={(e) => setStatusTable(e.target.value)}
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="menuStatus">Status</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={statusTable}
                name="menuStatus"
                placeholder="status"
                sx={{ mt: 1 }}
                onChange={(e) => setStatusTable(e.target.value)}
              />
            </Typography>
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }}>
            Add
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export const PopUpEditTable = ({ close, id, open }) => {
  const editTableID = Tables.find((item) => item.id == id);
  const [caTable, setCaTable] = useState(editTableID.tableCapacity);
  const [statusTable, setStatusTable] = useState(editTableID.status);
  console.log(editTableID);

  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Table
          </Typography>
          <Typography id="modal-modal-description">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="tableCapacity">Table Capacity</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={caTable}
                name="tableCapacity"
                placeholder="number of table"
                sx={{ mt: 1 }}
                onChange={(e) => setCaTable(e.target.value)}
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <label htmlFor="tableStatus">Status</label>
              <TextField
                id="standard-basic"
                variant="standard"
                value={statusTable}
                name="tableStatus"
                placeholder="status"
                sx={{ mt: 1 }}
                onChange={(e) => setStatusTable(e.target.value)}
              />
            </Typography>
          </Typography>
          <Button variant="outlined" sx={{ mt: 2 }}>
            CLOSE
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button variant="outlined" sx={{ mt: 2 }}>
            SAVE
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default PopUpTable;
