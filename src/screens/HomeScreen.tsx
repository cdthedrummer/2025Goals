import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoalCategory } from '../types';

const initialCategories: GoalCategory[] = [
  {
    id: '1',
    title: 'Career Development',
    goals: [
      {
        id: '1',
        title: 'Business Discovery Sprints',
        description: 'Run 3 one-month experiments testing different business ideas',
        difficulty: 3,
        time: 3,
        expense: 2,
        impact: 3,
        feasibility: 2,
        benefit: 3,
        progress: 0,
        milestones: [
          'Month 1: Product Review/Comparison Site',
          'Month 2: Woodworking Custom Pieces',
          'Month 3: Goal Setting Platform'
        ]
      }
    ]
  }
];

export default function HomeScreen({ navigation }) {
  const theme = useTheme();

  const renderGoalCard = (goal) => (
    <Card
      key={goal.id}
      style={styles.card}
      onPress={() => navigation.navigate('GoalDetail', { goal })}
    >
      <Card.Content>
        <Title>{goal.title}</Title>
        <Paragraph>{goal.description}</Paragraph>
        <View style={styles.metrics}>
          <View style={styles.metric}>
            <Paragraph>Difficulty: {goal.difficulty}</Paragraph>
          </View>
          <View style={styles.metric}>
            <Paragraph>Impact: {goal.impact}</Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {initialCategories.map(category => (
          <View key={category.id} style={styles.categoryContainer}>
            <Title style={styles.categoryTitle}>{category.title}</Title>
            {category.goals.map(renderGoalCard)}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  categoryContainer: {
    padding: 16,
  },
  categoryTitle: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  metrics: {
    flexDirection: 'row',
    marginTop: 8,
  },
  metric: {
    marginRight: 16,
  },
});