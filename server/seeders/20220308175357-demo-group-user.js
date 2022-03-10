'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "group_users",
      [
        // 1 그룹에 가입
        {
          user_id: 1,
          group_routine_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          group_routine_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          group_routine_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          group_routine_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 2 그룹에 가입
        {
          user_id: 4,
          group_routine_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          group_routine_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          group_routine_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 3 그룹에 가입
        {
          user_id: 1,
          group_routine_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          group_routine_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          group_routine_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          group_routine_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 4 그룹에 가입
        {
          user_id: 1,
          group_routine_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          group_routine_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          group_routine_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          group_routine_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 5 그룹에 가입
        {
          user_id: 1,
          group_routine_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          group_routine_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          group_routine_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          group_routine_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          group_routine_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // 6 그룹에 가입
        {
          user_id: 1,
          group_routine_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          group_routine_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          group_routine_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          group_routine_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          group_routine_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        // 7 그룹에 가입
        {
          user_id: 3,
          group_routine_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          group_routine_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 8,
          group_routine_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

         // 8 그룹에 가입
         {
          user_id: 1,
          group_routine_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          group_routine_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          group_routine_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          group_routine_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("group_users", null, {});
  }
};
