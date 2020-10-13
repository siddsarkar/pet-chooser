import React from "react";
import "./App.css";
import {
  AppBar,
  createMuiTheme,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Pets } from "@material-ui/icons";

import Main from "./containers/Main";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    dark: {
      main: "#1b1b1b",
      core: "#000000",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar color="default" position="sticky">
        <Toolbar style={{ alignSelf: "center" }} variant="dense">
          <IconButton color="inherit" className="App-logo">
            <Pets />
          </IconButton>
          <Typography>Pet-Chooser</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 20 }}>
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
