import { Card, CardContent, CardActions, Divider } from "@mui/material";
import WelcomeMessage from "../molecules/WelcomeMessage";
import LoginPrompt from "../molecules/LoginPrompt";
import RegisterPrompt from "../molecules/RegisterPrompt";

export default function WelcomeCard() {
  return (
    <Card
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <WelcomeMessage />
      </CardContent>
      <Divider />
      <CardContent>
        <LoginPrompt />
      </CardContent>
      <Divider />
      <CardActions>
        <RegisterPrompt />
      </CardActions>
    </Card>
  );
}
