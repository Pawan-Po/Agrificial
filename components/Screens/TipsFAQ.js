import { ListItem, Text } from "@rneui/themed";
import React from "react";
import {View, ScrollView, ImageBackground} from "react-native";
import Dorji from "../../assets/Dorji.png";


const QATab = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    return (
      <ListItem.Accordion
        style={{
          borderRadius: 5,
          borderWidth: 2,
          marginLeft:10,
          marginRight:3,
          marginVertical:3,
          padding:5
  
        }}
        content={
          <ListItem.Content style={{}}>
            <ListItem.Title
              style={{ fontWeight: "bold" }}
            >
              {props.q}
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem
          style={{
            marginVertical: 3,
            marginLeft:12,
            marginRight:3,
            padding: 3,
            borderRadius: 5,
            borderWidth: 2,
          }}
        >
          <ListItem.Content>
            <ListItem.Title>{props.a}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    );
  };
  
  const Accordion = (props) => {
    const [expanded, setExpanded] = React.useState(false);
  
    return (
      <ListItem.Accordion
        style={{
          backgroundColor: "black",
          borderRadius: 5,
          borderWidth: 2,
          margin: 3,
          height: 75,
        }}
        content={
          <ListItem.Content>
            <ListItem.Title
              style={{ fontWeight: "bold", backgroundColor: "parent" }}
            >
              {props.title}
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
       <QATab q={props.q} a={props.a}/>
      </ListItem.Accordion>
    );
  };


const FAQ = () => {
    const [expanded, setExpanded] = React.useState(false);
    
  
    const data = [
      {
        title: "Saa Related Questions",
        sub: [
          { question: "What is Saa?", answer: "Saa is a software as a service" },
        ],
      },
      {
        title: "Support Related Questions",
        sub: [
          {
            question: "How to contact support?",
            answer: "You can contact support by email",
          },
        ],
      },
      {
        title: "System Related Questions",
        sub: [
          {
            question: "In what interface Saa is used?",
            answer: "Saa is used in mobile interface both android and IOS",
          },
        ],
      }
    ];
  
    const tips = [
      {
        title: "Watering Tips",
        sub: [
          { question: "When to water the plants?", answer: "Best Time to water the plants is at morning." },
        ],
      },
      {
        title: "Harvesting Tips",
        sub: [
          {
            question: "What to do after harvesting?",
            answer: "Selling is an optimal idea",
          },
        ],
      },
      {
        title: "Manuring Tips",
        sub: [
          {
            question: "What amount of manure to use?",
            answer: "Use 1kg of manure per 1 acre of land",
          },
        ],
      }
    ];
  
    return (
      
      <ImageBackground source={Dorji} style={{flex:1}}>
      <ScrollView>

        <Text h3 style={{ fontWeight: "bold", padding: 4 }}>
          Tips:
        </Text>
        <Accordion title={tips[0].title} q={tips[0].sub[0].question} a={tips[0].sub[0].answer}/>
        <Accordion title={tips[1].title} q={tips[1].sub[0].question} a={tips[1].sub[0].answer}/>
        <Accordion title={tips[2].title} q={tips[2].sub[0].question} a={tips[2].sub[0].answer}/>  
      
        <Text h3 style={{ fontWeight: "bold", padding: 4 }}>
          Frequently Asked Questions:
        </Text>
        <Accordion title={data[0].title} q={data[0].sub[0].question} a={data[0].sub[0].answer}/>
        <Accordion title={data[1].title} q={data[1].sub[0].question} a={data[1].sub[0].answer}/>
        <Accordion title={data[2].title} q={data[2].sub[0].question} a={data[2].sub[0].answer}/>  
      
      </ScrollView>
      </ImageBackground>
    );
  };
  
  
  
  export default FAQ;
