// Import React
import React from "react";
// Import Spectacle Core tags
import { CodePane, Deck, Heading, Image, List, ListItem, Slide, Text, BlockQuote, Cite, Quote } from "spectacle";
// Import theme
import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");

const images = {
  def: require('../assets/kubernetes-def.png'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]}>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Intro to Kubernetes
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5}>
            Twitter: @JesseRWeigel
            {/* <a
              href="http://materialistic-earthquake.surge.sh/"
              style={{
                textDecoration: "none",
                display: "block",
                color: "rgb(253, 133, 61)",
                margin: "4px auto"
              }}
            >
              Slides: materialistic-earthquake.surge.sh
            </a> */}
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            What is Kubernetes
          </Heading>
          <Image src={images.def} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            What is Kubernetes
          </Heading>
          <BlockQuote>
            <Quote textColor="tertiary" style={{fontSize: '30px', lineHeight: 1.25}}>An open-source system for automating deployment, scaling, and management of containerized applications.</Quote>
            <Cite>kubernetes.io</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            What is Kubernetes
          </Heading>
           <List>
            <ListItem>Built by Google</ListItem>
            <ListItem>Groups containers that make up an application into logical units for easy management and discovery</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">
            Install WPGraphQL
          </Heading>
          <Text size={6} textColor="tertiary">
            Download the zip from the wp-graphql GitHub repo and upload to
            WordPress. Once activated, flush the permalinks.
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Setup Apollo
          </Heading>
          <Text size={6} textColor="tertiary">
            The easiest way to do this is to use a boilerplate. Try to use the
            most up to date one you can find, because things change pretty
            quickly with NextJS and Apollo.
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            GraphQL Queries
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/query.example")}
            theme="dark"
            margin="20px auto"
            style={{ fontSize: "18px" }}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Query Component
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/queryComp.example")}
            theme="dark"
            margin="20px auto"
            style={{ fontSize: "18px" }}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Deployment
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/now.example")}
            theme="dark"
            margin="20px auto"
            style={{ fontSize: "18px" }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Take it Further
          </Heading>
          <List>
            <ListItem>Custom Post Types</ListItem>
            <ListItem>Cloud Database and Storage</ListItem>
            <ListItem>Custom Routing</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
