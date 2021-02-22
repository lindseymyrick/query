import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const QuestionCategoryCard = ({ title, src }) => (
        <Card>
            <Card.Content>
                <Title>{title}</Title>
                {/* <Paragraph>Card content</Paragraph> */}
            </Card.Content>
                <Card.Cover source={{uri: src}} />
            <Card.Actions>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 25
  }
});

export default QuestionCategoryCard;


            //     <Card.Content>
            //     <Title>Javascript</Title>
            //     {/* <Paragraph>Card content</Paragraph> */}
            //     </Card.Content>
            //     <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }} />
            //     <Card.Actions>
            //     <Button>Cancel</Button>
            //     <Button>Ok</Button>
            //     </Card.Actions>
            // </Card>
            // <Card>
            //     <Card.Content>
            //     <Title>Behavioral</Title>
            //     {/* <Paragraph>Card content</Paragraph> */}
            //     </Card.Content>
            //     <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1528459584353-5297db1a9c01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80' }} />
            //     <Card.Actions>
            //     <Button>Cancel</Button>
            //     <Button>Ok</Button>
            //     </Card.Actions>
            // </Card>
            // <Card>
            //     <Card.Content>
            //     <Title>Swift</Title>
            //     {/* <Paragraph>Card content</Paragraph> */}
            //     </Card.Content>
            //     <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1601752943749-7dd8d89f407a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }} />
            //     <Card.Actions>
            //     <Button>Cancel</Button>
            //     <Button>Ok</Button>
            //     </Card.Actions>
            // </Card> 