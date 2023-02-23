import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { pink } from "@mui/material/colors";
export default function Fa() {
  const [style, setstyle] = useState({
    Font: "",
    Color: "",
    Background: "",
    Fsize: "",
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handlechanged = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log(name, value);

    setstyle({ ...style, [name]: value });
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          name="Font"
          Value={style.Font}
          onChange={handlechanged}
          helperText="Please select your currency"
        >
          <MenuItem value="Aclonica">Aclonica</MenuItem>
          <MenuItem value="Allan">Allan</MenuItem>
          <MenuItem value="Anni Use Your Telescope">
            Anni Use Your Telescope
          </MenuItem>
          <MenuItem value="Anonymous Pro">Anonymous Pro</MenuItem>
          <MenuItem value="Allerta Stencil">Allerta Stencil</MenuItem>
          <MenuItem value="Allerta">Allerta</MenuItem>
          <MenuItem value="Amaranth">Amaranth</MenuItem>
          <MenuItem value="Anton">Anton</MenuItem>
          <MenuItem value="Arimo">Arimo</MenuItem>
          <MenuItem value="Bevan">Bevan</MenuItem>
          <MenuItem value="Cabin">Cabin</MenuItem>
          <MenuItem value="Droid Sans">Droid Sans</MenuItem>
        </TextField>
        
        <TextField
          id="outlined-select-currency"
          select
          name="Color"
          label="Select"
          Value={style.Color}
          onChange={handlechanged}
          helperText="Please select your color"
        >
          <MenuItem value="#ffffff">#ffffff</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">
            {" "}
            <Checkbox
              {...label}
              sx={{
                backgroundColor: pink[600],
                "&.Mui-checked": {
                  backgroundColor: pink[600],
                },
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
            #DDDD
          </MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
          <MenuItem value="#DDDD">#DDDD</MenuItem>
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          name="Background"
          label="Select"
          onChange={handlechanged}
          Value={style.Background}
          helperText="Please select your color"
        >
          <MenuItem value="12">12</MenuItem>
          <MenuItem value="13">13</MenuItem>
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          name="Fsize"
          label="Select"
          Value={style.Fsize}
          onChange={handlechanged}
          helperText="Please select your  background color"
        >
          <MenuItem value="red">red</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
        </TextField>
        <Checkbox
          value="topleft "
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
          value="topcenter "
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
          value="topright "
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
          value="middleleft "
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
          value="middlecenter"
          inputProps={{ "aria-label": "controlled" }}
        />
        <Checkbox
          value="middleright "
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div></div>
      <div></div>
    </Box>
  );
}
