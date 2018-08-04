// Import React
import React from "react";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from "spectacle";
// Import theme
import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");

const images = {
  def: require("../assets/kubernetes-def.png")
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
            <Quote
              textColor="tertiary"
              style={{ fontSize: "30px", lineHeight: 1.25 }}
            >
              An open-source system for automating deployment, scaling, and
              management of containerized applications.
            </Quote>
            <Cite>kubernetes.io</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            What is Kubernetes
          </Heading>
          <List>
            <ListItem>Built by Google and Open Source</ListItem>
            <ListItem>
              Groups containers that make up an application into logical units
              for easy management and discovery
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">
            Kubernetes Features
          </Heading>
          <List>
            <ListItem>Automatic binpacking</ListItem>
            <ListItem>Self-healing</ListItem>
            <ListItem>Horizontal scaling</ListItem>
            <ListItem>Service discovery and load balancing</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">
            Kubernetes Features
          </Heading>
          <List>
            <ListItem>Automated rollouts and rollbacks</ListItem>
            <ListItem>Secret and configuration management</ListItem>
            <ListItem>Storage orchestration</ListItem>
            <ListItem>Batch execution</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">
            Why Use Kubernetes
          </Heading>
          <List>
            <ListItem>Simplified application deployment</ListItem>
            <ListItem>Better use of machine resources</ListItem>
            <ListItem>Lower Costs</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">
            Why Use Kubernetes
          </Heading>
          <Text size={6} textColor="tertiary">
            When a instance goes down, Kubernetes will automatically restart
            and/or start a new instance, and handle any networking issues for
            the new instance.
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={2} textColor="secondary">
            Getting Started
          </Heading>
          <List>
            <ListItem>Learn Docker</ListItem>
            <ListItem>In browser Kubernetes Tutorials</ListItem>
            <ListItem>Locally with Minikube</ListItem>
            <ListItem>Google Container Engine (GKE)</ListItem>
          </List>
        </Slide>
        {/* <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">
            Kubernetes Terminology
          </Heading>
        </Slide> */}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Resources
          </Heading>
          <List>
            <ListItem>
              <Link href="https://kubernetes.io/docs/">
                https://kubernetes.io/docs/
              </Link>
            </ListItem>
            <ListItem>
              Kubernetes: Up and Running, Kelsey Hightower (Book)
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
