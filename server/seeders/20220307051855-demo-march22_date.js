"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "march22_dates",
      [
        {
          month: 2,
          date: 20,
          yo_il: "일",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 2,
          date: 21,
          yo_il: "월",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 2,
          date: 22,
          yo_il: "화",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 2,
          date: 23,
          yo_il: "수",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 2,
          date: 24,
          yo_il: "목",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 2,
          date: 25,
          yo_il: "금",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 2,
          date: 26,
          yo_il: "토",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 2,
          date: 27,
          yo_il: "일",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          month: 2,
          date: 28,
          yo_il: "월",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 1,
          yo_il: "화",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 2,
          yo_il: "수",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 3,
          yo_il: "목",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 4,
          yo_il: "금",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 5,
          yo_il: "토",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 6,
          yo_il: "일",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 7,
          yo_il: "월",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 8,
          yo_il: "화",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 9,
          yo_il: "수",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 10,
          yo_il: "목",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 11,
          yo_il: "금",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 12,
          yo_il: "토",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 13,
          yo_il: "일",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 14,
          yo_il: "월",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 15,
          yo_il: "화",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 16,
          yo_il: "수",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 17,
          yo_il: "목",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 18,
          yo_il: "금",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 19,
          yo_il: "토",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 20,
          yo_il: "일",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 21,
          yo_il: "월",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 22,
          yo_il: "화",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 23,
          yo_il: "수",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 24,
          yo_il: "목",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 25,
          yo_il: "금",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 26,
          yo_il: "토",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 27,
          yo_il: "일",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 28,
          yo_il: "월",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 29,
          yo_il: "화",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 30,
          yo_il: "수",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          month: 3,
          date: 31,
          yo_il: "목",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("march22_dates", null, {});
  },
};
