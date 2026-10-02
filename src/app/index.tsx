import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>Course: {course}</Text>
      <Text style={styles.details}>Units: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

export default function StudentRoster() {
  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Ana Cruz',
      course: 'IT313',
      units: 21,
      isFullLoad: true,
    },
    {
      id: 's2',
      name: 'Bea Santos',
      course: 'IT313',
      units: 15,
      isFullLoad: false,
    },
    {
      id: 's3',
      name: 'Cid Ramos',
      course: 'IT313',
      units: 18,
      isFullLoad: true,
    },
    {
      id: 's4',
      name: 'Dex Alonzo',
      course: 'IT313',
      units: 12,
      isFullLoad: false,
    },
  ]);

  function reverseRoster() {
    setStudents([...students].reverse());
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>IT313 Student Roster</Text>

      <Text style={styles.count}>
        {`${students.length} Students`}
      </Text>

      <Pressable
        style={styles.button}
        onPress={reverseRoster}
      >
        <Text style={styles.buttonText}>Reverse Roster</Text>
      </Pressable>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#F3F4F6',
    flexGrow: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  count: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginBottom: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
  fullLoad: {
    alignSelf: 'flex-start',
    backgroundColor: '#D1FAE5',
    color: '#065F46',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginTop: 8,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});