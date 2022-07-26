import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { signInButtonContent } from "aws-amplify";

function App({ signInButtonContent, user }) {
  //Todo logic here

  return (
    <>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
}
export default withAuthenticator(App);
