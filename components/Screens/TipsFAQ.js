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
            backgroundColor: "white",
            marginVertical: 3,
            marginLeft:12,
            marginRight:3,
            padding: 3,
            borderRadius: 5,
            
          }}
        >
          <ListItem.Content>
            <ListItem.Title>{props.a}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    );
  };
  
  const Accordion = ({title,sub}) => {
    const [expanded, setExpanded] = React.useState(false);
  
    return (
      <ListItem.Accordion
        style={{
          backgroundColor: "#A3BFA6",
          borderRadius: 5,
          margin: 3,
          height: 75,
        }}
        content={
          <ListItem.Content >
            <ListItem.Title
              style={{ fontWeight: "bold", backgroundColor: "parent" }}
            >
              {title}
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >{sub.map((item, index) => {return(
        <QATab key={index} q={item.question} a={item.answer} />
      );})}
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
          {question:"Full form of Saa",answer:"Smart Agriculture Aid"}
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
      
      <ImageBackground source={Dorji} style={{flex:1,marginTop:20}}>
      <ScrollView>

        <Text h3 style={{ fontWeight: "bold", padding: 4 ,textAlign:'center',marginTop:20}}>
          Frequently Asked Questions:
        </Text>
        {data.map((item, i) => {
          return(<Accordion title={item.title} key={i} sub={item.sub} />);
        })}
        
        <Text h3 style={{ fontWeight: "bold", padding: 4 ,marginTop:30,textAlign:'center' }}>
          Tips:
        </Text>
        {tips.map((item, i) => {
          return(<Accordion key={i} title={item.title} sub={item.sub} />);
        })}      
      
      </ScrollView>
      </ImageBackground>
    );
  };
  
  
  
  export default FAQ;
