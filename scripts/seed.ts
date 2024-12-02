import "dotenv/config";
import { neon } from "@neondatabase/serverless";

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "../db/schema";

const sql = postgres(process.env.DATABASE_URL!);
// const sql = neon("postgres://postgres:1234@localhost:5432/langling");
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    await db.insert(schema.courses).values([
      { id: 1, title: "Spanish", imageSrc: "/es.svg" },
      { id: 2, title: "French", imageSrc: "/fr.svg" },
      { id: 3, title: "Croatian", imageSrc: "/hr.svg" },
      { id: 4, title: "Italian", imageSrc: "/it.svg" },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        description: "Learn the basics of spanish",
        order: 1,
        title: "Unit 1",
      },
    ]);

    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, title: "Nouns", order: 1 },
      { id: 2, unitId: 1, title: "Verbs", order: 2 },
      { id: 3, unitId: 1, title: "Verbs", order: 3 },
      { id: 4, unitId: 1, title: "Verbs", order: 4 },
      { id: 5, unitId: 1, title: "Verbs", order: 5 },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 1,
        question: "the man",
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which of these is the "the robot"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mojer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_robot.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },

      {
        challengeId: 2,
        correct: false,
        text: "la mojer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "el hombre",
        audioSrc: "/es_robot.mp3",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        imageSrc: "/man.svg",
        correct: true,
        text: "el hombre",
        audioSrc: "/es_man.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.svg",
        correct: false,
        text: "la mojer",
        audioSrc: "/es_woman.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/robot.svg",
        correct: false,
        text: "el hombre",
        audioSrc: "/es_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which of these is the "the man"?',
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 1,
        question: "the man",
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which of these is the "the robot"?',
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.log("Seeding failed");
    throw new Error("failed to seed");
  }
};

main();
